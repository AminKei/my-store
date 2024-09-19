import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../Queries/login";

export const useLogin = () => {
  const { isPending, mutate, isError, isSuccess, data } = useMutation({
    mutationFn: loginUser,
  });

  return {
    isPending,
    data,
    isError,
    isSuccess,
    Login: mutate,
  };
};
