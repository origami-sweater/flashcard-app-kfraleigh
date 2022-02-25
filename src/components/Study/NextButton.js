//The Next button appears after the card is flipped.
import React from "react";

function NextButton({ cardId, setCardId, setFlipped }) {
    const handleClick = () => {
        setCardId(cardId + 1);
        setFlipped(false);
    }

    return (
        <div>
            <button type="button" class="btn btn-primary ml-3 mb-3" onClick={handleClick}>Next</button>
        </div>
    );
}

export default NextButton;