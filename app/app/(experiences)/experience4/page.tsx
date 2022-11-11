async function getData() {
  const res = await fetch("https://randomuser.me/api/?results=5000");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  const users = data?.results || [];

  const result = [];
  for (const user of users) {
    result.push(<div>{user.email}</div>);
  }

  return result;
}
