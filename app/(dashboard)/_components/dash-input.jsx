const DashInput = ({ title, name, type, req = false, dValue = "" }) => {
  return (
    <div className="mt-5">
      <label htmlFor={name} className="block text-lg font-medium mb-2">
        {title}
      </label>
      <input
        defaultValue={dValue}
        required={req}
        type={type}
        placeholder={`${title} . . .`}
        name={name}
        id={name}
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-slate-800 focus:outline-none"
      ></input>
    </div>
  );
};

export default DashInput;
