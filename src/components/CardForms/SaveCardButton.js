import React from "react";
import { createCard, updateCard } from "../../utils/api";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

function SaveCardButton({ formFront, setFormFront, formBack, setFormBack, apiCard }) {
    const history = useHistory();
    const { deckId, cardId }= useParams();

    //New Card - handles push to server & validates form fields 
    async function uploadCard(deckId, card) {
        const abortController = new AbortController();
        try {
            if (formFront && formBack && deckId) {
                const signal = abortController.signal;
                const uploaded = await createCard(deckId, card, signal);
                //resets form states
                setFormFront("");
                setFormBack(""); 
                //sends us to new deck's page
                history.push(`/decks/${deckId}/cards/new`)
                history.go(0);
            } else {
                //sends alert if form fields are empty
                window.alert("Please leave nothing blank.");
            };
        } catch(err) {
            console.log(err.name)
        };
    };

    //Existing Card - handles read and push to server & validates form fields 
    async function changeCard(card) {
        try {
            if (card.front !== apiCard.front || card.back !== apiCard.back) {
                const uploaded = await updateCard(card);
                //sends us to the deck's page
                if (uploaded) {
                    history.push(`/decks/${deckId}`)
                    history.go(0);
                };
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
        if (cardId) {
            let card = ({ 
                front: formFront, 
                back: formBack,
                id: cardId,
                deckId: parseInt(deckId)
            });
            changeCard(card);
         } else { 
            let card = ({ 
                front: formFront, 
                back: formBack, 
                deckId: parseInt(deckId)
            });
             uploadCard(deckId, card);
             

         };
    };

    return (
        <button type="submit" className="btn btn-primary ml-2" onClick={handleSubmit}>Submit</button>
    );
}

export default SaveCardButton;