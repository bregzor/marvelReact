import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import CharPage from "./pages/CharPage";
import BaseLayout from "./components/BaseLayout";
import CharDetailPage from "./pages/CharDetailPage";

export default function App() {
  return (
    <div className="App">
      <Switch>

      <Route path="/char/:id"
        render={ props => {
          return(
          <BaseLayout>
            <CharDetailPage {...props} />
          </BaseLayout>
          )
        }}>
        </Route>
        
        <Route path="">
          <BaseLayout>
            <CharPage />
          </BaseLayout>
        </Route>
        
        <Route path="/about"></Route>
      </Switch>
    </div>
  );
}
