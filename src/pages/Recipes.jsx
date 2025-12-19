import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';
import { recipes } from '../data/recipes';
import './Recipes.css';

const Recipes = () => {
    const [filter, setFilter] = useState('All');

    // Simple filtering logic
    const filteredRecipes = filter === 'All'
        ? recipes
        : recipes.filter(r => r.category === filter);

    return (
        <div className="page-container padded">
            <PageHeader title="Recipe Vault" />

            <div className="filter-scroll">
                {['All', 'Detox', 'Energy', 'Digestion', 'Hydration'].map(f => (
                    <button
                        key={f}
                        className={`filter-chip ${filter === f ? 'active' : ''}`}
                        onClick={() => setFilter(f)}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <div className="recipes-grid stagger-list">
                {filteredRecipes.map((recipe, index) => (
                    <Link to={`/recipes/${recipe.id}`} key={recipe.id} className="recipe-card glass-panel" style={{ '--i': index }}>
                        <div className="recipe-thumb">
                            <img src={recipe.image} alt={recipe.title} />
                        </div>
                        <div className="recipe-content">
                            <span className="cat-tag-sm">{recipe.category}</span>
                            <h4>{recipe.title}</h4>
                            <div className="meta-mini">
                                <span>🔥 {recipe.calories}</span>
                                <span>⏱️ {recipe.prepTime}</span>
                            </div>
                        </div>
                        <div className="view-btn">→</div>
                    </Link>
                ))}
            </div>

            <div style={{ height: 80 }}></div>
        </div>
    );
};

export default Recipes;
