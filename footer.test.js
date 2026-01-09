import Footer from '/src/components/Footer';
import { render, screen } from '@testing-library/react';
describe('Footer Component', () => {
  test('renders the footer with correct text', () => {
    render(<Footer />);
     expect(screen.getByText('© 2026 Kasa. All rights reserved')).toBeInTheDocument();
  });
});