import { createBrowserRouter } from 'react-router-dom';
import Root,{loader as rootLoader, action as rootAction} from './routes/Root';
import ErrorScreen from './routes/ErrorScreen';
import Services,{loader as serviceLoader} from './routes/Services';

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
    ],
  },
]);

export default router;
