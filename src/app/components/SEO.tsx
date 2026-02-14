import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export function SEO({ 
  title = "AOURAGH DHIAEDDINE - Développeur Full-Stack",
  description = "Portfolio professionnel de AOURAGH DHIAEDDINE, développeur Full-Stack spécialisé en React, Node.js, MongoDB. Diplômé en Réseaux et Systèmes Distribués (USTHB).",
  keywords = "développeur full-stack, react, node.js, mongodb, portfolio, web development, USTHB, Algérie"
}: SEOProps) {
  
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);
  }, [title, description, keywords]);

  return null;
}
