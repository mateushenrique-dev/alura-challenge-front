import React from 'react';
import Header from './components/Header'
import MenuNavegacao from './components/MenuNavegacao';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ConfProjectContext } from './Contexts/ConfProject';
import EditCode from './pages/EditCode';
import Comunity from './pages/Comunity';
import Error404 from './components/404';

import './styles/reset.css';
import './styles/global.scss';
import './styles/app.scss';

function App() {

  return (
    <Router>
      <ConfProjectContext>
        <main className="challenge">
          <Header />
          <section className="body">
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
          </section>
        </main>
      </ConfProjectContext>
    </Router>
  );
}

export default App;
