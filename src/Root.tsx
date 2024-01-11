import React from 'react';
import { Navigate, Route, Routes, HashRouter as Router } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { CharacterPage } from './pages/CharacterPage/CharacterPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

export const Root: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="/characters/:id" element={<CharacterPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);