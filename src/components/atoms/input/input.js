import "./input.css";
export const Input = (props) => {
    const {required, type, id, name, onChange, placeholder, styleType,label} = props
    const  className = []
    
   
  return (
        <input
          {...(type && {type})}
          {...(id && {id})}
          {...(name && {name})}
          {...(label && {label})}
          {...(onChange && {onChange})}
          {...(placeholder && {placeholder})}
          {...(required && {required})}
          className={styleType}
         //{...(styleType && {styleType})}
         
          
        />
    
  );
}
