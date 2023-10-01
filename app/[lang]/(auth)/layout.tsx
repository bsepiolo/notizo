export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="px-6 py-4 text-2xl font-istok-web">Notizo</div>
      <div className="flex justify-center flex-grow">
        <div className="flex flex-col w-full max-w-sm mt-[10vh] px-6">
          {children}
        </div>
      </div>
    </>
  );
}
