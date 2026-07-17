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
      className="
        w-full
        rounded-lg
        border
        border-gray-300
        dark:border-gray-600
        bg-white
        dark:bg-gray-700
        text-gray-900
        dark:text-white
        placeholder:text-gray-400
        dark:placeholder:text-gray-400
        px-4
        py-3
        outline-none
        focus:border-blue-500
        focus:ring-2
        focus:ring-blue-500/20
        transition-all
        duration-300
      "
    />
  );
};

export default AuthInput;