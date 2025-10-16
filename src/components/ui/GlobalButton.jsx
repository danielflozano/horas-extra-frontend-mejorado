const buttonVariants = {
  primary: 'bg-epaColor1 hover:border-epaColor1 hover:bg-epaColor3 hover:text-epaColor1',
  secondary: 'bg-gray-600 hover:border-epaColor1 hover:bg-epaColor6 hover:text-epaColor1',
  danger: 'bg-red-600 hover:bg-red-800 transform hover:scale-105',
}

export const GlobalButton = ({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`text-epaColor7 font-semibold rounded-xl border-2 border-transparent ${buttonVariants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};