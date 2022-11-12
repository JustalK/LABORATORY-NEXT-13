export const revalidate = 20;

export default function Home() {
  return <div>{new Date().toLocaleTimeString()}</div>;
}
