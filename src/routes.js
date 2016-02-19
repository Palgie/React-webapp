import React from 'react';
import Router from 'react-routing/src/Router';
import fetch from './core/fetch';
import App from './components/App';
import HomePage from './components/HomePage';
import ContentPage from './components/ContentPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';
import ComponentsPage from './components/ComponentsPage';

const router = new Router(on => {
  on('*', async (state, next) => {
    const component = await next();
    return component && <App context={state.context}>{component}</App>;
  });

  on('/', async() => <HomePage />);
  on('/login', async () => <LoginPage />);
  on('/ui', async () => <ComponentsPage />);

  on('/register', async () => <RegisterPage />);

  on('*', async (state) => {
    const response = await fetch(`/api/content?path=${state.path}`);
    const content = await response.json();
    return response.ok && content && <ContentPage {...content} />;
  });

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  );
});

export default router;
