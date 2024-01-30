import classes from './Input.module.css';

const Input = ({ type, id, value, onChange, label, isValid }) => {
  return (
    <div className={`${classes.control} ${isValid === false ? classes.invalid : ''}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  )
};

export default Input;