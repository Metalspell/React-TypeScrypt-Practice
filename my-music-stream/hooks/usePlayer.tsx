import { create } from 'zustand'
import { PlayerStoreProps } from '@/interfaces'

const usePlayer = create<PlayerStoreProps>((set) => ({
  ids: [],
  activeId: undefined,
  setId: (id: string) => set({
    activeId: id
  }),
  setIds: (ids: string[]) => set({
    ids: ids
  }),
  reset: () => set({
    ids: [],
    activeId: undefined
  })
}));

export default usePlayer;