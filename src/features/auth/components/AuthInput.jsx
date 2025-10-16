export const AuthInput = ({ type, label, defaultValue, data, register, errors, rules }) => {
  const inputId = `input-${data}`;

  return (
    <div className="pb-4">
      <label htmlFor={inputId} className="text-epaColor1 block pb-2 font-medium">
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        defaultValue={defaultValue}
        className="w-full p-1 border border-epaColor1 rounded-md"
        {...register(data, rules)}
      />
      {errors[data] && (
        <p className="text-red-500 text-sm">{errors[data].message}</p>
      )}
    </div>
  );
};