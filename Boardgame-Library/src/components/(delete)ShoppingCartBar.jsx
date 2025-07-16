import { useState } from "react";

const ShoppingCartBar = (title) => {
    const [numberInCart, setNumberInCart] = useState(0);

    // console.log(title);    
    return(

        <div id="shopping-cart-bar">
            <p>Items in cart: {numberInCart}</p>
        </div>
    );
}

export default ShoppingCartBar;