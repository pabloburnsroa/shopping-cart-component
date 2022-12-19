import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export function Root() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-5">
        <Outlet />
      </div>
    </>
  );
}
