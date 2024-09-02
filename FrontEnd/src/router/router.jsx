import { createBrowserRouter } from 'react-router-dom';
import Root, { loader as rootLoader } from './routes/Root';
import ErrorScreen from './routes/ErrorScreen';
import Services, { loader as serviceLoader } from './routes/Services';
import EditService, { action as serviceAction } from './routes/EditService';
import CreateService, { action as createAction } from './routes/CreateService';
import Index from './routes/Index';
 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorScreen />,
    loader: rootLoader,
    children: [
      { index: true, element: <Index /> },
      {
        path: 'services/:serviceId',
        element: <Services />,
        loader: serviceLoader,
      },
      {
        path: 'services/:serviceId/edit',
        element: <EditService />,
        loader: serviceLoader,
        action: serviceAction,
      },
      {
        path: 'services/create',
        element: <CreateService />,
        action: createAction,
      },
    ],
  },
]);

export default router;
