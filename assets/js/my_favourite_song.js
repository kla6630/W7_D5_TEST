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
      <img
      src="${song.album.cover_big}"
      class="img-fluid rounded-start"
      alt="${song.album.title}"
    />
    
    <div class="col-md-4">
      <div class="my_spotlight_card_body">
        <h5>${song.title}</h5>
        <p>${song.album.title}</p>
        <p class="card-text">${song.artist.name}</p>
      </div>
    </div>
    `;
    });
  });
