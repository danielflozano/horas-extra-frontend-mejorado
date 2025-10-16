export const PrimaryButton = ({ children, width }) => {
  return (
    <button
      type='submit'
      className={`bg-epaColor1 text-epaColor7 font-semibold rounded-xl p-1.5 mb-4 border-2 border-transparent hover:border-epaColor1 hover:bg-epaColor3 hover:text-epaColor1 hover:font-semibold ${width}`}
    >
      {children}
    </button>
  );
};
