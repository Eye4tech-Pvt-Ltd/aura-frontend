import { useFormikContext } from 'formik'

const Input = ({ label, name, placeholder, icon: Icon, focus }: any) => {
  const { values, handleChange, errors, touched } = useFormikContext<any>()

  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>

      <div className="flex gap-2 items-center border p-2">
        {Icon && <Icon size={18} />}
        <input
          name={name}
          placeholder={placeholder}
          value={values[name]}
          onChange={handleChange}
          className="flex-1 outline-none"
          autoFocus={focus}
        />
      </div>

      {touched[name] && errors[name] && (
          <p className="text-red-500 text-sm">{errors[name] as string}</p>
      )}
    </div>
  )
}

export default Input
