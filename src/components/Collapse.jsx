import { useState, useRef, useEffect } from 'react';
import arrow from '/src/assets/arrow-collapse.svg';
import './Collapse.css';

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

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

      <div
        className={`collapse-content ${isOpen ? 'open' : ''}`}
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="collapse-inner">
          {children}
        </div>
      </div>
    </div>
  );
}