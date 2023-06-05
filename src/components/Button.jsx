
export default function Button({ onClick, children }) {
    return (
        <button className="text-sm md:text-md lg:text-lg relative px-6 py-3 font-bold text-black group m-4 " onClick={onClick}>
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2
            bg-purple/30 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
            <span className="relative sm:mt-2 md:mt-4 lg:mt-8">
                {children}
            </span>
        </button>
    );
  }
  



