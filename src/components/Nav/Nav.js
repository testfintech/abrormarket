import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { facebook, telegram, instagram } from "../../assets/svg/svg";
import "./Nav.css";
import { Grid, Container } from "@mui/material";
import { logo, bag, heart } from "../../assets/svg/svg";
import SearchIcon from "@mui/icons-material/Search";

function Nav(props) {
  const [show, setShow] = useState(false);
  const [ru, setRu] = useState(false);
  const [usa, setUsa] = useState(false);
  const [uz, setUz] = useState(true);
  return (
    <nav>
      <div className="navTop">
        <Container maxWidth="xl">
          <Grid container justifyContent={"flex-end"}>
            <div className="flag">
              <div className="titleLang" onClick={() => setShow(!show)}>
                {ru && <ReactCountryFlag countryCode="RU" svg />}
                {usa && <ReactCountryFlag countryCode="US" svg />}
                {uz && <ReactCountryFlag countryCode="UZ" svg />}
                <KeyboardArrowDownIcon />
              </div>
              {show && (
                <ul>
                  <li
                    onClick={() => {
                      setRu(true);
                      setUz(false);
                      setUsa(false);
                      setShow(false);
                    }}
                  >
                    <ReactCountryFlag countryCode="RU" svg />
                  </li>
                  <li
                    onClick={() => {
                      setRu(false);
                      setUz(false);
                      setUsa(true);
                      setShow(false);
                    }}
                  >
                    <ReactCountryFlag countryCode="US" svg />
                  </li>
                  <li>
                    <li
                      onClick={() => {
                        setRu(false);
                        setUz(true);
                        setUsa(false);
                        setShow(false);
                      }}
                    >
                      <ReactCountryFlag countryCode="UZ" svg />
                    </li>
                  </li>
                </ul>
              )}
            </div>

            <div className="icons">
              <p>{facebook}</p>
              <p>{telegram}</p>
              <p>{instagram}</p>
            </div>
          </Grid>
        </Container>
      </div>
      <div className="navMenu">
        <Container maxWidth="xl">
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid items md={1}>
              <p>{logo}</p>
            </Grid>
            <Grid items md={7}>
              <form action="" className="search">
                <button>
                  <SearchIcon />
                </button>
                <input type="text" placeholder="search" />
              </form>
            </Grid>
            <Grid items md={2}>
              <div className="icons">
                <p>{bag}</p>
                <p>{heart}</p>
                <button>Войти</button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </nav>
  );
}

export default Nav;
