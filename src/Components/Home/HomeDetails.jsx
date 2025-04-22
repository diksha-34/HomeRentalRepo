import { useEffect, useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import Navigation from "../Navigation/Navigation";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findHouseById } from "../../State/House/Action";
import { Grid, Button } from "@mui/material";
import { createPayment } from "../../State/Payment/Action";

export default function HomeDetails() {
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const { houseId } = useParams();
  const { houses, auth } = useSelector((state) => state);

  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    dispatch(findHouseById({ houseId }));
  }, [dispatch, houseId]);

  
  function handleclick(id){

    console.log("clicked ", id);
    navigate(`/homedetails/${id}`);
  } 

  useEffect(() => {
    if (houses.house?.images) {
      const cleanedString = houses.house?.images
        .replace(/'/g, "")
        .replace(/\[|\]/g, "");
      const imageUrls = cleanedString.split(",").map((url) => url.trim());
      const jpgImage = imageUrls.find((url) =>
        url.toLowerCase().endsWith(".jpg")
      );
      setMainImage(jpgImage || "");
    }
  }, [houses.house]);

  useEffect(() => {
    const fetchDataFromURL = async () => {
      try {
        const response = await axios.post(
          //http://127.0.0.1:5000/recommend_houses,
          "http://ec2-51-21-220-227.eu-north-1.compute.amazonaws.com:8080/recommend_houses",
          { user_input: houseId }
        );
      //  const suggestionsArray = Object.values(response.data.suggestions || {});
      const suggestionsObject = response.data.suggestions;  
      setSuggestions(suggestionsObject);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchDataFromURL();
  }, [houseId]); // Run whenever houseId changes

  const handleCheckout = () => {
    dispatch(createPayment(houseId, auth.user.id)); // Pass userId as well
  };

  return (
    <>
      <Navigation />
      <div className="bg-white">
        <div className="pt-6">
          <div className="px-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-80 lg:px-8">
            <div className="mt-20">
              <h1 className="font-bold text-2xl text-gray-500">
                {houses.house?.title}
              </h1>
              <p className="text-sm py-2">{houses.house?.location}</p>
            </div>
            <div className="lg:px-8 lg:py-5 lg:mt-20">
              <h1>
                <span className="font-bold text-2xl text-gray-500">
                  ₹{houses.house?.price}
                </span>
                /mo
              </h1>
            </div>
          </div>
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl px-6 grid grid-cols-1 lg:max-w-7xl lg:grid-cols-2 lg:gap-x-96 lg:px-8">
            <div className="h-[250px] w-[330px] lg:h-[450px] lg:w-[750px] overflow-hidden rounded-lg lg:block mb-5">
              {mainImage ? (
                <img
                  src={mainImage}
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <img
                  src="https://www.hemdevs.com/wp-content/uploads/2019/11/NO-IMAGE-AVAILABLE-818x540.jpg"
                  alt=""
                />
              )}
            </div>
            <div className="grid grid-cols-2 gap-y-3 lg:gap-y-6">
              {(houses.house?.images || "")
                .replace(/[\[\]']/g, "")
                .split(",")
                .map((url) => url.trim())
                .filter((imageUrl) =>
                  imageUrl.toLowerCase().trim().endsWith(".jpg")
                )
                .slice(0, 6)
                .map((imageUrl, index) => (
                  <div
                    key={index}
                    className="h-32 w-40 overflow-hidden rounded-lg"
                  >
                    <img
                      src={imageUrl}
                      className="h-full w-full object-cover object-center"
                      alt={`Image ${index}`}
                    />
                  </div>
                ))}
              {Array.from({
                length: Math.max(
                  0,
                  6 -
                    ((houses.house?.images || "").match(/\.jpg/g) || []).length
                ),
              }).map((_, index) => (
                <div
                  key={"default_" + index}
                  className="h-32 w-40 overflow-hidden rounded-lg"
                >
                  <img
                    src="https://www.hemdevs.com/wp-content/uploads/2019/11/NO-IMAGE-AVAILABLE-818x540.jpg"
                    className="h-full w-full object-cover object-center"
                    alt={`No Image Available`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* House info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Description
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-xl font-semibold tracking-tight text-gray-900">
                Features
              </p>

              {/* Reviews */}
              <div className="mt-6">
                <div className="flex gap-x-16 ">
                  <ul>
                    <li className="flex pb-2">
                      <BsCheck2
                        style={{
                          color: "red",
                          paddingTop: "5px",
                          fontSize: "20px",
                        }}
                      />{" "}
                      Air Conditioning
                    </li>
                    <li className="flex pb-2">
                      <BsCheck2
                        style={{
                          color: "red",
                          paddingTop: "5px",
                          fontSize: "20px",
                        }}
                      />{" "}
                      TV Cable
                    </li>
                    <li className="flex pb-2">
                      <BsCheck2
                        style={{
                          color: "red",
                          paddingTop: "5px",
                          fontSize: "20px",
                        }}
                      />{" "}
                      Washer
                    </li>
                    <li className="flex pb-2">
                      <BsCheck2
                        style={{
                          color: "red",
                          paddingTop: "5px",
                          fontSize: "20px",
                        }}
                      />{" "}
                      WiFi
                    </li>
                  </ul>
                  <ul>
                    <li className="flex pb-2">
                      <BsCheck2
                        style={{
                          color: "red",
                          paddingTop: "5px",
                          fontSize: "20px",
                        }}
                      />{" "}
                      Laundry
                    </li>
                    <li className="flex pb-2">
                      <BsCheck2
                        style={{
                          color: "red",
                          paddingTop: "5px",
                          fontSize: "20px",
                        }}
                      />{" "}
                      Refrigerator
                    </li>
                    <li className="flex pb-2">
                      <BsCheck2
                        style={{
                          color: "red",
                          paddingTop: "5px",
                          fontSize: "20px",
                        }}
                      />{" "}
                      Lawn
                    </li>
                    <li className="flex pb-2">
                      <BsCheck2
                        style={{
                          color: "red",
                          paddingTop: "5px",
                          fontSize: "20px",
                        }}
                      />{" "}
                      Window Coverings
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight text-gray-900 mt-6">
                  Dealer Information
                </p>

                <div className="mx-auto mb-5 flex justify-center mt-5">
                  <img
                    src="https://images.pexels.com/photos/7144228/pexels-photo-7144228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    style={{ width: "180px", height: "130px" }}
                  />
                </div>
                <div className="text-center">
                  <div className="mt-5">
                    <p>
                      <span className="font-semibold">Dealer Name -</span> John Doe
                    </p>
                    <p>
                    <span className="font-semibold">Contact Number -</span> 91+67****88
                    </p>
                    <p>
                    <span className="font-semibold">Email -</span> johndoe@example.com
                    </p>
                    <p>
                    <span className="font-semibold">Address -</span> state, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    Welcome to your dream home in the {houses.house?.title}.
                    This stunning {houses.house?.size}-bedroom,{" "}
                    {houses.house?.bath}-bathroom house offers contemporary
                    living. As you step inside, you'll be greeted by an
                    open-concept living space flooded with natural light.
                    Conveniently located near top-rated schools, parks, and
                    restaurants, this home offers the perfect blend of luxury
                    and convenience. Don't miss your chance to experience
                    coastal living.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-md font-medium text-gray-900">
                  Property Details
                </h3>

                <div className="mt-4">
                  <ul
                    role="list"
                    className=" space-y-2 pl-4 text-sm style list-none"
                  >
                    <div className="grid grid-cols-2">
                      <li className="text-gray-600">
                        <span className="font-semibold">Bedrooms</span> -{" "}
                        {houses.house?.size}
                      </li>
                      <li className="text-gray-600">
                        <span className="font-semibold">Bathrooms</span> -{" "}
                        {houses.house?.bath}
                      </li>
                    </div>
                    <div className="grid grid-cols-2">
                      <li className="text-gray-600">
                        <span className="font-semibold">Rating</span> -{" "}
                        {houses.house?.rating}0 / 5
                      </li>
                      <li className="text-gray-600">
                        <span className="font-semibold">Price</span> - ₹{" "}
                        {houses.house?.price}
                      </li>
                    </div>
                    <li className="text-gray-600">
                      <span className="font-semibold">Address</span> -{" "}
                      {houses.house?.address}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Additional details
                </h2>
                <div className="mt-4">
                  <ul
                    role="list"
                    className="list-none  space-y-2 pl-4 text-sm style"
                  >
                    <div className="grid grid-cols-2">
                      <li className="text-gray-600">
                        <span className="font-semibold">Square Fit</span> -{" "}
                        {houses.house?.squareFeet}
                      </li>
                      <li className="text-gray-600">
                        <span className="font-semibold">Laltitude</span> -{" "}
                        {houses.house?.latitude}
                      </li>
                    </div>
                    <div className="grid grid-cols-2">
                      <li className="text-gray-600">
                        <span className="font-semibold">Longitude</span> -{" "}
                        {houses.house?.longitude}
                      </li>
                      <li className="text-gray-600">
                        <span className="font-semibold">Area Type</span> -{" "}
                        {houses.house?.areaType}
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mb-10">
            <p className="my-4 text-sm">You have to pay 30% of the house rent in advance for booking the room </p>
            <Button
              variant="contained"
              size="large"
              color="success"
              sx={{ bgcolor: "#388E3C", paddingX: "50px" }}
              onClick={handleCheckout}
            >
              Book Room
            </Button>
          </div>

          <div className="p-6">
            <h2 className="font-bold text-3xl text-gray-500 sm:text-3xl pb-8 text-center">
              Suggestions
            </h2>
            <Grid
  className="space-y-5"
  container
>
  {Object.entries(suggestions).map(([houseId, suggestion]) => (
    <Grid
      key={houseId}  // Using houseId as a unique key for each item
      item
      container
      className="shadow-xl rounded-md border p-5"
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
      }}
      onClick={() => navigate(`/homedetails/${houseId}`)}  // Navigate using the houseId
    >
      <div className="grid grid-cols-1">
        <div className="lg:flex lg:items-center cursor-pointer" onClick={() => handleclick(houseId)}>
          <img
            className="w-[20rem] h-[12rem] lg:w-[15rem] lg:h-[12rem] object-cover object-top"
            src={getMainImageUrl(suggestion.Images)}
            alt=""
          />
          <div className="lg:ml-5 space-y-2">
            <p className="text-lg font-semibold pb-3 mt-2">
              {suggestion.Title}
            </p>
            <p>
              <span className="font-semibold">Location : </span>
              {suggestion.Location}
            </p>
            <div className="grid grid-cols-2">
              <p>
                <span className="font-semibold">Bathroom : </span>
                {suggestion.Bath}
              </p>
              <p>
                <span className="font-semibold">Bedroom : </span>
                {suggestion.Size}
              </p>
            </div>
            <div className="grid grid-cols-2">
              <p>
                <span className="font-semibold">Square Fit : </span>
                {suggestion["Total Sqft"]}
              </p>
              <p>
                <span className="font-semibold">Area Type : </span>
                {suggestion["Area Type"]}
              </p>
            </div>
            <div className="grid grid-cols-2">
              <p>
                <span className="font-semibold">Rating : </span>
                {suggestion.Rating}/5
              </p>
              <p>
                <span className="font-semibold">Price : </span>
                {suggestion.Price}/-
              </p>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  ))}
</Grid>
          </div>
        </div>
      </div>
    </>
  );
}
// Function to get the main image URL from the Images string
function getMainImageUrl(imagesString) {
  if (!imagesString)
    return "https://www.hemdevs.com/wp-content/uploads/2019/11/NO-IMAGE-AVAILABLE-818x540.jpg";

  const images = JSON.parse(imagesString.replace(/'/g, '"'));
  const jpgImages = images.filter((url) => url.toLowerCase().endsWith(".jpg"));

  return jpgImages.length > 0
    ? jpgImages[0]
    : "https://www.hemdevs.com/wp-content/uploads/2019/11/NO-IMAGE-AVAILABLE-818x540.jpg";
}
