import "./Button.css";

const Button = ({ src, onClick, bordered, whitened }) => {
  const classes = [
    "button",
    bordered && "button--bordered",
    whitened && "button--whitened",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <button className={classes} onClick={onClick}>
      <img className="button__img" src={src} alt="" />
    </button>
  );
};

export default Button;
