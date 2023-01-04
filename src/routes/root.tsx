import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Container } from 'react-bootstrap';
import { ShoppingCartProvider } from '../context/ShoppingCartContext';

export function Root() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Outlet />
      </Container>
    </ShoppingCartProvider>
  );
}
