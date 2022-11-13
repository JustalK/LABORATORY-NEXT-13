import Children from "./Children";

export default function Home() {
  return (
    <div>
      <Children
        date={new Date()}
        fn={JSON.stringify(() => console.log("test"))}
      />
    </div>
  );
}
