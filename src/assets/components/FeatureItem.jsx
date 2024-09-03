import React from 'react'

function FeatureItem({icon, alt, title, paragraphe}) {
  return (
    <div className="feature-item">
          <img src={icon} alt={alt} className="feature-icon" />
          <h3 className="feature-item-title">{title}</h3>
          <p>
            {paragraphe}
          </p>
    </div>
  )
}

export default FeatureItem