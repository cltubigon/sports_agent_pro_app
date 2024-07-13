import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const profilePageStore = create(
  immer((set, get) => ({
    // ********* Toast *********
    images: null,
    setimages: (data) => {
      set((state) => {
        state.images = data
      })
    },
  })),
  {
    name: 'profilePageStore',
  }
)

export default profilePageStore
