import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { recipes } from '../data/recipes';
import './RecipeDetail.css';

const RecipeDetail = () => {
    const { id } = useParams(); // Should match /recipes/:id
    const navigate = useNavigate();

    // Find recipe (mock find since we aren't using real router params yet in main)
    // For this prototype, we'll likely need to pass via state or just find by a prop. 
    // BUT since we are building "Real", let's assume we will pass the ID via URL.

    const recipe = recipes.find(r => r.id === id);

    if (!recipe) return (
        <div className="page-container padded center-msg">
            <h2>Recipe Not Found</h2>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );

    return (
        <div className="recipe-detail-page">
            <div className="recipe-hero" style={{ backgroundImage: `url(${recipe.image})` }}>
                <button className="back-bubble" onClick={() => navigate(-1)}>←</button>
            </div>

            <div className="recipe-sheet glass-panel-up">
                <span className="recipe-cat-tag">{recipe.category}</span>
                <h1 className="recipe-title-lg">{recipe.title}</h1>

                <div className="recipe-meta-row">
                    <div className="meta-pill">🔥 {recipe.calories} kcal</div>
                    <div className="meta-pill">💪 {recipe.protein} protein</div>
                    <div className="meta-pill">⏱️ {recipe.prepTime}</div>
                </div>

                <p className="recipe-desc">{recipe.description}</p>

                <div className="ingredients-section">
                    <h3>Ingredients</h3>
                    <ul className="ing-list">
                        {recipe.ingredients.map((ing, i) => (
                            <li key={i}>{ing}</li>
                        ))}
                    </ul>
                </div>

                <div className="instructions-section">
                    <h3>Instructions</h3>
                    <ol className="inst-list">
                        {recipe.instructions.map((step, i) => (
                            <li key={i}>
                                <span className="step-num">{i + 1}</span>
                                <span className="step-text">{step}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;
