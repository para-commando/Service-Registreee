import { createBrowserRouter } from 'react-router-dom';
import Root, {
  loader as rootLoader,
  action as rootAction,
} from './routes/Root';
import ErrorScreen from './routes/ErrorScreen';
import Services, { loader as serviceLoader } from './routes/Services';
import EditService, { action as serviceAction } from './routes/EditService';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorScreen />,
    loader: rootLoader,
    action: rootAction,
    children: [
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
    ],
  },
]);

export default router;
