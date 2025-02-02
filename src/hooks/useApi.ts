import { useQuery } from "@tanstack/react-query";
import api from "../server/api";

export const useApi = (url: string, params?: object) => {
  return useQuery({
    queryKey: [url, params],
    queryFn: async () => {
      const res = api.get(url, { params });
      return res;
    },
  });
};
