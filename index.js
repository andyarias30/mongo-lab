import { addClothes, getAllClothes, updateClothes } from "./clothes.js";
import { closeClient } from "./connectDb.js";
import { addStore, getAllStores, getStoresById } from "./store.js";

/*await addClothes();
await getAllClothes();
await updateClothes();

*/

await addStore();
await getAllStores();
await getStoresById();
closeClient();