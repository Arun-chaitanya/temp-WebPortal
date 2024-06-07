import { useMutation } from "react-query";
import { callApi } from "@api/helpers";

export const useJoinWaitList = (cb: (data: any) => void) => {
  const url = "/misc/waitlist";

  return useMutation({
    mutationKey: ["join-waitlist"],
    mutationFn: async (body: { email: string }) => {
      return callApi({ url, method: "POST", data: body });
    },
    onSuccess: (data: any) => {
      cb(data);
    },
  });
};
