import React from "react";
import { createDeck, updateDeck } from "../../utils/api";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

function SubmitDeckButton({ formName, setFormName, formDescription, setFormDescription, apiDeck }) {
    const history = useHistory();
    const { deckId }= useParams();

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
            if (deck.name !== apiDeck.name || deck.description !== apiDeck.description) {
                const uploaded = await updateDeck(deck);
                //sends us to new deck's page
                history.push(`/decks/${uploaded.id}`)
                history.go(0);
            } else {
                //sends alert if form fields are the same as the original
                window.alert("Please make changes.");
            };
        } catch(err) {
            console.log(err.name)
        };
    };

    //submit function
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
        <button type="submit" className="btn btn-primary ml-2" onClick={handleSubmit}>Submit</button>
    );
}

export default SubmitDeckButton;