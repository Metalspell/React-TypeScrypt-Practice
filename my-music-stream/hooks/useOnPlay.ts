import { SongProps } from "@/interfaces";

import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";

const useOnPlay = (songs: SongProps[]) => {
  const player = usePlayer();
  const authModal = useAuthModal();
  const { user } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      return authModal.onOpen();
    }

    // if(id === 'nope') {
    //   return;
    // }

    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  }

  return onPlay;
}

export default useOnPlay;