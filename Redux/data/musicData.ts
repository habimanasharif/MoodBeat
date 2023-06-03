import { createSlice } from '@reduxjs/toolkit';

interface music{
  cover: string;
  audio: string ;
  title: string;

}

interface musicList{
    musicList:music[]
    songNumber: number;
}
const initialState:musicList = {
  musicList: [{
    cover: 'https://www.premadepixels.com/wp-content/uploads/2021/09/Rebirth-Album-Cover-PP1.jpg',
    audio: 'https://beats-api.onrender.com/song/play/882e74e4118ff2552d633f3c47b5d8f7.mp3',
    title: 'Resilience'
  },
  {
    cover: 'https://www.premadepixels.com/wp-content/uploads/2023/05/Gunz-Roses-PP1.jpg',
    audio: 'https://beats-api.onrender.com/song/play/30dd0be54b8a9ea94e692dbc1d5e56a5.mp3',
    title: 'One Up'
  },
  ],
  songNumber: 0,
};
export const MusicData = createSlice(
  {
    name: 'musicData',
    initialState,
    reducers: {
      setMusicList: (state, action) => {
        state.musicList = action.payload;
      },
      setSongNumber: (state, action) => {
        if (state.musicList[action.payload]) {
          state.songNumber = action.payload;
        } else {
          state.songNumber = 0;
        }
      }
    },
  }
);
export const { setMusicList, setSongNumber } = MusicData.actions;

export default MusicData.reducer;
