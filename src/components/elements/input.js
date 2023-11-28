const Input = ({ type, value, handleChange, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default Input;
