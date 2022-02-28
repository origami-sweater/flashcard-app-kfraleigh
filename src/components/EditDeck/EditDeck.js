import React, { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import DeckForm from "../DeckForms/DeckForm";
import EditDeckBreadcrumb from "./EditDeckBreadcrumb";
import { readDeck } from "../../utils/api";


function EditDeck({ apiDeck, setApiDeck, formName, formDescription, setFormName, setFormDescription }) {
    const {deckId} = useParams();

    useEffect (() => {
        async function loadDeck() {
            try {
                const response = await readDeck(deckId);
                setApiDeck(response);
                setFormDescription(response.description);
                setFormName(response.name);
            } catch(err) {
                console.log(err.name);
            };
        };
        loadDeck(deckId);
    }, [deckId]);  
    
    return (
        <div>
            <EditDeckBreadcrumb apiDeck={apiDeck} />
            <h2>Create Deck</h2>
            <DeckForm 
                apiDeck={apiDeck}
                formDescription={formDescription}
                setFormDescription={setFormDescription}
                formName={formName}
                setFormName={setFormName} 
            />
        </div>
    );
}

export default EditDeck;