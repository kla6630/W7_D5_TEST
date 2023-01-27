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
    let card = document.getElementById("container-my-fav-albums-carousel");
    filteredSongs.forEach((song) => {
      card.innerHTML += `
      <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="${song.album.cover_big}" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
    </div>
    
      `;
    });
  });


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
    let card = document.getElementById("container-my-fav-albums-carousel");
    filteredSongs.forEach((song) => {
      card.innerHTML += `
      <div class="carousel-inner">
      <div class="carousel-item">
        <img src="${song.album.cover_big}" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
    </div>
    
      `;
    });
  });