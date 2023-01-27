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
    let selectedIds = [13636688, 3590194, 3590186, 3599714];
    let filteredSongs = albums.filter((song) => selectedIds.includes(song.id));
    let card = document.getElementById("container-fav-songs");
    filteredSongs.forEach((song) => {
      card.innerHTML += `<div class="col-md-3">
      <div class="card" style="width: 18rem">
        <img
          src="${song.album.cover_big}"
          class="card-img-top"
          alt="${song.album.title} pic"
          style="height: 65%"
        />
        <div class="card-body d-flex flex-column justify-content-between">
          <h5 class="card-title" id="title">${song.title}</h5>
          <p class="card-text">${"Album: " + song.album.title}</p>
          <p class="card-text">${"Artist: " + song.artist.name}</p>
        </div>
      </div>
    </div>`;
    });
  });
