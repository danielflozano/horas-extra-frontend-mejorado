export const GlobalInputSelect = ({
  label,
  option,
  data,
  dataArray = [],
  keyField = '_id',
  valueField,
  classNameLabel = 'flex flex-col',
  classNameSpan = 'text-epaColor1 font-semibold',
  classNameSelect = 'border border-gray-500 rounded-md p-1',
  register,
  errors,
  rules,
}) => {
  return (
    <label className={classNameLabel}>
      <span className={classNameSpan}>{label}</span>
      <select className={classNameSelect} {...register(data, rules)}>
        <option value="">{option}</option>
        {dataArray.map((d) => (
          <option key={d[keyField]} value={d[keyField]}>
            {d[valueField]}
          </option>
        ))}
      </select>
      {errors?.[data] && (
        <p className="text-red-500 text-sm">{errors[data].message}</p>
      )}
    </label>
  );
};
