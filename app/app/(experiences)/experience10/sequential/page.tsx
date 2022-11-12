import { use, Suspense } from "react";

async function getWomen() {
  const res = await fetch("https://randomuser.me/api/?gender=female");
  return res.json();
}

async function getMale() {
  const res = await fetch("https://randomuser.me/api/?gender=male");
  return res.json();
}

function Male({ dataMan }: any) {
  const { results: male } = use(getMale());

  return <div>MALE: {male[0].email}</div>;
}

export default async function Home() {
  const dataWomen = getWomen();
  const { results: women } = await dataWomen;

  return (
    <div>
      <div>WOMEN: {women[0].email}</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Male />
      </Suspense>
    </div>
  );
}
