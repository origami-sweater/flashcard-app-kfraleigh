import React from "react";
import { deleteCard } from "../../utils/api";
import { useHistory } from "react-router-dom";

function DeleteCardButton({ id }) {
    const history = useHistory();
    
    async function removeCard() {
        try {
            if (window.confirm("Delete this card?\nYou will not be able to recover it.")) {
                const response = await deleteCard(id);
                if (response) history.go(0);
            };
        } catch(err) {
            console.log(err.name);
        };
    };
       
    return(
        <span>
            <button class="btn btn-danger mb-3 ml-2" onClick={() => removeCard()}>Delete</button>
        </span>
    )
}

export default DeleteCardButton;