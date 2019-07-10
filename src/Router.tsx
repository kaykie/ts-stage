import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom';
import Loading from './components/Loading';
const HomePage = React.lazy(() => import('./pages/Home'));

const HasMenuChildRouter: React.FC = () => {
  return (
    <div className="mf-content">
      <Suspense fallback={<Loading/>}>
        <Switch>
          <Route path="/" component={HomePage}/>
        </Switch>
      </Suspense>
    </div>
  );
};
export default () => {
  return (
    <Router basename={`${process.env.PUBLIC_URL}`}>
      <Suspense fallback={<Loading/>}>
        <Switch>
          <Route path="/" component={HasMenuChildRouter}/>
        </Switch>
      </Suspense>
    </Router>
  )
}
