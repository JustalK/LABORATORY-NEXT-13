export default function Page(params: any) {
  return <p>{params.params.slug.join(" - ")}</p>;
}
