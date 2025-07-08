import { useState } from "react";

const ShoppingCartBar = () => {
    const [numberInCart, setNumberInCart] = useState(0);

    return(

        <div id="shopping-cart-bar">
            <p>Items in cart: {numberInCart}</p>
        </div>
    );
}

export default ShoppingCartBar;