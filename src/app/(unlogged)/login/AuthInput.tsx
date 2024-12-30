type AuthInputProps = {
  id?: string;
  label: string;
  value: string;
  type?: "text" | "email" | "password";
  onChange: (newValue: string) => void;
  placeholder?: string;
};

const AuthInput = ({
  id,
  label,
  value,
  type,
  onChange,
  placeholder,
}: AuthInputProps) => {
  return (
    <div className="flex flex-col mt-4  w-full">
      <label className="text-white ">{label}</label>
      <input
        placeholder={placeholder}
        id={id}
        type={type ?? "text"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className={`px-4 py-5 rounded-2xl shadow-2xl text-black bg-gray-200 mt-2 `}
      />
    </div>
  );
};

export default AuthInput;
