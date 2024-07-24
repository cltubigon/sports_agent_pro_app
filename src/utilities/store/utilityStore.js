import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const utilityStore = create(
  immer((set, get) => ({
    // ********* Toast *********
    toast: null,
    settoast: (data) => {
      set((state) => {
        state.toast = data
      })
    },
    isMobileMenuOpen: false,
    setIsMobileMenuOpen: (data) => {
      set((state) => {
        state.isMobileMenuOpen = data
      })
    },
    showFavorites: false,
    setshowFavorites: (data) => {
      set((state) => {
        state.showFavorites = data
      })
    },
  })),
  {
    name: 'utilityStore',
  }
)

export default utilityStore
