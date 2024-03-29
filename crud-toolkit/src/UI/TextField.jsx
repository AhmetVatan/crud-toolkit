const TextField = ({ label, value, inputProps, onChange }) => {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        className="bg-gray-200 py-2 px-3 border-2 outline-none"
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TextField;
