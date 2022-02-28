import React from "react";
import NewDeckBreadcrumb from "./NewDeckBreadcrumb";
import DeckForm from "../DeckForms/DeckForm";

function NewDeck() {
    return (
        <div>
            <NewDeckBreadcrumb />
            <h2>Create Deck</h2>
            <DeckForm />
        </div>
    );
}

export default NewDeck;