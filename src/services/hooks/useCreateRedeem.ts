import { useMutation, UseMutationResult } from "@tanstack/react-query";
import api from "~/services/api";
import { FormValues } from "~/types/redeem";

interface ICreateRedeem {
  id: string;
  data: FormValues;
}

const createRedeem = async (params: ICreateRedeem) => {
  const { data } = await api.post(
    `/redeem_pages/${params.id}/redeem`,
    params.data
  );
  return data;
};

export function useCreateRedeem(): UseMutationResult<
  undefined,
  undefined,
  ICreateRedeem
> {
  return useMutation({
    mutationFn: (data) => createRedeem(data),
  });
}
