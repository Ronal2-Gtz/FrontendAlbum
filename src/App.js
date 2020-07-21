import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Images from "./components/Images";
import AddImage from "./components/AddImage";
import ViewImage from "./components/ViewImage";

function App() {
  const [dataImages, setDataImages] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Router>
        <Header setSearch={setSearch} />
        <Switch>
          <Route path="/" exact>
            <Images
              setDataImages={setDataImages}
              dataImages={dataImages}
              search={search}
            />
          </Route>
          <Route path="/addImage">
            <AddImage />
          </Route>
          <Route path="/viewImage/:id">
            <ViewImage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
