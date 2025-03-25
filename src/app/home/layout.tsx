export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-8 pt-16 pb-20 gap-16 bg-white text-black">
      <div className="container mx-auto flex-grow">{children}</div>
    </div>
  );
}
