import React, { useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Deck from "../components/Deck/Deck";
import Home from "../HomePage/Home";

function Layout() {
  const [apiDeck, setApiDeck] = useState([]);
  const [apiCards, setApiCards] = useState([]);

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/decks/:deckId">
              <Deck apiDeck={apiDeck} setApiDeck={setApiDeck} apiCards={apiCards} setApiCards={setApiCards} />
          </Route>
          <Route path="/decks/:deckId/study">
              {/*Study*/}
          </Route>
          <Route path="/decks/:deckId/edit">
              {/*EditDeck*/}
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
