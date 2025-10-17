const dashboardPrefix = '/dashboard';
const authPrefix = '/recover';

const listRoutes = {
  auth: {
    login: '/login',
    initiate: `${authPrefix}/initiate`,
    code: `${authPrefix}/code`,
    reset: `${authPrefix}/reset`,
  },
  dashboard: {
    home: dashboardPrefix,
    overtimes: `${dashboardPrefix}/overtimes`,
    workers: `${dashboardPrefix}/workers`,
    reports: `${dashboardPrefix}/reports`,
  },
};

export default listRoutes;