//requirement:The Edit Card and Create Card screens share the same form component.

import React from "react";
import FrontField from "./FrontField";
import BackField from "./BackField";
import SaveCardButton from "./SaveCardButton";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


function CardForm({ apiDeck, apiCard, formFront, formBack, setFormFront, setFormBack}) {
    const { deckId, cardId } = useParams();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted");
      };

    return (
        <form onSubmit={handleSubmit}>
            <FrontField formFront={formFront} setFormFront={setFormFront} />
            <BackField formBack={formBack} setFormBack={setFormBack} />
            <Link to={`/decks/${deckId}`} className="btn btn-secondary">{cardId ? "Cancel" : "Done"}</Link>
            <SaveCardButton 
                formFront={formFront} 
                setFormFront={setFormFront} 
                formBack={formBack} 
                setFormBack={setFormBack}
                apiDeck={apiDeck}
                apiCard={apiCard}
            />
        </form>
    );
}

export default CardForm;