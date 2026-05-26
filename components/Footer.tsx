import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2c1810] text-[#f8edca] py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-4">
        <Logo color="#f8edca" size="sm" />
        <p className="font-redressed text-lg opacity-90">
          Share your reading. Own your habit.
        </p>
        <p className="font-redressed text-sm opacity-70">
          Made with ♥ and books.
        </p>
        <p className="font-redressed text-sm opacity-50">{year}</p>
      </div>
    </footer>
  );
}
