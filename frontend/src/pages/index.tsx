import BackgroundLayout from '../layout/BackgroundLayout';
import DashboardLayout from '../layout/DashboardLayout';
import Assignments from './admin/Assignments';
import authroutes from './auth/routes';
import DashboardView from './dashboard';
import courseRoutes from './course/index';
import learnersRoutes from './public';

export default [
  {
    element: <BackgroundLayout />,
    children: [
      {
        path: '/',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <DashboardView />,
          },
          {
            path: '/assignments',
            element: <Assignments />,
          },
          ...learnersRoutes,
          courseRoutes,
        ],
      },
      authroutes,
    ],

  }];
