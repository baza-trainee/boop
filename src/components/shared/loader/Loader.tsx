import './loader.css';

const LoaderLayout = () => {
  return (
    <div
      className="fixed left-0 right-0 top-0 z-[9999] flex h-full w-full flex-col items-center 
    justify-center bg-[rgba(0,0,0,0.85)]"
    >
      <div className="loader">
        <span style={{ '--i': 1 }}></span>
        <span style={{ '--i': 2 }}></span>
        <span style={{ '--i': 3 }}></span>
        <span style={{ '--i': 4 }}></span>
        <span style={{ '--i': 5 }}></span>
        <span style={{ '--i': 6 }}></span>
        <span style={{ '--i': 7 }}></span>
        <span style={{ '--i': 8 }}></span>
        <span style={{ '--i': 9 }}></span>
        <span style={{ '--i': 10 }}></span>
        <span style={{ '--i': 11 }}></span>
        <span style={{ '--i': 12 }}></span>
        <span style={{ '--i': 13 }}></span>
        <span style={{ '--i': 14 }}></span>
        <span style={{ '--i': 15 }}></span>
        <span style={{ '--i': 16 }}></span>
        <span style={{ '--i': 17 }}></span>
        <span style={{ '--i': 18 }}></span>
        <span style={{ '--i': 19 }}></span>
        <span style={{ '--i': 20 }}></span>
      </div>
    </div>
  );
};

export default LoaderLayout;
