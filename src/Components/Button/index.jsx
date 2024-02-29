import classNames from "classnames";

export const Button = (props) => {
  const { children, className, variant = "primary" } = props;

  const buttonClasses = {
    primary:
      "bg-indigo-500 border-indigo-500 text-white hover:bg-white hover:text-indigo-500",
    primaryOutline:
      "bg-white border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white",
  };

  const buttonDefaultClasses = "py-2 px-4 rounded-lg border";

  return (
    <button
      className={classNames(
        buttonDefaultClasses,
        buttonClasses[variant],
        className,
      )}
    >
      {children}
    </button>
  );
};
