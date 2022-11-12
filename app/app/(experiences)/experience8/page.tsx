async function getData() {
  const res = await fetch("https://randomuser.me/api/?results=100", {
    cache: "force-cache",
  });
  return res.json();
}

export default async function Home() {
  const data = await getData();
  const users = data?.results || [];

  const result = [];
  for (const user of users) {
    result.push(<div>{user.email}</div>);
  }

  return result;
}
