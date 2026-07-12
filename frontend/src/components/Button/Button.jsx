const Button = ({ text, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;