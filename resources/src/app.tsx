import '../css/app.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Layout from './Layouts/Layout';

createInertiaApp({
  title: (title) => 'PCM - ' + title,
  // @ts-ignore
  resolve: async (name) => {
    // const page = resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx'));
    const page = (await import(`./Pages/${name}.tsx`)).default;
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
