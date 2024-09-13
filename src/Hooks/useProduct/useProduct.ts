import { useQuery } from "@tanstack/react-query";
import { QueryKeys, StaleTime } from "../../Queries/config";
import { getProducts } from "../../Queries/product";

export const useProducts = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [QueryKeys.Product_List],
    queryFn: getProducts,
    staleTime: StaleTime.Product_List
  });

  return { data, isLoading, error };
};



