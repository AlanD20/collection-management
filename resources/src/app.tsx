// @ts-nocheck
import './bootstrap';
import '../css/app.css';
import 'react-day-picker/dist/style.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Layout from './Layouts/Layout';

createInertiaApp({
  title: (title) => `${title} - PCM`,
  resolve: async (name) => {
    const page = (
      await resolvePageComponent(
        `./Pages/${name}.tsx`,
        import.meta.glob('./Pages/**/*.tsx')
      )
    ).default;

    if (page.layout === undefined) {
      page.layout = Layout.bind(undefined, { title: name });
    }
    return page;
  },
  setup({ el, App, props }) {
    return ReactDOM.createRoot(el).render(
      <React.StrictMode>
        <App {...props} />
      </React.StrictMode>
    );
  },
});

InertiaProgress.init({ color: '#377CFB' });
