import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './providers/router';
import { StoreProvider } from './providers/StoreProvider';
import './styles/index.scss';

export const App = () => (
  <StoreProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StoreProvider>
);
