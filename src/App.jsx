import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import OnboardingWizard from './components/onboarding/OnboardingWizard';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Diary from './pages/Diary';
import Chat from './pages/Chat';
import Profile from './pages/Profile';

import Schedule from './pages/Schedule';
import Classes from './pages/Classes';
import CourseDetail from './pages/CourseDetail';
import Recipes from './pages/Recipes';
import AboutRDN from './pages/AboutRDN';
import RecipeDetail from './pages/RecipeDetail';
import NewClient from './pages/NewClient';
import Subscription from './pages/Subscription';

function App() {
  const [loading, setLoading] = useState(true);
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  // Simulate checking local storage for onboarding status
  useEffect(() => {
    const isDone = localStorage.getItem('onboardingDone');
    if (isDone) setOnboardingComplete(true);
  }, []);

  const handleOnboardingFinish = () => {
    localStorage.setItem('onboardingDone', 'true');
    setOnboardingComplete(true);
  };

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  // If not onboarded, show wizard
  if (!onboardingComplete) {
    return <OnboardingWizard onComplete={handleOnboardingFinish} />;
  }

  // Main App with Tab Layout
  return (
    <div className="app-container">
      <Router basename="/gutti-nutrition">
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* Sub-pages outside bottom nav or inside? Let's keep them accessible via Dashboard */}
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/about" element={<AboutRDN />} />
          <Route path="/signup" element={<NewClient />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
