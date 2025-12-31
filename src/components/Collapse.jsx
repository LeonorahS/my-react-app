import { useState } from 'react';
import arrow from '/src/assets/arrow-collapse.svg'; 
import './Collapse.css';

export default function Collapse({ title, children }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev); 
  };

  return (
    <div className="collapse">
      <button type="button" className="collapse-header" onClick={toggle}>
        <h3 className="collapse-title">{title}</h3>
        <img
          src={arrow}
          alt={isOpen ? 'Fermer' : 'Ouvrir'}
          className={`collapse-arrow ${isOpen ? 'open' : ''}`}
        />
      </button>

      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        <div className="collapse-inner">
          {children} 
        </div>
      </div>
    </div>
  );
}