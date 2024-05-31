import { getProducts, mockGetProducts } from "@/services/products";
import { useQuery } from "react-query";
import { Product } from "./type";

export const useProducts = () => {
    //normally we use a feature control system to enable/disable mocks, will write it statically here
    const mock = false;

    const queryFunction = mock ?  mockGetProducts: getProducts;

    const q = useQuery<Product[]>('products', queryFunction);

    return q
}