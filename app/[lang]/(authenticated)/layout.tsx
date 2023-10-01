export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      dashbaord
      {children}
    </div>
  );
}
