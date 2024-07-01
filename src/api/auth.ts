import { callApi } from "@api/helpers";
import { SIGNUP_USER } from "@config/urls";
import { useMutation } from "react-query";

const useUserSignup = () => {
  const url = SIGNUP_USER;

  return useMutation({
    mutationKey: ["signup-user"],
    mutationFn: async (body: any) => {
      return callApi({ url, method: "POST", data: body });
    },
  });
};

export default useUserSignup;
