import starActive from '/src/assets/star-active.svg';
import starInactive from '/src/assets/star-inactive.svg';
import './Rating.css';

export default function Rating({ score }) {
  const rating = parseInt(score, 10); 

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <img
        key={i}
        src={i <= rating ? starActive : starInactive}
        alt={i <= rating ? 'Étoile active' : 'Étoile inactive'}
        className="rating-star"
      />
    );
  }

  return <div className="rating">{stars}</div>;
}
