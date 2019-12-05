import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Lorem ipsum",
      duration: "4:05"
    },
    {
      title: "Dolor sit amet",
      duration: "2:30"
    },
    {
      title: "All Star",
      duration: "3:15"
    },
    {
      title: "Fear of the Dark",
      duration: "1:45"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
