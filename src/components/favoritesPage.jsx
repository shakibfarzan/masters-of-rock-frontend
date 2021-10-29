import { getFavoriteSongs } from "../services/favoritesService";

import Songs from "./songs";

class FavoritesPage extends Songs {
  async componentDidMount() {
    const current = [{ name: "type", title: "OriginalSong" }];
    const { data } = await getFavoriteSongs();
    console.log(data);
    const songsData = data.map((s) => ({
      id: s.song._id,
      name: s.song.name,
      artistName: s.song.artist.name,
      albumName: s.song.album.name,
      genre: s.song.genre.name,
      url: s.song.url,
      cover: s.song.album.cover,
      type: s.song.type,
    }));
    this.setState({ current, data: songsData });
  }

  render() {
    return super.render();
  }
}

export default FavoritesPage;
