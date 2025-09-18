import type { UseFormRegister } from 'react-hook-form'

interface Props {
  label: string
  name: string
  type?: string
  register: UseFormRegister<any>
  validation?: object
  error?: string
  className?: string
}

export const Input = ({
  label,
  name,
  type = 'text',
  register,
  validation = {},
  error,
  className = ''
}: Props) => {
  return (
    <div className={`mb-2 flex flex-col ${className}`}>
      <span>{label}</span>
      <input
        type={type}
        className={`rounded-md border bg-gray-200 p-2 ${
          error ? 'border-red-500' : ''
        }`}
        {...register(name, validation)}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  )
}