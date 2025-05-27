export default function Layout({ headData, children }: { headData: React.ReactNode, children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>{headData}</head>
      <body>{children}</body>
    </html>
  );
}
