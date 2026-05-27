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
        <div className="mt-4">
          <span className="font-redressed text-xs opacity-60">
            Feedback? Bug?{" "}
          </span>
          <a
            href="https://github.com/IshiniKiridena/pagemarkd/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#f8edca] hover:text-[#c4956a] transition-colors font-redressed text-xs opacity-80"
          >
            Open an issue or suggestion on GitHub
          </a>
        </div>
 
      </div>
    </footer>
  );
}
