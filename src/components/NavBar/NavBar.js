import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import ProductPage from "../Productpage/ProductPage";
import HomePage from "../Homepage/HomePage";
import { useNavigate } from "react-router-dom";
import { Select, MenuItem, ListSubheader } from "@mui/material";

const Navbar = ({ cartProducts, setSearchTerm }) => {
  const navigate = useNavigate();
  const [filter, setFilter] = React.useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleCartPage = () => {
    navigate("/cart"); // Navigate to the cart page (if you have one)
  };

  const handleProduct = () => {
    console.log("prod");
    navigate("/product");
  };

  const handleHome = () => {
    console.log("home");
    navigate("/");
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value); // Update search term on change
  };

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo or Title */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MyShop
          </Typography>
          {/* Hamburger Menu for Mobile */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            <Button color="inherit" onClick={handleHome}>
              Home
            </Button>
            <Button color="inherit" onClick={handleProduct}>
              Product
            </Button>
            <Button color="inherit" onClick={handleCartPage}>
              Cart
            </Button>
          </Box>
          {/* Search Bar */}
          <TextField
            size="small"
            placeholder="Search"
            variant="outlined"
            sx={{ backgroundColor: "white", borderRadius: 1, mr: 2 }}
            onChange={handleSearch}
          />
          {/* Filter Dropdown */}

          <Select
            value={filter}
            onChange={handleFilterChange}
            displayEmpty
            size="small"
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          >
            <MenuItem value="">
              <em>Filter</em>
            </MenuItem>
            <MenuItem value="price">Price</MenuItem>
            <MenuItem value="popularity">Popularity</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
