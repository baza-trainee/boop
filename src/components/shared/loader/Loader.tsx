import './loader.css';

const Loader = () => {
  return (
    <div className="backdrop-brightness-10 fixed left-0 right-0 top-0 z-[9999] flex h-full w-full flex-col items-center justify-center bg-yellowTransparent backdrop-blur-sm">
      <div className="loading">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Loader;
