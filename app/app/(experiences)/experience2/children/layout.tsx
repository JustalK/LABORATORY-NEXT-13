export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <span>LAYOUT 2</span>
      {children}
    </div>
  );
}
