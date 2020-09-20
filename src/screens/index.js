import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ROUTES } from '@constants/routes';
import Loading from '@components/Loading';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

const Home = lazy(() => import('./Home'));
const HowItWorks = lazy(() => import('./HowItWorks'));
const PastTrials = lazy(() => import('./PastTrials'));
const SignUp = lazy(() => import('./SignUp'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <>
          <Navbar />
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
            <Route path={ROUTES.SIGN_UP}>
              <SignUp />
            </Route>
          </Switch>
          <Footer />
        </>
      </Router>
    </Suspense>
  );
}

export default App;
