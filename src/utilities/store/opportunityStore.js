import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const opportunityStore = create(
  immer((set, get) => ({
    isMyApplications: false,
    setisMyApplications: () => {
      set((state) => {
        const status = get().isMyApplications
        state.isMyApplications = !status
      })
    },
    isMySavedList: false,
    setisMySavedList: () => {
      set((state) => {
        const status = get().isMySavedList
        state.isMySavedList = !status
      })
    },
  })),
  {
    name: 'opportunityStore',
  }
)

export default opportunityStore
