import { render, screen, fireEvent } from '@testing-library/react';
import Collapse from './Collapse';

describe('Collapse Component', () => {
  
  it('ouvre et ferme le contenu au clic', () => {
    render(
      <Collapse title="Fiabilité">
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
      </Collapse>
    );

    expect(
      screen.queryByText(/garantissent une fiabilité totale/i)
    ).not.toBeInTheDocument();

    const btn = screen.getByRole('button', { name: /fiabilité/i });
    fireEvent.click(btn);

  
    expect(
      screen.getByText(/garantissent une fiabilité totale/i)
    ).toBeInTheDocument();

    
    fireEvent.click(btn);
    expect(
      screen.queryByText(/garantissent une fiabilité totale/i)
    ).not.toBeInTheDocument();
  });
});