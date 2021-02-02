//Importing Neccessary Packages
import React, { useEffect, useState } from "react";
import { Row, Col, Typography, Image } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

export default function TvShowsCard(props) {
  //Destructuring Props
  const { id } = props;
  const [trendingList, setTrendingList] = useState([]);

  //API URI
  const trendings = `https://api.themoviedb.org/3/trending/all/day?api_key=b0ba519817dc3845fa33db94579c3769`;
  useEffect(() => {
    axios
      .get(trendings)
      .then((res) => {
        //console.log(res.data.results);
        setTrendingList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Row style={{ justifyContent: "center", marginTop: "10px" }}>
        {trendingList.map((item) => {
          return (
            <div
              style={{
                border: "3px solid orange",
                padding: "10px",
                margin: "10px",
                borderRadius: "5px",
                width: "70%",
              }}
            >
              <Col
                style={{ height: "50%", margin: "2px" }}
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
              >
                <Image
                  width={300}
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
                      title: item.original_title,
                      voteavgrate: item.vote_average,
                      releasedate: item.release_date,
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
