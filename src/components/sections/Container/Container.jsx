const Container = ({ children }) => {
  return (
    <div className="max-w-[1620px] mx-auto 2xl:px-28 xl:px-28 lg:px-16 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
