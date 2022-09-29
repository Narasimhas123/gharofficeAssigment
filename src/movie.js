import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Body from "/Body"
let data = [
  {
    id: "1",
    Title: "Star Wars: Episode V - The Empire Strikes Back",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    id: "2",
    Title: "Star Wars: Episode VI - Return of the Jedi",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    id: "3",
    Title: "KGF",
    Poster:
      "https://gumlet.assettype.com/film-companion%2Fimport%2Fwp-content%2Fuploads%2F2022%2F03%2FFC-Toofan-KGF-lead-image-min.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true"
  },
  {
    id: "4",
    Title: "RRR",
    Poster:
      "data:image/jpeg;base64,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"
  }
];
function Movie() {
  const [movie, setMovie] = useState(data);
  useEffect(() => {
    fetch(data)
      .then((response) => response.json())
      .then((json) => setMovie(json));
  }, []);
  let navigate = useNavigate();

  return (
    <>
      <h1
        style={{
          width: "100%",
          backgroundColor: "blue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80px"
        }}
      >
        MOVIE BOOKING
      </h1>
      <div
        style={{
          display: "flex",
          gap: "40px",
          boxShadow: "1px 1px 1px 1px solid black",
          flexWrap: "wrap"
        }}
      >
        {movie.map((movie) => (
          <div>
            <div
              key={movie.id}
              style={{
                backgroundColor: "white",
                boxShadow: "1px 1px 1px 1px gray",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "18px",
                justifyContent: "center",
                height: "600px",
                width: "300px",
                gap: "8px"
              }}
            >
              <div style={{ width: "80%" }}>
                <h3>{movie.Title}</h3>
              </div>

              <img
                width="250px"
                height="80%"
                src={movie.Poster}
                alt="not found"
              />
              <button
                onClick={() => navigate(`/Body`)}
                style={{
                  backgroundColor: "green",
                  height: "50px",
                  marginBottom: "5px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                BOOKING
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Movie;
