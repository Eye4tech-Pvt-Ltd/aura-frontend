import { useState } from "react"

export function useMutation<T, P = void>(
  fn: (payload: P) => Promise<T>
) {
  const [loading, setLoading] = useState(false)

  const mutate = async (payload?: P) => {
    setLoading(true)
    try {
      return await fn(payload as P)
    } finally {
      setLoading(false)
    }
  }

  return { mutate, loading }
}