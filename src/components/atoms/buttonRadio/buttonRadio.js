import "./buttonRadio.css";

export const ButtonRadio = ({ id, name, value, checked, onChange, label }) => {
  return (
    <label className="button-radio">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};
