import React from "react";
import NewDeckBreadcrumb from "./NewDeckBreadcrumb";
import DeckForm from "../DeckForms/DeckForm";

function NewDeck({ formName, formDescription, setFormName, setFormDescription }) {
    return (
        <div>
            <NewDeckBreadcrumb />
            <h2>Create Deck</h2>
            <DeckForm 
                formDescription={formDescription}
                setFormDescription={setFormDescription}
                formName={formName}
                setFormName={setFormName}
                apiDeck={{}}
            />
        </div>
    );
}

export default NewDeck;