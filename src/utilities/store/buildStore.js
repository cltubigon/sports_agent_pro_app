import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const checkDetailsIfOk = (get) => {
  const brief = get().brief
  const dealName = get().dealName
  if (brief != '<p><br></p>' && brief && dealName) return true
  return false
}

const checkActivitiesIfOk = (get) => {
  const curActivities = get().selectedActivities
  if (
    curActivities?.length > 0 &&
    curActivities?.every((item) => item?.date && item?.compensation)
  ) {
    return true
  } else {
    return false
  }
}

const buildStore = create(
  immer((set, get) => ({
    // ********* Toast *********
    activeStep: 'deal_type',
    setactiveStep: (data) => {
      set((state) => {
        state.activeStep = data
      })
    },
    list: [
      { name: 'Deal type', id: 'deal_type', isOK: true },
      { name: 'Details', id: 'details', isOK: false },
      { name: 'Recipients', id: 'recipients', isOK: false },
      { name: 'Activities', id: 'activities', isOK: false },
      { name: 'Review', id: 'review', isOK: false },
      { name: 'Payment', id: 'payment', isOK: false },
    ],
    // Deal Type
    dealType: 'offer',
    setdealType: (data) => {
      set((state) => {
        state.dealType = data
      })
      set((state) => {
        state.list[0].isOK = true
      })
    },
    // Details
    dealName: null,
    setdealName: (data) => {
      set((state) => {
        state.dealName = data
      })
      set((state) => {
        const isOK = checkDetailsIfOk(get)
        state.list[1].isOK = isOK
      })
    },
    brief: null,
    setbrief: (data) => {
      set((state) => {
        state.brief = data
      })
      set((state) => {
        const isOK = checkDetailsIfOk(get)
        state.list[1].isOK = isOK
      })
    },
    briefDateOpen: false,
    setbriefDateOpen: (data) => {
      set((state) => {
        state.briefDateOpen = data
      })
    },
    expirationDate: null,
    setexpirationDate: (data) => {
      set((state) => {
        state.expirationDate = data
      })
      set((state) => {
        const isOK = checkDetailsIfOk(get)
        state.list[1].isOK = isOK
      })
    },
    // Recipients
    selectedRecipients: [],
    setselectedRecipients: (data) => {
      set((state) => {
        const curRecipients = get().selectedRecipients
        if (!curRecipients?.some((r) => r === data)) {
          state.selectedRecipients = [...curRecipients, data]
        } else {
          state.selectedRecipients = curRecipients?.filter((r) => r !== data)
        }
      })
      set((state) => {
        const curRecipients = get().selectedRecipients
        if (curRecipients?.length > 0) {
          state.list[2].isOK = true
        } else {
          state.list[2].isOK = false
        }
      })
    },
    // Activities
    selectedActivities: [],
    setselectedActivities: (data) => {
      set((state) => {
        const curActivities = get().selectedActivities
        if (curActivities?.length > 0) {
          state.selectedActivities = [...curActivities, ...data]
        } else {
          state.selectedActivities = data
        }
      })
      set((state) => {
        state.list[3].isOK = checkActivitiesIfOk(get)
      })
    },
    setDate: (data) => {
      set((state) => {
        const curActivities = get().selectedActivities

        state.selectedActivities = curActivities?.map((temp) => {
          if (temp.id === data.id) {
            const newTemp = { ...temp, date: data.date }
            return newTemp
          } else return temp
        })
      })
      set((state) => {
        state.list[3].isOK = checkActivitiesIfOk(get)
      })
    },
    setCompensation: (data) => {
      set((state) => {
        const curActivities = get().selectedActivities

        state.selectedActivities = curActivities?.map((temp) => {
          if (temp.id === data.id) {
            const newTemp = { ...temp, compensation: data.compensation }
            console.log({ newTemp })
            return newTemp
          } else return temp
        })
      })
      set((state) => {
        state.list[3].isOK = checkActivitiesIfOk(get)
      })
    },
    trashActivity: (data) => {
      set((state) => {
        const curActivities = get().selectedActivities
        state.selectedActivities = curActivities?.filter(
          (temp) => temp.id !== data.id
        )
      })
      set((state) => {
        state.list[3].isOK = checkActivitiesIfOk(get)
      })
    },
  })),
  {
    name: 'buildStore',
  }
)

export default buildStore
