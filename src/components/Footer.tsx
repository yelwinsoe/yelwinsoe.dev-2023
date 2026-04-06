export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-8 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-tertiary">
        <p>&copy; {new Date().getFullYear()} Ye Lwin Soe</p>
        <p>Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
