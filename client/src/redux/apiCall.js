import { publicRequest } from "../requestMethods";

export const registration = async (dispatch, inputs) => {
  try {
    const res = await publicRequest.post("/auth/register", inputs);
    dispatch(res.data);
  } catch (err) {
    dispatch(err);
  }
};
