//Importing Neccessary Packages
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Typography, Image } from "antd";
export default function Cards(props) {
  //Destructuring Properties
  const { id } = props;

  //Local States
  const [collectionName, setCollectionName] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const movie = `https://api.themoviedb.org/3/list/${id}?api_key=b0ba519817dc3845fa33db94579c3769`;

  //Render Component geting elements from API
  useEffect(() => {
    axios
      .get(movie)
      .then((res) => {
        console.log(res.data);
        setCollectionName([...res.data.name]);
        setMovieList([...res.data.items]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {/* Category Type */}
      <Typography
        style={{
          backgroundColor: "orange",
          padding: "10px",
          fontSize: "20px",
          color: "white",
          border: "1px solid white",
        }}
      >
        {collectionName}
      </Typography>
      <Row style={{ justifyContent: "center", marginTop: "10px" }}>
        {/* Iteration Elements using Map */}
        {movieList.map((item) => {
          return (
            <div
              style={{
                border: "3px solid orange",
                padding: "10px",
                margin: "10px",
                borderRadius: "5px",
              }}
            >
              <Col
                style={{ width: "250px", height: "280px", margin: "2px" }}
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
              >
                <Image
                  width={250}
                  height={180}
                  src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                  alt="Image Not Available on the API"
                />
                <Typography>{item.original_title}</Typography>
                <Typography>{item.release_date}</Typography>
                <Typography>{item.vote_average}</Typography>
                <Link
                  to={{
                    pathname: "/moviedetails",
                    state: {
                      posterpath: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                      title: item.original_title,
                      voteavgrate: item.vote_average,
                      releasedate: item.release_date,
                      originallanguage: item.original_language,
                      overview: item.overview,
                      popularity: item.popularity,
                      votecount: item.vote_count,
                      personid: [item.genre_ids],
                    },
                  }}
                >
                  <Typography style={{ color: "red" }}>Read More</Typography>
                </Link>
              </Col>
            </div>
          );
        })}
      </Row>
    </div>
  );
}
