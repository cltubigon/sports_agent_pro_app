import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const immerPersist = (config) =>
  persist(immer(config), {
    name: 'signupStore', // The name of the store
  })

const signupStore = create(
  immerPersist((set, get) => ({
    // ********* Toast *********
    accountType: null,
    setaccountType: (data) => {
      set((state) => {
        state.accountType = data
      })
    },
    email: null,
    setemail: (data) => {
      set((state) => {
        state.email = data
      })
    },
    submittedData: null,
    setsubmittedData: (data) => {
      set((state) => {
        state.submittedData = data
      })
    },
  }))
)

export default signupStore
