import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { ROUTES, NAVBAR_ROUTES } from '@constants/routes';
import Loading from '@components/Loading';

const Home = lazy(() => import('./Home'));
const HowItWorks = lazy(() => import('./HowItWorks'));
const PastTrials = lazy(() => import('./PastTrials'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <>
          <nav>
            <ul>
              {NAVBAR_ROUTES.map((el) => (
                <li key={el.route}>
                  <Link to={el.route}>{el.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <Switch>
            <Route path={ROUTES.HOME} exact>
              <Home />
            </Route>
            <Route path={ROUTES.HOW_IT_WORKS}>
              <HowItWorks />
            </Route>
            <Route path={ROUTES.PAST_TRIALS}>
              <PastTrials />
            </Route>
          </Switch>
        </>
      </Router>
    </Suspense>
  );
}

export default App;
