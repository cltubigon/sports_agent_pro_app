import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const opportunityStore = create(
  immer((set, get) => ({
    // ********* Toast *********
    hasApplied: [],
    sethasApplied: (data) => {
      set((state) => {
        state.hasApplied = data
      })
    },
    drawerApplications: [],
    setdrawerApplications: (item) => {
      set((state) => {
        const currApplications = get().drawerApplications
        const hasApplied = currApplications?.some((i) => i?.id === item?.id)
        if (hasApplied) {
          state.drawerApplications = currApplications?.filter(
            (i) => i?.id !== item?.id
          )
        } else if (currApplications.length < 1) {
          state.drawerApplications = [item]
        } else {
          state.drawerApplications = [...currApplications, item]
        }
      })
    },
  })),
  {
    name: 'opportunityStore',
  }
)

export default opportunityStore
