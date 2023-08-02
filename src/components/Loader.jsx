function Loader() {
  return (
    <div className="flex items-center justify-center w-[100%] h-[90%] z-50 fixed ">
      <div className="flex items-center justify-center space-x-2 animate-bounce">
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div className="w-8 h-8 bg-green-400 rounded-full"></div>
        <div className="w-8 h-8 bg-black rounded-full"></div>
      </div>
    </div>
  );
}
export default Loader;
