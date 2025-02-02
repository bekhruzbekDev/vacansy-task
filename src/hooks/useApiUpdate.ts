import { useMutation } from "@tanstack/react-query";
import api from "../server/api";
import { CompanyResData } from "../types";

export const useApiUpdate = (url: string) => {
  return useMutation({
    mutationFn: async (data: CompanyResData) => {
      const res = await api.put(url, data);
      return res;
    },
  });
};
