import "./button.css";

export const Button = ({ id,name,onClick, label, styleType }) => {
  return (
    <button
    {...(id && {id})}
    {...(name && {name})}
      onClick={onClick}
      className={`button ${styleType}`}
    >
      {label}
    </button>
  );
};