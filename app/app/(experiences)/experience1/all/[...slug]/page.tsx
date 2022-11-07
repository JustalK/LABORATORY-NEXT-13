export default function Page(params) {
  return <p>{params.params.slug.join(" - ")}</p>;
}
