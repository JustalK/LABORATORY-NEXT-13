import Children from "./Children";

export default function Home() {
  return (
    <div>
      <Children
        date={new Date()}
        // fn={() => console.log("test")} <= Will never work because it's not serializable
      />
    </div>
  );
}
