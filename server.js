const express = require("express");

const bodyparser = require("body-parser");

const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyparser.json());
app.listen(process.env.PORT || 3000, () => {
  console.log("my app is running");
});
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/albums", (req, res) => {
  res.send(albumsData);
});
app.get("/albums/:id", (req, res) => {
  console.log(req.params);
  var id = req.params.id;
  var album = albumsData.find(album => {
    return album.albumId === id;
  });
  res.send(album);
});
app.post("/albums", (req, res) => {
  const newAlbum = req.body;
  albumsData.push(newAlbum);
  res.send({ newAlbum });
});
app.put("/albums/:id", (req, res) => {
  const index = albumsData.findIndex(album => album.albumId === req.params.id);
  albumsData[index] = { ...albumsData[index], ...req.body };
  res.send(albumsData[index]);
});
app.put("/albums/:id", (req, res) => {
  console.log(req.params.albumId);
  console.log(req.body);
  var albumId = req.params.albumId;
  console.log(albumId);
  res.send("testing");
});
app.delete("/albums/:id", (req, res) => {
  const albumToDelete = albumsData.find(
    album => album.albumId === req.params.id
  );
  albumsData.splice(albumsData.indexOf(albumToDelete), 1);
  res.send("Deleted album " + req.params.id);
});
app.get("/albums/:albumId", (req, res) => {
  console.log(req.query);
  if (filteredList.find(album => album.primaryGenreName === req.query.genre)) {
    res.send(filteredList);
  } else {
    res.send(albumsData);
  }
});
const albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url:
      "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0"
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url:
      "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0"
  }
];
