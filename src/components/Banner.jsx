
import './Banner.css';

export default function Banner({ image, title = '' }) {
  return (
    <section className="banner">
      <img src={image} alt="Bannière" className="banner-img" />
      <div className="banner-overlay"></div>
      {title && <h1 className="banner-title">{title}</h1>} 
    </section>
  );
}