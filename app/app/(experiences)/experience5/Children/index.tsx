async function getData() {
  const res = await fetch("https://randomuser.me/api/?results=5000");
  return res.json();
}

export default async function Children() {
  const data = await getData();
  const users = data?.results || [];

  const result = [];
  for (const user of users) {
    result.push(<div>{user.email}</div>);
  }

  return result;
}
