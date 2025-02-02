import { useMutation } from "@tanstack/react-query";
import api from "../server/api";

export const useApiMutation = (url: string) => {
  return useMutation({
    mutationFn: async (data: object) => {
      const res = await api.post(url, data);
      return res;
    },
  });
};
