function Navbar(): JSX.Element {
  return (
    <header className="absolute top-0 w-full z-[4] px-7 py-3.5">
      <nav>
        <main className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 6 3"
            >
              <path fill="#008751" d="M0 0h6v3H0z" />
              <path fill="#FFF" d="M2 0h2v3H2z" />
            </svg>
            <h1 className="text-md text-white">9jaTours.com</h1>
          </div>

          <div className="flex items-center space-x-5">
            <button className="focus:outline-none bg-transparent text-gra hover:text-gray-800 w-7 h-7 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            <button className="focus:outline-none bg-transparent text-gray-400 hover:text-gray-800 w-7 h-7 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </main>
      </nav>
    </header>
  );
}

export default Navbar;
