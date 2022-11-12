import { cache, use } from "react";

export const getRandom = cache((val: any) => {
  const res = use(fetch("https://randomuser.me/api"));
  const result: any = res.json();
  return result.resultats[0].email;
});
