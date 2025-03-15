import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


interface authToken {
  token: string
  setToken: (by: string) => void
}

const authToken = create<authToken>()(
  devtools(
    persist(
      (set) => ({
        token: '',
        setToken: (by: string) => set({ token: by }),
      }),
      {
        name: 'authToken',
      },
    ),
  ),
)

export default authToken