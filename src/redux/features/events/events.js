import { API } from "../../../api";
import { baseApi } from "../../api/baseApi";

export const eventsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    order: builder.mutation({
      query: (payload) => {
        return {
          url: `${API.order}`,
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const { useOrderMutation } = eventsApi;
