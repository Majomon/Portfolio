const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 bg-white dark:bg-[#0b1120] border-t border-slate-100 dark:border-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            &copy; {year}{" "}
            <span className="text-slate-900 dark:text-white font-bold ml-1">
              Mauricio Monzón
            </span>
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
            Built with React & Tailwind CSS
          </p>
        </div>

        <div className="flex gap-4">
          {[
            {
              href: "https://www.linkedin.com/in/mauricio-monzon/",
              icon: "brand-linkedin",
            },
            {
              href: "https://www.youtube.com/@MauriCode",
              icon: "brand-youtube",
            },
            { href: "https://github.com/Majomon", icon: "brand-github" },
          ].map(({ href, icon }) => (
            <a
              key={icon}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-yellow-400 hover:border-yellow-400 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`icon icon-tabler icon-tabler-${icon}`}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                {icon === "brand-linkedin" && (
                  <>
                    <path d="M8 11v5" />
                    <path d="M8 8v.01" />
                    <path d="M12 16v-5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </>
                )}
                {icon === "brand-youtube" && (
                  <>
                    <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                    <path d="M10 9l5 3l-5 3z" />
                  </>
                )}
                {icon === "brand-github" && (
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                )}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
