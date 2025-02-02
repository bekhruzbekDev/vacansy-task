import { useMutation } from "@tanstack/react-query";
import api from "../server/api";

export const useApiDelete = (url: string) => {
  return useMutation({
    mutationFn: async (id: string | number) => {
      const res = await api.delete(url, { data: id });
      return res;
    },
  });
};
