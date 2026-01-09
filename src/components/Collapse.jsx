import { useState } from 'react';
import arrow from '/src/assets/arrow-collapse.svg'; 
import './Collapse.css';

export default function Collapse({ title, children }) {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapse">
      <button className="collapse-header" onClick={toggle}>
        <h3 className="collapse-title">{title}</h3>
        <img
          src={arrow}
          alt=""
          className={`collapse-arrow ${isOpen ? 'open' : ''}`}
        />
      </button>

      {isOpen && (
  <div className="collapse-content open">
    <div className="collapse-inner">
      {children}
    </div>
  </div>
)}
      </div>
    
  );
}