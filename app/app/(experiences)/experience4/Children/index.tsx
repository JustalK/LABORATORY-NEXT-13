export default function Home() {
  var indents = [];
  for (var i = 0; i < 1000; i++) {
    indents.push(<div>Children</div>);
  }
  return indents;
}
