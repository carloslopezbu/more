export default function Header() {
  return (
    <header className="flex items-center justify-end p-4">
      <nav>
        <a
          href="/login"
          className="bg-violet-400 text-white font-semibold rounded-full shadow-lg px-5 py-2 transform transition-all duration-300 ease-in-out hover:bg-violet-500 hover:scale-105"
        >
          Iniciar sesión
        </a>
      </nav>
    </header>
  );
}
