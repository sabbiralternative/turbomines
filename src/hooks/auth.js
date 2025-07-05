import { useMutation } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";
import { API } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/features/auth/authSlice";

export const useAuth = (pathName) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  return useMutation({
    mutationKey: ["auth", pathName],
    enabled: token ? token : null,
    mutationFn: async () => {
      const { data } = await AxiosSecure.post(API.auth, { token });

      dispatch(
        setUser({
          username: data.username,
          balance: data?.balance,
          token,
        })
      );
      return data;
    },
    gcTime: 0,
  });
};
