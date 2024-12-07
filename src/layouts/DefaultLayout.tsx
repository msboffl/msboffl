export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
        {children}
      </main>
    </>
  );
}
