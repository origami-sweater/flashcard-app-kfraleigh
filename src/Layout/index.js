import React, { useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import ViewDeck from "../components/ViewDeck/ViewDeck";
import Home from "../components/HomePage/Home";
import Study from "../components/Study/Study";
import NewDeck from "../components/NewDeck/NewDeck";
import EditDeck from "../components/EditDeck/EditDeck";
import NewCard from "../components/NewCard/NewCard";
import EditCard from "../components/EditCard/EditCard";

function Layout() {
  const [apiDeck, setApiDeck] = useState({});
  const [apiCards, setApiCards] = useState([]);
  const [flipped, setFlipped] = useState(false);
  const [formName, setFormName] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formFront, setFormFront] = useState("");
  const [formBack, setFormBack] = useState("");

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/decks/new">
              <NewDeck 
                formDescription={formDescription}
                setFormDescription={setFormDescription}
                formName={formName}
                setFormName={setFormName}
              />
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
              <EditDeck 
                apiDeck={apiDeck} 
                setApiDeck={setApiDeck}
                formDescription={formDescription}
                setFormDescription={setFormDescription}
                formName={formName}
                setFormName={setFormName}
              />
          </Route>
          <Route path="/decks/:deckId/cards/new">
              <NewCard 
                formFront={formFront} 
                setFormFront={setFormFront}
                formBack={formBack}
                setFormBack={setFormBack}
                apiDeck={apiDeck} 
                setApiDeck={setApiDeck}
                apiCards={apiCards}
                setApiCards={setApiCards}
              />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
              <EditCard 
                apiDeck={apiDeck} 
                setApiDeck={setApiDeck}
                formFront={formFront} 
                setFormFront={setFormFront}
                formBack={formBack}
                setFormBack={setFormBack} 
              />
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
