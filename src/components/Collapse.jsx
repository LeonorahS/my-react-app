import { useState } from 'react';
import './Collapse.css';

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <article className="collapse">
      <button className="collapse-header" onClick={toggle}>
        <h3 className="collapse-title">{title}</h3>
        <span className={`collapse-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="collapse-content">
          <p>{children}</p>
        </div>
      )}
    </article>
  );
}