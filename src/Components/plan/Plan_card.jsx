import React from 'react'
import "./plan.css"

export const Plan_card = ({ title, duration, icon, features, selected, onClick, price }) => {
    return (
      <div
        className="plan-card"
      >
        <h3>{title}</h3>
        {duration && <p className="duration">{duration} - {price}</p>}
        <div className="icon-plan">{icon}</div>
        <ul>
          {features.map((feat, i) => (
            <li key={i}>{feat}</li>
          ))}
        </ul>
        <button className={`btn ${selected ? 'selected' : ''}`} onClick={onClick}>Subscribe</button>
      </div>
    );
}
