import React from "react";
import FlipButton from "./FlipButton";
import NextButton from "./NextButton";

function FormatStudyCard({ apiCards, flipped, setFlipped, cardId, setCardId }) {
    //checks to see if enough cards
    if (apiCards.length > 2) {
        const formattedCard = apiCards.map((card) => {
            const { id, front, back } = card;
            //checks to see if front or back should be displayed
            if (flipped===false) {
                return (
                    <div key={id} className="card">
                        <div className="card-body text-secondary">
                            <h3>{`Card ${cardId + 1} of ${apiCards.length}`}</h3>
                            <p>{front}</p>
                        </div>
                        <FlipButton flipped={flipped} setFlipped={setFlipped}/>
                    </div>
                );
            } else if (flipped) {
                return (
                    <div key={id} className="card">
                        <div className="card-body text-secondary">
                            <h3>{`Card ${cardId + 1} of ${apiCards.length}`}</h3>
                            <p>{back}</p>
                        </div>
                        <NextButton cardId={cardId} setCardId={setCardId} setFlipped={setFlipped}/>
                    </div>
                );
            } else {
                return null;
            };
        });
        return formattedCard[cardId];
    } else {
        return null;
    };    
}

export default FormatStudyCard;