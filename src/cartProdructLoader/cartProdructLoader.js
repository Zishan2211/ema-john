import { getShoppingCart } from "../assets/utilities/fakedb";

const cartProductsLoader = async () => {
    const productLoader = await fetch('products.json');
    const products = await productLoader.json();

    const storedCard = getShoppingCart();
    const savedCard = [];

    console.log(storedCard)
    for (const id in storedCard) {
        const addProduct = products.find(product => product.id === id);
        if (addProduct) {
            const quantity = storedCard[id];
            addProduct.quantity = quantity;
            savedCard.push(addProduct);
        }
    }
    return savedCard;
}


export default cartProductsLoader;