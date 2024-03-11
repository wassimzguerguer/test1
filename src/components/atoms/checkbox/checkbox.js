import "./checkbox.css";

export const Checkbox = ({ id, name, checked, onChange, label }) => {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};