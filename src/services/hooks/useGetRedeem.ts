import { useQuery } from "@tanstack/react-query";
import { RescuePage } from "~/types/redeem";
import api from "../api";

export const GET_REDEEM = "get-redeem-pages";

const getRedeems = async (id: string): Promise<RescuePage> => {
  const { data } = await api.get(`/redeem_pages/${id}`);
  return data;
};

export function useGetRedeems(id: string) {
  return useQuery({
    queryKey: [GET_REDEEM],
    queryFn: () => getRedeems(id),
  });
}
