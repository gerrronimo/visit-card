import React, { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BlogPage } from './blog';
import { MainPage } from './main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/blog',
        element: <BlogPage />,
    },
]);

export const RouterComponent: FC = () => {
    return <RouterProvider router={router} />;
};
