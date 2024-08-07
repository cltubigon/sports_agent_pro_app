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

const checkRecipientIfOk = (get) => {
  const curRecipients = get().selectedRecipients
  if (curRecipients?.length > 0) {
    return true
  } else {
    return false
  }
}

const buildStore = create(
  immer((set, get) => ({
    // ********* Toast *********
    fetchedAthletes: null,
    setfetchedAthletes: (data) => {
      set((state) => {
        state.fetchedAthletes = data
      })
    },
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
      set((state) => {
        const dealType = get().dealType
        state.list[4].isOK =
          dealType === 'offer'
            ? checkActivitiesIfOk(get) &&
              checkDetailsIfOk(get) &&
              checkRecipientIfOk(get)
            : checkActivitiesIfOk(get) && checkDetailsIfOk(get)
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
      set((state) => {
        const dealType = get().dealType
        state.list[4].isOK =
          dealType === 'offer'
            ? checkActivitiesIfOk(get) &&
              checkDetailsIfOk(get) &&
              checkRecipientIfOk(get)
            : checkActivitiesIfOk(get) && checkDetailsIfOk(get)
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
      set((state) => {
        const dealType = get().dealType
        state.list[4].isOK =
          dealType === 'offer'
            ? checkActivitiesIfOk(get) &&
              checkDetailsIfOk(get) &&
              checkRecipientIfOk(get)
            : checkActivitiesIfOk(get) && checkDetailsIfOk(get)
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
        if (data?.length < 1 || !data) return
        if (!curRecipients?.some((r) => data?.includes(r))) {
          console.log('data', data)
          console.log('entered top')
          state.selectedRecipients = [...curRecipients, ...data]
        } else {
          console.log('entered bottom')
          state.selectedRecipients = curRecipients?.filter(
            (r) => !data?.includes(r)
          )
        }
      })
      set((state) => {
        state.list[2].isOK = checkRecipientIfOk(get)
      })
      set((state) => {
        const dealType = get().dealType
        state.list[4].isOK =
          dealType === 'offer'
            ? checkActivitiesIfOk(get) &&
              checkDetailsIfOk(get) &&
              checkRecipientIfOk(get)
            : checkActivitiesIfOk(get) && checkDetailsIfOk(get)
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
      set((state) => {
        const dealType = get().dealType
        state.list[4].isOK =
          dealType === 'offer'
            ? checkActivitiesIfOk(get) &&
              checkDetailsIfOk(get) &&
              checkRecipientIfOk(get)
            : checkActivitiesIfOk(get) && checkDetailsIfOk(get)
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
      set((state) => {
        const dealType = get().dealType
        state.list[4].isOK =
          dealType === 'offer'
            ? checkActivitiesIfOk(get) &&
              checkDetailsIfOk(get) &&
              checkRecipientIfOk(get)
            : checkActivitiesIfOk(get) && checkDetailsIfOk(get)
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
      set((state) => {
        const dealType = get().dealType
        state.list[4].isOK =
          dealType === 'offer'
            ? checkActivitiesIfOk(get) &&
              checkDetailsIfOk(get) &&
              checkRecipientIfOk(get)
            : checkActivitiesIfOk(get) && checkDetailsIfOk(get)
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
      set((state) => {
        const dealType = get().dealType
        state.list[4].isOK =
          dealType === 'offer'
            ? checkActivitiesIfOk(get) &&
              checkDetailsIfOk(get) &&
              checkRecipientIfOk(get)
            : checkActivitiesIfOk(get) && checkDetailsIfOk(get)
      })
    },
    postId: null,
    setpostId: (data) => {
      set((state) => {
        state.postId = data
      })
    },
    resetbuildStore: () => {
      set((state) => {
        state.list[0].isOK = false
        state.list[1].isOK = false
        state.list[2].isOK = false
        state.list[3].isOK = false
        state.list[4].isOK = false
        state.postId = null
        state.activeStep = 'deal_type'
        state.dealType = 'offer'
        state.dealName = null
        state.brief = null
        state.briefDateOpen = false
        state.expirationDate = null
        state.selectedRecipients = []
        state.selectedActivities = []
      })
    },
  })),
  {
    name: 'buildStore',
  }
)

export default buildStore
