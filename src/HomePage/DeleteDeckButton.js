/*When the user clicks the Delete button, a warning message is shown and the user can click OK or Cancel. 
If the user clicks OK, the deck is deleted and the deleted deck is no longer visible on the Home screen.

You can use window.confirm() to create the modal dialog shown in the screenshot below.*/

import React, { useEffect } from "react";
import { deleteDeck } from "../utils/api";
import { useHistory } from "react-router-dom";

function DeleteDeckButton({ deckId }) {
    const history = useHistory();
    
    async function removeDeck() {
        try {
            window.confirm("Delete this deck?");
            const response = await deleteDeck(deckId);
            history.go(0);
        } catch(err) {
            console.log(err.name);
        };
    };
       
    return(
        <>
            <button class="btn btn-danger" onClick={() => removeDeck()}>Delete</button>
        </>
    )
}

export default DeleteDeckButton;