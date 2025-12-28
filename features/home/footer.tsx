

export function Footer() {

  return (
   <footer className="flex z-50 rounded-2xl border border-primary/10">
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-6 text-center">
    <p className="text-sm text-zinc-500 dark:text-zinc-400">
      &copy; {new Date().getFullYear()} deepeshbind. All rights reserved.
    </p>
  </div>
</footer>

  );
}