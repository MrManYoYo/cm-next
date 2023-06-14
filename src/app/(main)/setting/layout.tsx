
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div>Setting</div>
      <div>{children}</div>
    </>
  )
}