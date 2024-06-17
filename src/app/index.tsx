import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './providers/router';

export const App = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
