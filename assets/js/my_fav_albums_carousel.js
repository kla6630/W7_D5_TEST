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
    let card = document.getElementById("my_carousel_card_01");
    filteredSongs.forEach((song) => {
      card.innerHTML += `
      <img
      src="${song.album.cover_big}"
      class="d-block w-100"
      alt="..."
    />
    <div class="card-body">
      <h5>
        ${song.album.title}
      </h5>
      <p>
      ${song.artist.name}
      </p>
    </div>
    
      `;
    });
  });

fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=beatles`)
  .then(function (data) {
    console.log(`try`, data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selectedIds = [116348612];
    let filteredSongs = albums.filter((song) => selectedIds.includes(song.id));
    let card = document.getElementById("my_carousel_card_02");
    filteredSongs.forEach((song) => {
      card.innerHTML += `
      <img
      src="${song.album.cover_big}"
      class="d-block w-100"
      alt="..."
    />
    <div class="card-body">
      <h5>
        ${song.album.title}
      </h5>
      <p>
      ${song.artist.name}
      </p>
    </div>
    
      `;
    });
  });

fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=guns`)
  .then(function (data) {
    console.log(`try`, data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selectedIds = [2171464];
    let filteredSongs = albums.filter((song) => selectedIds.includes(song.id));
    let card = document.getElementById("my_carousel_card_03");
    filteredSongs.forEach((song) => {
      card.innerHTML += `
      <img
      src="${song.album.cover_big}"
      class="d-block w-100"
      alt="..."
    />
    <div class="card-body">
      <h5>
        ${song.album.title}
      </h5>
      <p>
      ${song.artist.name}
      </p>
    </div>
    
      `;
    });
  });

fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=adele`)
  .then(function (data) {
    console.log(`try`, data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selectedIds = [8086130];
    let filteredSongs = albums.filter((song) => selectedIds.includes(song.id));
    let card = document.getElementById("my_carousel_card_04");
    filteredSongs.forEach((song) => {
      card.innerHTML += `
      <img
      src="${song.album.cover_big}"
      class="d-block w-100"
      alt="..."
    />
    <div class="card-body">
      <h5>
        ${song.album.title}
      </h5>
      <p>
      ${song.artist.name}
      </p>
    </div>
    
      `;
    });
  });

fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=anastacia`)
  .then(function (data) {
    console.log(`try`, data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selectedIds = [832546];
    let filteredSongs = albums.filter((song) => selectedIds.includes(song.id));
    let card = document.getElementById("my_carousel_card_05");
    filteredSongs.forEach((song) => {
      card.innerHTML += `
      <img
      src="${song.album.cover_big}"
      class="d-block w-100"
      alt="..."
    />
    <div class="card-body">
      <h5>
        ${song.album.title}
      </h5>
      <p>
      ${song.artist.name}
      </p>
    </div>
    
      `;
    });
  });

fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=aretha`)
  .then(function (data) {
    console.log(`try`, data);

    if (data.ok) {
      return data.json();
    }
  })
  .then(function (data) {
    let albums = data.data;
    console.log(albums);
    let selectedIds = [2133626];
    let filteredSongs = albums.filter((song) => selectedIds.includes(song.id));
    let card = document.getElementById("my_carousel_card_06");
    filteredSongs.forEach((song) => {
      card.innerHTML += `
      <img
      src="${song.album.cover_big}"
      class="d-block w-100"
      alt="..."
    />
    <div class="card-body">
      <h5>
        ${song.album.title}
      </h5>
      <p>
      ${song.artist.name}
      </p>
    </div>
    
      `;
    });
  });
