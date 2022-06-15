export const Button = ({ ...attrs }) => {
  const className = attrs.className || "";
  delete attrs.className;
  return (
    <button {...attrs} className={`Button ${className}`}>
      {attrs.children}
    </button>
  );
};
