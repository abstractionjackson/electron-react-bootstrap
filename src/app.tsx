import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';

import { App } from './containers/App';
import { Home } from './containers/Home';
import { SomeForm } from './containers/SomeForm';
import ErrorPage from './errorPage';

const rootNode = document.getElementById('root')
const root = createRoot(rootNode)

const router = createHashRouter([    
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home /> 
            },
            {
                path: "/form",
                element: <SomeForm /> //example or POC
            }
        ],
        errorElement: <ErrorPage />
    }
])
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
