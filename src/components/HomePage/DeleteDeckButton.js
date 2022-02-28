import React from "react";
import { deleteDeck } from "../../utils/api";
import { useHistory } from "react-router-dom";

function DeleteDeckButton({ deckId }) {
    const history = useHistory();
    
    async function removeDeck() {
        try {
            if (window.confirm("Delete this deck?\nYou will not be able to recover it.")) {
                const response = await deleteDeck(deckId);
                if (response) {
                    history.push("/");
                    history.go(0);
                };
            };
        } catch(err) {
            console.log(err.name);
        };
    };
       
    return(
        <span>
            <button className="btn btn-danger" onClick={() => removeDeck()}>Delete</button>
        </span>
    )
}

export default DeleteDeckButton;