import React from 'react';
import './FeatureCard.css';

export default function FeatureCard({ title, description, image }) {
  return (
    <div className="feature-card">
      <img src={image} alt={title} className="feature-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
