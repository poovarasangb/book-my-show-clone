import "scss/init.scss";

import { createRoot } from 'react-dom/client';
import React from 'react';

// import { App } from './app';
import AdminSeatArrangement from "./admin/seat-arrangements/init";

const mainElement = document.createElement('main');
document.body.appendChild(mainElement);
document.title = 'BookMyShow';

const root = createRoot(mainElement);
root.render(
    <React.StrictMode>
        <AdminSeatArrangement />
        {/* <App/> */}
    </React.StrictMode>
);
