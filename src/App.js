import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ImageAnimation from "./ImageAnimation";
import ItemsGrid from "./ItemsGrid";
import fakeItems from "./fakeItems";
import ItemPage from "./ItemPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/item/:id" component={ItemPage} />
          <Route render={() => <ItemsGrid items={fakeItems} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
