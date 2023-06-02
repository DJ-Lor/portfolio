
export default function FunFactBox({ onClick, children }) {
    return (
        <button className="text-sm md:text-l relative px-6 py-3 text-black group" onClick={onClick}>
            <span className="absolute inset-0 transition duration-300 ease-out transform -translate-x-2 -translate-y-2
            bg-purple/30"></span>
            <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
            <span className="relative sm:mt-2 md:mt-4 lg:mt-8 text-left">
                {children}
            </span>
        </button>
    );
  }
  