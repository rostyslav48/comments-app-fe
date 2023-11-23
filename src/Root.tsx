import { Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import App from './App';
import NotFound from './pages/not-found';

const Root = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default Root;
