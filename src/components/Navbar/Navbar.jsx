import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Logo2 from "../../assets/logoPortfolio.png";

const options = [
  { name: "Inicio", to: "Home" },
  // { name: "Sobre mí", to: "About" },[]
  { name: "Skills", to: "Skills" },
  { name: "Proyectos", to: "Projects" },
  { name: "Contacto", to: "Contact" },
];

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("color-theme") || "light",
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("color-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${open ? "bg-white dark:bg-[#0b1120]" : "glass-navbar py-4"}`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="Home"
            smooth
            spy
            duration={500}
            className="group flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 sm:w-10 h-10 overflow-hidden rounded-lg sm:rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group-hover:border-yellow-400 transition-all">
              <img
                src={Logo2}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-lg sm:text-xl font-black tracking-tighter text-slate-900 dark:text-white group-hover:text-yellow-400 transition-colors uppercase">
              Mauri
              <span className="text-yellow-400 group-hover:text-yellow-500">
                .dev
              </span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-1 bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur-md rounded-2xl p-1 border border-slate-200 dark:border-slate-700">
              {options.map((option, index) => (
                <Link
                  key={index}
                  to={option.to}
                  smooth
                  spy
                  duration={500}
                  activeClass="bg-white dark:bg-slate-700 text-yellow-400 shadow-sm"
                  className="px-5 py-2 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-yellow-400 transition-all cursor-pointer whitespace-nowrap"
                >
                  {option.name}
                </Link>
              ))}
            </div>

            <div className="h-6 w-px bg-slate-200 dark:border-slate-700 mx-2" />

            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-yellow-400 transition-all shadow-sm"
            >
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-yellow-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-4">
            <button
              onClick={toggleTheme}
              className="w-8 h-8 sm:w-10 h-10 flex items-center justify-center rounded-lg sm:rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 h-5 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 h-5 text-yellow-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="w-8 h-8 sm:w-10 h-10 flex items-center justify-center rounded-lg sm:rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 transition-colors"
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white dark:bg-[#0b1120] z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none translate-y-8"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {options.map((option, index) => (
            <Link
              key={index}
              to={option.to}
              smooth
              spy
              duration={500}
              onClick={() => setOpen(false)}
              className="text-4xl font-black text-slate-800 dark:text-white hover:text-yellow-400 transition-colors uppercase tracking-tighter"
            >
              {option.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
