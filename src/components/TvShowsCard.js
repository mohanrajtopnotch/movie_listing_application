import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Typography, Image } from "antd";
export default function TvShowsCard(props) {
  const { id } = props;
  const [collectionName, setCollectionName] = useState([]);
  const [showList, setShowList] = useState([]);
  
  const tv = `https://api.themoviedb.org/3/tv/${id}?api_key=b0ba519817dc3845fa33db94579c3769`;
  useEffect(() => {
    axios
      .get(tv)
      .then((res) => {
        console.log(res.data);
        setCollectionName([...res.data.name]);
        setShowList([...showList, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
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
        {showList.map((item) => {
          console.log(item);
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
                style={{ width: "100%", height: "50%", margin: "2px" }}
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
              >
                <Image
                  width={250}
                  height={180}
                  src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                  alt="Image Not Available on the API"
                />
                <Typography>
                  <strong>Tv show Name: </strong>
                  {item.name}
                </Typography>
                <Typography>
                  <strong>Overview: </strong> {item.overview}
                </Typography>
                <Typography>
                  <strong>Ratings: </strong>
                  {item.vote_average}
                </Typography>
                <Link
                  to={{
                    pathname: "/moviedetails",
                    state: {
                      posterpath: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                      title: item.name,
                      voteavgrate: item.vote_average,
                      releasedate: item.first_air_date,
                      originallanguage: item.original_language,
                      overview: item.overview,
                      popularity: item.popularity,
                      votecount: item.vote_count,
                      personid: [item.genres],
                      noe: item.number_of_episodes,
                      nos: item.number_of_seasons,
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
