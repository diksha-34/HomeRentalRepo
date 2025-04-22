// import React, { useState, useEffect } from "react";
// import Navigation from "../Navigation/Navigation";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import {
//   Button,
//   Grid,
//   InputAdornment,
//   MenuItem,
//   TextField,
//   Pagination,
// } from "@mui/material";
// import { findHouseByLocationAndPrice } from "../../State/House/Action";
// import { useNavigate, useLocation } from "react-router-dom";
// import HouseCard from "./HouseCard";
// import { useSelector, useDispatch } from "react-redux";
// import AuthModal from "../../Auth/AuthModel";

// const currencies = [
//   { value: "1", label: "1000-20000" },
//   { value: "2", label: "20000-40000" },
//   { value: "3", label: "40000-60000" },
//   { value: "4", label: "60000-80000" },
//   { value: "5", label: "80000-105000" },
// ];

// const Home = () => {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const decodedQueryString = decodeURIComponent(location.search);
//   const searchParams = new URLSearchParams(decodedQueryString);
//   const pageNumber = parseInt(searchParams.get("page")) || 1; // Parse page number to integer

//   const [searchQuery, setSearchQuery] = useState({
//     city: "",
//     price: "",
//   });
//   const [, setOpenAuthModal] = useState(false);
//   const [showNoHousesMessage, setShowNoHousesMessage] = useState(false);

//   const { houses, auth } = useSelector((state) => state);

//   const handleClose = () => {
//     setOpenAuthModal(false);
//   };

//   useEffect(() => {
//     if (auth.user) {
//       handleClose();
//     }
//   }, [auth.user]);

//   const  = (e) => {
//     e.preventDefault();
//     const selectedCurrency = currencies.find(
//       (currency) => currency.value === searchQuery.price
//     );
//     const [minPrice, maxPrice] = selectedCurrency.label
//       .split("-")
//       .map((price) => parseInt(price));

//     dispatch(
//       findHouseByLocationAndPrice({
//         ...searchQuery,
//         minPrice,
//         maxPrice,
//         pageNumber: 1, // Reset to page 1 every time you search
//         pageSize: 9,
//       })
//     );

//     const searchParam = new URLSearchParams(location.search);
//     searchParam.set("page", 1);
//     const query = searchParam.toString();
//     navigate({ search: `?${query}` });

//     setShowNoHousesMessage(true);
//   };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setSearchQuery({
  //     ...searchQuery,
  //     [name]: value,
  //   });
  // };

  // const handlePaginationChange = (event, value) => {
  //   let newPageNumber;
  //   if (value === "prev") {
  //     newPageNumber = Math.max(1, pageNumber - 1);
  //   } else if (value === "next") {
  //     newPageNumber = Math.min(houses.houses?.totalPages || 1, pageNumber + 1);
  //   } else {
  //     newPageNumber = value;
  //   }
  
  //   const selectedCurrency = currencies.find(
  //     (currency) => currency.value === searchQuery.price
  //   );
  //   const [minPrice, maxPrice] = selectedCurrency.label
  //     .split("-")
  //     .map((price) => parseInt(price));
  
  //   const searchParam = new URLSearchParams(location.search);
  //   searchParam.set("page", newPageNumber);
  //   const query = searchParam.toString();
  //   navigate({ search: `?${query}` });
  
  //   dispatch(
  //     findHouseByLocationAndPrice({
  //       ...searchQuery,
  //       minPrice,
  //       maxPrice,
  //       pageNumber: newPageNumber,
  //       pageSize: 9,
  //     })
  //   );
  // };
  

//   return (
//     <>
//       <div className="bg-[url('https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover w-full h-full">
//         <br />
//         <br />
//         <br />
//         <Navigation />
//         <div className="text-center mt-40 mb-16 font-bold text-white text-[30px] md:text-[50px] md:mt-40">
//           Find Your Suitable Rental House
//         </div>
//         <div className="container mx-auto bg-white p-7 mb-10 items-center flex justify-center max-w-xs md:max-w-4xl md:p-3">
//           <Grid item>
//             <TextField
//               id="outlined-select-currency"
//               select
//               label="Select"
//               defaultValue="EUR"
//               helperText="Please select your budget"
//               sx={{ margin: "20px" }}
//               onChange={handleInputChange}
//               value={searchQuery.price}
//               name="price"
//             >
//               {currencies.map((option) => (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </TextField>
//             <TextField
//               label="Location"
//               id="outlined-start-adornment"
//               sx={{ margin: "20px" }}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <LocationOnIcon />
//                   </InputAdornment>
//                 ),
//               }}
//               onChange={handleInputChange}
//               value={searchQuery.city}
//               name="city"
//             />
//             <Button
//               variant="contained"
//               size="large"
//               color="success"
//               sx={{ padding: "15px 40px", margin: "20px" }}
//               onClick={}
//             >
//               Search
//             </Button>
//           </Grid>
//         </div>
//         <div className="text-white text-right mr-4 font-semibold text-md">
//           <h4>Scroll Down</h4>
//           <p>To discover more</p>
//         </div>
//       </div>
//       <div className="bg-white py-24 md:py-16 sm:py-32">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl text-center">
//             <h1 className="text-3xl md:text-[50px] font-bold tracking-tight text-gray-900 sm:text-4xl">
//               Properties
//             </h1>
//           </div>
//           <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
//             {Array.isArray(houses.houses?.content) && houses.houses.content.length > 0 ? (
//               houses.houses.content.map((item) => (
//                 <HouseCard key={item.id} house={item} setOpenAuthModal={setOpenAuthModal} />
//               ))
//             ) : (
//               showNoHousesMessage && <p className="text-center">No houses are available at this particular location</p>
//             )}
//           </div>
//         </div>
//       </div>
//       {houses.houses?.totalPages > 1 && (
//         <section>
//           <div className="px-4 py-5 flex justify-center">
//             <Pagination
//               count={houses.houses?.totalPages || 0}
//               page={pageNumber}
//               onChange={(event, value) => handlePaginationChange(event, value)}
//               color="success"
//             />
//           </div>
//         </section>
//       )}
//       <AuthModal handleClose={handleClose} open={openAuthModal} />
//     </>
//   );
// };

// export default Home;
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
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { findHouseByLocationAndPrice } from "../../State/House/Action";
import { useNavigate, useLocation } from "react-router-dom";
import HouseCard from "./HouseCard";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import AuthModal from "../../Auth/AuthModel";

const baseUrl = "http://localhost:5000/search";
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

  const searchParams = new URLSearchParams(location.search);
  const pageNumber = parseInt(searchParams.get("page")) || 1;

  const [showNoHousesMessage, setShowNoHousesMessage] = useState(false);
  const [searchQuery, setSearchQuery] = useState({ city: "", price: "" });
  const [houses, setHouses] = useState([]); // ✅ Store fetched houses
  const [totalPages, setTotalPages] = useState(1); // ✅ Store total pages from API
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [loadingCities, setLoadingCities] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const handleClose = () => {
    setOpenAuthModal(false);
  };

  
  useEffect(() => {
    const fetchCities = async () => {
      setLoadingCities(true);
      try {
        const { data } = await axios.get("http://localhost:5000/cities");
        localStorage.setItem("cities", JSON.stringify(data));
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
      setLoadingCities(false);
    };


    const storedCities = localStorage.getItem("cities");
    if (storedCities) {
      setCities(JSON.parse(storedCities));
    } else {
      fetchCities();
    }
  }, []);

  // ✅ Fetch Houses from API
  const fetchSearchResults = async (params) => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}?${params.toString()}`);
      setHouses(response.data.content);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
    setLoading(false);
  };

  // ✅ Handle Search Click
  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchQuery.price) {
      alert("Please select a budget before searching!");
      return;
    }

    const selectedCurrency = currencies.find(
      (currency) => currency.value === searchQuery.price
    );

    if (!selectedCurrency) {
      alert("Invalid budget selection!");
      return;
    }

    const [minPrice, maxPrice] = selectedCurrency.label
      .split("-")
      .map((price) => parseInt(price));

    const params = new URLSearchParams({
      city: searchQuery.city,
      minPrice: minPrice,
      maxPrice: maxPrice,
      pageNumber: 1,
      pageSize: 9,
    });

    fetchSearchResults(params);

    searchParams.set("page", 1);
    navigate({ search: `?${searchParams.toString()}` });
    setShowNoHousesMessage(true);
  };

  // ✅ Handle Pagination Change
  const handlePaginationChange = (event, value) => {
    const newPageNumber = value;

    const selectedCurrency = currencies.find(
      (currency) => currency.value === searchQuery.price
    );
    if (!selectedCurrency) return;

    const [minPrice, maxPrice] = selectedCurrency.label
      .split("-")
      .map((price) => parseInt(price));

    const params = new URLSearchParams({
      city: searchQuery.city,
      minPrice: minPrice,
      maxPrice: maxPrice,
      pageNumber: newPageNumber,
      pageSize: 9,
    });

    fetchSearchResults(params);

    searchParams.set("page", newPageNumber);
    navigate({ search: `?${searchParams.toString()}` });
  };

  return (
    <>
      <div className="bg-[url('https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover w-full h-full">
        <br />
        <br />
        <br />
        <Navigation />
        <div className="text-center mt-40 mb-16 font-bold text-white text-[30px] md:text-[50px] md:mt-40">
          Find Your Suitable Rental House
        </div>
        <div className="container mx-auto bg-white p-7 mb-10 items-center flex justify-center max-w-xs md:max-w-4xl md:p-3">
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={4}>
              {loadingCities ? (
                <CircularProgress />
              ) : (
                <Autocomplete
                  options={cities}
                  getOptionLabel={(option) => option}
                  value={searchQuery.city}
                  onChange={(event, newValue) =>
                    setSearchQuery({ ...searchQuery, city: newValue || "" })
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Location"
                      name="city"
                      helperText="Please select your city"
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <>
                            {params.InputProps.endAdornment}
                            <InputAdornment position="end">
                              <LocationOnIcon />
                            </InputAdornment>
                          </>
                        ),
                      }}
                    />
                  )}
                />
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                select
                label="Budget"
                helperText="Please select your budget"
                fullWidth
                name="price"
                onChange={(e) =>
                  setSearchQuery({ ...searchQuery, price: e.target.value })
                }
                value={searchQuery.price}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                variant="contained"
                fullWidth
                size="large"
                color="success"
                onClick={handleSearch}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="bg-white py-24">
  <div className="mx-auto max-w-7xl">
    {houses!= null && houses.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {houses.map((item) => (
          <HouseCard
            key={item.id}
            house={item}
            setOpenAuthModal={setOpenAuthModal}
          />
        ))}
      </div>
    ) : (
      showNoHousesMessage && (
        <p className="text-center">No houses available</p>
      )
    )}
  </div>
</div>


      {totalPages > 1 && (
        <div className="flex justify-center py-5">
          <Pagination count={totalPages} page={pageNumber} onChange={handlePaginationChange} color="success" />
        </div>
      )}
      <AuthModal handleClose={handleClose} open={openAuthModal} />

      
    </>
  );
};

export default Home;
