import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const opportunityStore = create(
  immer((set, get) => ({
    // ********* Toast *********
    hasApplied: null,
    sethasApplied: (data) => {
      set((state) => {
        state.hasApplied = data
      })
    },
    hasSavedToList: null,
    sethasSavedToList: (data) => {
      set((state) => {
        state.hasSavedToList = data
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
    // Athlete Opportunities
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
