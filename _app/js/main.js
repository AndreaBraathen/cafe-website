import navigation from "./modules/navigation.js";
import fetchProducts from "./modules/fetchProducts.js";
import renderMenu from "./modules/renderMenu.js";
import productCard from "./modules/productCard.js";

const fetchedProducts = await fetchProducts(); 

navigation();
renderMenu(fetchedProducts);
productCard(fetchedProducts);

