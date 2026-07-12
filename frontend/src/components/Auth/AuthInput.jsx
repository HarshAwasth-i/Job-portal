const AuthInput = ({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
    />
  );
};

export default AuthInput;