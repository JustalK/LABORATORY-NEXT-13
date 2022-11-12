import { cache } from "react";
import axios from "axios";

export const getRandom = cache(async (val: any) => {
  try {
    const res = await axios.get("https://randomuser.me/api");
    const result: any = res.data;
    console.log(result.results[0].email);
    return result.results[0].email;
  } catch (e) {
    return "N/A";
  }
});
