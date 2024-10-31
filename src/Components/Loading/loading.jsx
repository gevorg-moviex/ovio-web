const Loader = () => {
    return (
      <div className="bg-[#eaecfa] h-screen flex items-center justify-center">
        <div className="relative w-[250px] h-[50px] flex items-center justify-center text-lg font-extrabold text-[#22127a] uppercase tracking-wide">
          Loading...
          <div className="absolute top-0 left-0 w-[15px] h-[15px] bg-[#22127a] animate-load"></div>
          <div className="absolute bottom-0 left-0 w-[15px] h-[15px] bg-[#22127a] animate-load"></div>
        </div>
        <style jsx>{`
          @keyframes load {
            0% { left: 0; height: 30px; width: 15px; }
            50% { height: 8px; width: 40px; }
            100% { left: 235px; height: 30px; width: 15px; }
          }
  
          .animate-load {
            animation: load 0.7s infinite alternate ease-in-out;
          }
        `}</style>
      </div>
    );
  };
  
  export default Loader;
  