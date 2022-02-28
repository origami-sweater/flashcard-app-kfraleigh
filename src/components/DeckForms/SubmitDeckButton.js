import React from "react";
import { createDeck, updateDeck } from "../../utils/api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function SubmitDeckButton({ formName, setFormName, formDescription, setFormDescription, existingDeck }) {
    const history = useHistory();
    const deckId = existingDeck.id;

    //New Deck - handles push to server & validates form fields 
    async function uploadDeck(deck) {
        try {
            if (deck.name && deck.description) {
                const uploaded = await createDeck(deck);
                //resets form states
                setFormName("");
                setFormDescription(""); 
                //sends us to new deck's page
                history.push(`/decks/${uploaded.id}`)
                history.go(0);
            } else {
                //sends alert if form fields are empty
                window.alert("Please leave nothing blank.");
            };
        } catch(err) {
            console.log(err.name)
        };
    };

    //Existing Deck - handles read and push to server & validates form fields 
    async function changeDeck(deck) {
        try {
            if (deck.name !== existingDeck.name || deck.description !== existingDeck.description) {
                const uploaded = await updateDeck(deck);
                //sends us to new deck's page
                history.push(`/decks/${uploaded.id}`)
                history.go(0);
            } else {
                //sends alert if form fields are empty
                window.alert("Please make changes.");
            };
        } catch(err) {
            console.log(err.name)
        };
    };

    //on click function
    const handleSubmit = (event) => {
        event.preventDefault();
        if (deckId) {
            let deck = ({ 
                id: deckId,
                name: formName, 
                description: formDescription 
            });
            changeDeck(deck);
         } else { 
            let deck = ({ 
                name: formName, 
                description: formDescription 
            });
             uploadDeck(deck);
         };
    };

    return (
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
    );
}

export default SubmitDeckButton;