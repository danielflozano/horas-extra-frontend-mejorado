export const ThirdButton = ({ children, width, onClick, type = 'button',  }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-red-600 font-semibold text-epaColor7 rounded-2xl p-2 mx-auto block hover:bg-red-800 transform hover:scale-105 ${width}`}
    >
      {children}
    </button>
  );
};

//