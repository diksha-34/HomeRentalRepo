import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Button,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Pagination,
  CircularProgress,
  Autocomplete
} from "@mui/material";
import { findHouseByLocationAndPrice, fetchCities } from "../../State/House/Action";
import { useNavigate, useLocation } from "react-router-dom";
import HouseCard from "./HouseCard";
import { useSelector, useDispatch } from "react-redux";
import AuthModal from "../../Auth/AuthModel";

const currencies = [
  { value: "1", label: "1000-20000" },
  { value: "2", label: "20000-40000" },
  { value: "3", label: "40000-60000" },
  { value: "4", label: "60000-80000" },
  { value: "5", label: "80000-105000" },
];

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Get current page number from query params
  const searchParams = new URLSearchParams(location.search);
  const pageNumber = parseInt(searchParams.get("page")) || 1;

  // Local state for search criteria
  const [searchQuery, setSearchQuery] = useState({ city: "", price: "" });
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [showNoHousesMessage, setShowNoHousesMessage] = useState(false);

  // Fetch data from Redux store
  const houses = useSelector((state) => state.houseSearch?.houses || {});
  const auth = useSelector((state) => state.auth || {});
  const cities = useSelector((state) => state.houseSearch?.cities || []);
  const loadingCities = useSelector((state) => state.houseSearch?.loadingCities || false);

  // Fetch cities when component mounts
  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  // Close AuthModal when user logs in
  useEffect(() => {
    if (auth.user) {
      setOpenAuthModal(false);
    }
  }, [auth.user]);

  // Handle Search Button Click
  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchQuery.city) {
      alert("Please select a city before searching!");
      return;
    }

    const selectedCurrency = currencies.find((currency) => currency.value === searchQuery.price);
    if (!selectedCurrency) return;

    const [minPrice, maxPrice] = selectedCurrency.label.split("-").map((price) => parseInt(price, 10));

    dispatch(
      findHouseByLocationAndPrice({
        city: searchQuery.city,
        minPrice,
        maxPrice,
        pageNumber: 1,
        pageSize: 9,
      })
    );

    // Reset page query param to 1 on new search
    const newSearchParams = new URLSearchParams(location.search);
    newSearchParams.set("page", 1);
    navigate({ search: `?${newSearchParams.toString()}` });

    setShowNoHousesMessage(true);
  };

  // Handle Pagination Change
  const handlePaginationChange = (event, value) => {
    const selectedCurrency = currencies.find((currency) => currency.value === searchQuery.price);
    if (!selectedCurrency) return;

    const [minPrice, maxPrice] = selectedCurrency.label.split("-").map((price) => parseInt(price, 10));

    const newSearchParams = new URLSearchParams(location.search);
    newSearchParams.set("page", value);
    navigate({ search: `?${newSearchParams.toString()}` });

    dispatch(
      findHouseByLocationAndPrice({
        city: searchQuery.city,
        minPrice,
        maxPrice,
        pageNumber: value,
        pageSize: 9,
      })
    );
  };

  return (
    <>
      <Navigation />
      <div className="search-bar">
        <Grid container spacing={2}>
          {/* City Selection */}
          <Grid item xs={12} md={4}>
            <Autocomplete
              options={cities}
              getOptionLabel={(option) => option.name} // Ensure correct city display
              loading={loadingCities}
              onChange={(event, newValue) => setSearchQuery({ ...searchQuery, city: newValue?.name || "" })}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search by City"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <>
                        {loadingCities ? <CircularProgress color="inherit" size={20} /> : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
            />
          </Grid>

          {/* Budget Selection */}
          <Grid item xs={12} md={4}>
            <TextField
              select
              label="Budget"
              helperText="Please select your budget"
              fullWidth
              name="price"
              onChange={(e) => setSearchQuery({ ...searchQuery, price: e.target.value })}
              value={searchQuery.price}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Search Button */}
          <Grid item xs={12} md={4}>
            <Button variant="contained" fullWidth size="large" color="success" sx={{ padding: "15px 40px" }} onClick={handleSearch}>
              Search
            </Button>
          </Grid>
        </Grid>
      </div>

      {/* Properties Section */}
      <div className="properties-section bg-white py-24">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-[50px] font-bold text-center text-gray-900">Properties</h1>

          <div className="property-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {Array.isArray(houses.houses?.content) && houses.houses.content.length > 0 ? (
              houses.houses.content.map((item) => <HouseCard key={item.id} house={item} setOpenAuthModal={setOpenAuthModal} />)
            ) : (
              showNoHousesMessage && <p className="text-center">No houses available at this location.</p>
            )}
          </div>
        </div>
      </div>

      {/* Pagination */}
      {houses.houses?.totalPages > 1 && (
        <div className="pagination-container py-5 flex justify-center">
          <Pagination count={houses.houses?.totalPages || 0} page={pageNumber} onChange={handlePaginationChange} color="success" />
        </div>
      )}

      {/* Authentication Modal */}
      <AuthModal handleClose={() => setOpenAuthModal(false)} open={openAuthModal} />
    </>
  );
};

export default Home;
