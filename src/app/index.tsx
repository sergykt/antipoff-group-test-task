import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './providers/router';
import { StoreProvider } from './providers/StoreProvider';
import './styles/index.scss';

export const App = () => (
  <BrowserRouter>
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  </BrowserRouter>
);
