import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const immerPersist = (config) =>
  persist(immer(config), {
    name: 'utilityStorePersist', // The name of the store
  })

const utilityStorePersist = create(
  immerPersist((set, get) => ({
    // selectedProducts: [],
    // ******* Discover - Favorites *******
    favorites: [],
    setfavorites: (data) => {
      set((state) => {
        state.favorites = data
      })
    },
  }))
)

export default utilityStorePersist
