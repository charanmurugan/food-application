import React from "react";
import "../Styles/header.css";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Main() {
  let basket = useSelector((state) => state.basket.basket);
  return (
    <div className="header">
      <div className="header-main">
        <Typography variant="h6" className="header-name">
          Food App
        </Typography>
        <div className="header-search">
          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          <SearchIcon
            className="search-icon"
            onClick={() => alert("i clicked")}
          />
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <IconButton aria-label="show total items in basket" color="inherit">
            <Badge
              badgeContent={basket?.length}
              color="secondary"
              className="basket-icon-count"
            >
              <ShoppingCartIcon className="basket-icon" />
            </Badge>
          </IconButton>
        </Link>
      </div>
    </div>
  );
}

export default Main;
