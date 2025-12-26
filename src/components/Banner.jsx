

import './Banner.css';

export default function Banner({ image, title, className = '' }) {
  return (
    <section className={`banner ${className}`}>
      <img src={image} alt="" className="banner-img" />
      <div className="banner-overlay"></div>
      {title && <h1 className="banner-title">{title}</h1>}
    </section>
  );
}