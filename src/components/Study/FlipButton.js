import React from "react";

function FlipButton({ flipped, setFlipped }) {
    return (
        <div>
            <button class="btn btn-secondary ml-3 mb-3" onClick={() => setFlipped(true)}>Flip</button>
        </div>
    )
}

export default FlipButton;