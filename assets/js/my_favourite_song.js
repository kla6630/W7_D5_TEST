fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=muse`)
  .then(function (data) {
    console.log(`try`, data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selectedIds = [13636688];
    let filteredSongs = albums.filter((song) => selectedIds.includes(song.id));
    let card = document.getElementById("container-fav-song");
    filteredSongs.forEach((song) => {
      card.innerHTML += `
      <div class="card bg-dark text-white">
      <img
        src="${song.album.cover_big}"
        class="card-img"
        alt="${song.album.title} pic"
      />
      <div class="card-img-overlay">
        <h5 class="card-title">${song.title}</h5>
        <p class="card-text">${"Album: " + song.album.title}</p>
        <p class="card-text">${"Artist: " + song.artist.name}</p>
      </div>
    </div>`;
    });
  });
