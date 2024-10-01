const DashInput = ({
  title,
  name,
  type,
  req = false,
  dValue = "",
  dsble = false,
}) => {
  return (
    <div className="mt-3">
      <label htmlFor={name} className="block text-lg font-medium mb-2">
        {title}
      </label>
      <input
        disabled={dsble}
        defaultValue={dValue}
        required={req}
        type={type}
        placeholder={`${title} . . .`}
        name={name}
        id={name}
        className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-slate-800 focus:outline-none ${
          dsble && "bg-gray-200"
        }`}
      ></input>
    </div>
  );
};

export default DashInput;
