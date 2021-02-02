//Importing Neccessary Packages
import React, { useEffect, useState } from "react";
import { Row, Col, Image, Typography } from "antd";
import { useLocation } from "react-router-dom";
import "../css/MovieDetailsView.css";
import "antd/dist/antd.css";
import axios from "axios";

export default function MovieDetailsView(props) {
  let Location = useLocation();
  let data = Location.state.personid;
  data = data.flat(1);
  console.log(data);

  //Local States
  const [personId, setPersonId] = useState([]);

  //Promise API Call
  const fetchData = (element) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://api.themoviedb.org/3/person/${element}?api_key=b0ba519817dc3845fa33db94579c3769`
        )
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };


  useEffect(() => {
    let list = [];
    data.forEach((element) => {
      list.push(fetchData(element));
    });
    let fun = async () => {
      await Promise.allSettled([...list]).then((res) => {
        let _res = res.map((i) => i.value);
        setPersonId(_res);
        console.log("mass", _res);
      });
    };
    fun();
  }, []);

  //Person Details for MOVIES Screen
  const PersonDetaisView = () => {
    return (
      <div>
        <Row style={{ justifyContent: "center", marginTop: "10px" }}>
          {personId.map((item) => {
            return (
              <>
                {item?.name && (
                  <div
                    style={{
                      border: "3px solid orange",
                      padding: "10px",
                      margin: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <Col
                      style={{ width: "270px", height: "350px", margin: "2px" }}
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                    >
                      <Typography style={{ fontSize: "16px" }}>
                        {item.name}
                      </Typography>
                      <Image
                        width={250}
                        height={250}
                        style={{ margin: "10px", padding: "2px" }}
                        alt="Image Not Found in the API"
                        src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                      />
                      <Typography
                        style={{ fontSize: "15px", margin: "4px 10px" }}
                      >
                        Role: {item.known_for_department}
                      </Typography>

                      <Typography
                        style={{ fontSize: "15px", margin: "2px 10px" }}
                      >
                        DOB: {item.birthday}
                      </Typography>
                      <Typography
                        style={{ fontSize: "15px", margin: "2px 10px" }}
                      >
                        RATING: {item.popularity}
                      </Typography>
                    </Col>
                  </div>
                )}
              </>
            );
          })}
        </Row>
      </div>
    );
  };

  //Movie Details View
  const MovieDetailsOriginalView = () => {
    return (
      <>
        <Row style={{ padding: "10px", backgroundColor: "orange" }}>
          <Col className="image-wrapper">
            <Image style={{ height: "100%" }} src={Location.state.posterpath} />
            <div style={{ padding: "30px", width: "70%" }}>
              <label style={{ fontSize: "20px", fontWeight: "bold" }}>
                Movie Name:{" "}
              </label>
              <Typography style={{ margin: "0px 30px 0px", fontSize: "20px" }}>
                {Location.state.title}
              </Typography>
              <label style={{ fontSize: "20px", fontWeight: "bold" }}>
                Movie Release Date:{" "}
              </label>
              <Typography style={{ margin: "0px 30px 0px", fontSize: "20px" }}>
                {Location.state.releasedate}
              </Typography>
              <label style={{ fontSize: "20px", fontWeight: "bold" }}>
                Overview:{" "}
              </label>
              <Typography style={{ margin: "0px 30px 0px", fontSize: "20px" }}>
                {Location.state.overview}
              </Typography>

              {Location?.state.noe && Location?.state.nos && (
                <>
                  <label style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Number of Season:{" "}
                  </label>
                  <Typography
                    style={{ margin: "0px 30px 0px", fontSize: "20px" }}
                  >
                    {Location.state.nos}
                  </Typography>

                  <label style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Number of Episode:{" "}
                  </label>
                  <Typography
                    style={{ margin: "0px 30px 0px", fontSize: "20px" }}
                  >
                    {Location.state.noe}
                  </Typography>
                </>
              )}
              <label style={{ fontSize: "20px", fontWeight: "bold" }}>
                Popularity:{" "}
              </label>
              <Typography style={{ margin: "0px 30px 0px", fontSize: "20px" }}>
                {Location.state.popularity}
              </Typography>
              <label style={{ fontSize: "20px", fontWeight: "bold" }}>
                Vote Count:{" "}
              </label>
              <Typography style={{ margin: "0px 30px 0px", fontSize: "20px" }}>
                {Location.state.votecount}
              </Typography>
              <label style={{ fontSize: "20px", fontWeight: "bold" }}>
                Rating:{" "}
              </label>
              <Typography style={{ margin: "0px 30px 0px", fontSize: "20px" }}>
                {Location.state.voteavgrate}
              </Typography>
              <label style={{ fontSize: "20px", fontWeight: "bold" }}>
                Original Language:{" "}
              </label>
              <Typography style={{ margin: "0px 30px 0px", fontSize: "20px" }}>
                {Location.state.originallanguage}
              </Typography>
            </div>
          </Col>
        </Row>
        <PersonDetaisView />
      </>
    );
  };
  return <MovieDetailsOriginalView />;
}
