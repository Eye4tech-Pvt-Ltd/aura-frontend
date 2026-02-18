import { useFormikContext } from 'formik'
import { useEffect } from 'react'

const Selector = ({ label, name, options }: any) => {
  const { values, setFieldValue, errors, touched } = useFormikContext<any>()
  useEffect(() => {
    console.log('Selector Value Changed:', values[name])
  }, [values])
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>

      <select
        name={name}
        value={values[name]}
        onChange={(e) => setFieldValue(name, e.target.value)}
        className="border p-2"
      >
        <option value="">Select role</option>
        {options.map((opt: string) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {touched[name] && errors[name] && (
          <p className="text-red-500 text-sm">{errors[name] as string}</p>
      )}
    </div>
  )
}

export default Selector
