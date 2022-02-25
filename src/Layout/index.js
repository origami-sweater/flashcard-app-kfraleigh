import React, { useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Deck from "../components/Deck/Deck";
import Home from "../HomePage/Home";
import Study from "../components/Study/Study";
import NewDeck from "../components/NewDeck/NewDeck";

function Layout() {
  const [apiDeck, setApiDeck] = useState([]);
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
              <NewDeck apiDeck={apiDeck} setApiDeck={setApiDeck} apiCards={apiCards} setApiCards={setApiCards} />
          </Route>
          <Route exact path="/decks/:deckId">
              <Deck apiDeck={apiDeck} setApiDeck={setApiDeck} apiCards={apiCards} setApiCards={setApiCards} />
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
