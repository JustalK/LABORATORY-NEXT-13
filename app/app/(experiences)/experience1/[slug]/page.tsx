export default function Page({ params, searchParams }: any) {
  return (
    <>
      <p>{params.slug}</p>
      <p>{searchParams.id}</p>
    </>
  );
}
