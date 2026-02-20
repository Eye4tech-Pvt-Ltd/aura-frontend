import { useFormikContext } from 'formik'
import { useEffect } from 'react'
import Label from './Label'

const Selector = ({ label, Icon, name, options }: any) => {
  const { values, setFieldValue, errors, touched } = useFormikContext<any>()

  useEffect(() => {
    console.log('Selector Value Changed:', values?.[name])
  }, [values?.[name]])

  const hasError = touched?.[name] && errors?.[name]

  return (
    <div className="flex flex-col gap-1">
      <Label text={label} id={name} />

      <div
        className={`w-full flex items-center gap-2 px-3 py-2 border rounded-lg transition-all duration-200 ${
          hasError
            ? 'border-red-500 focus-within:ring-red-500 focus-within:border-red-500'
            : 'border-slate-300 focus-within:ring-primary-500 focus-within:border-primary-500'
        }`}
      >
        {Icon && <Icon size={18} />}

        <select
          id={name}
          name={name}
          value={values?.[name] || ''}
          onChange={(e) => setFieldValue(name, e.target.value)}
          className="flex-1 outline-none bg-transparent"
        >
          <option value="">Select role</option>
          {options.map((opt: string) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {hasError && (
        <p className="text-red-500 text-sm">{errors[name] as string}</p>
      )}
    </div>
  )
}

export default Selector
