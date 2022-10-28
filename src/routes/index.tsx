import { Route, Routes as Switch } from 'react-router-dom';
import Dashboard from 'src/pages/Dashboard';
import Schedules from 'src/pages/Schedules';
import SchedulesForm from 'src/pages/SchedulesForm';

import RouteComponent from './RouteComponent';

const Routes: React.FC = () => (
  <Switch>
    <Route
      path="/schedules"
      element={<RouteComponent component={Schedules} />}
    />
    <Route
      path="/schedules/create"
      element={<RouteComponent component={SchedulesForm} />}
    />
    <Route path="/" element={<RouteComponent component={Dashboard} />} />
    <Route path="/home" element={<RouteComponent component={Dashboard} />} />
  </Switch>
);

export default Routes;
