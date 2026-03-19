export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-4 py-6 text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} Lean AI Studio. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}
