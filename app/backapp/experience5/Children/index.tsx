import { use } from "react";

async function getData() {
  const res = await fetch("https://randomuser.me/api/?results=100");
  return res.json();
}

export default function Children() {
  const data = use(getData());
  const users = data?.results || [];

  const result = [];
  for (const user of users) {
    result.push(<div>{user.email}</div>);
  }

  return <div>{result}</div>;
}
