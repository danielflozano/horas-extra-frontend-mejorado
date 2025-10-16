export const SecondaryButton = ({ children, width, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-gray-600 text-epaColor7 font-semibold rounded-xl p-1.5 mb-4 border-2 border-transparent hover:border-epaColor1 hover:bg-epaColor6 hover:text-epaColor1 hover:font-semibold ${width}`}
    >
      {children}
    </button>
  );
};