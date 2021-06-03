import React from 'react';
import Header from './components/Header'
import MenuNavegacao from './components/MenuNavegacao';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditCode from './components/EditCode';
import Comunity from './components/Comunity';
import Error404 from './components/404';
import { ConfProjectContext } from './contexts/ConfProject';

import './styles/reset.css';
import './styles/global.scss';
import './styles/app.scss';

function App() {

  return (
    <ConfProjectContext>
      <main className="challenge">
        <Header />
        <section className="body">
          <Router>
            <MenuNavegacao />
            <Switch>
              <Route exact path="/">
                <EditCode />
              </Route>
              <Route path="/comunidade">
                <Comunity />
              </Route>
              <Route>
                <Error404 />
              </Route>
            </Switch>
          </Router>
        </section>
      </main>
    </ConfProjectContext>
  );
}

export default App;
