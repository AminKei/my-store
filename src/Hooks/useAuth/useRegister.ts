import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../Queries/register";

export const useRegister = () => {
  const { isPending, mutate, data, isSuccess, isError } = useMutation({
    mutationFn: registerUser,
  });

  return {
    isPending,
    data,
    isError,
    isSuccess,
    Register: mutate,
  };
};
