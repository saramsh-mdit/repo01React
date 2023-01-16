export const Button = (props: any) => {
  const { className, children, rest } = props;
  return (
    <button
      className={` px-5 py-2 text-lg text-semibold  hover:bg-blue-400 ${
        className && className
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};
