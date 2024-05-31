import { fetchAPI } from "../fetchAPI";

export const getSingleProduct = async (id: string) => {
    const product = await fetchAPI(`https://fakestoreapi.com/products/${id}`);
    return product;
}