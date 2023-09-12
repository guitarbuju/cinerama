import { create } from 'zustand'

export const useTimeShowStore = create((set)=>({
    timeShow:'',
    setTimeShow:(time) => set({ timeShow: time }),
    clearTimeShow:() => set({ timeShow: '' }),
})

)

export const usePopcornStore = create((set)=>({
    popcorn:'',
    setPopcorn:(pop) => set({ popcorn: pop }),
    clearPopcorn:() => set({ popcorn: '' })
})
)

export const useModalStore = create((set) => ({
    showFinalModal: false,
    setShowFinalModal: (value) => set({ showFinalModal: value }),
  }));
  