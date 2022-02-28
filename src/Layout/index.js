import React, { useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import ViewDeck from "../components/ViewDeck/ViewDeck";
import Home from "../components/HomePage/Home";
import Study from "../components/Study/Study";
import NewDeck from "../components/NewDeck/NewDeck";
import EditDeck from "../components/EditDeck/EditDeck";

function Layout() {
  const [apiDeck, setApiDeck] = useState({});
  const [apiCards, setApiCards] = useState([]);
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/decks/new">
              <NewDeck />
          </Route>
          <Route exact path="/decks/:deckId">
              <ViewDeck apiDeck={apiDeck} setApiDeck={setApiDeck} apiCards={apiCards} setApiCards={setApiCards} />
          </Route>
          <Route path="/decks/:deckId/study">
              <Study 
                apiDeck={apiDeck} 
                setApiDeck={setApiDeck} 
                apiCards={apiCards} 
                setApiCards={setApiCards}
                flipped={flipped}
                setFlipped={setFlipped} 
                />
          </Route>
          <Route path="/decks/:deckId/edit">
              <EditDeck apiDeck={apiDeck} setApiDeck={setApiDeck}/>
          </Route>
          <Route path="/decks/:deckId/cards/new">
              {/*AddCard*/}
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
              {/*EditCard*/}
          </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
