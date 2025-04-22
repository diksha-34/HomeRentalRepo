import React, { useEffect, useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useNavigate } from "react-router-dom";

const HouseCard = ({ house, setOpenAuthModal }) => {
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("jwt")));

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem("jwt")));
  }, [localStorage.getItem("jwt")]);

  const handleCardClick = () => {
    console.log("here i am ")
    if (isLoggedIn && house.available !== "Not Available") {
      console.log("here house clicked");
      navigate(`/homedetails/${house.houseId}`);
    } else if (!isLoggedIn) {
      console.log("here open auth")
      // Open authentication modal and then navigate after successful login
      setOpenAuthModal(true);
    }
  };
  
  useEffect(() => {
    if (house.images) {
      const cleanedString = house.images.replace(/'/g, '').replace(/\[|\]/g, '');
      const imageUrls = cleanedString.split(',').map(url => url.trim());
      console.log("Image URLs:", imageUrls);
      const jpgImages = imageUrls.filter(url => url.toLowerCase().endsWith('.jpg'));
      console.log("JPG Images:", jpgImages);
      const jpgImage = jpgImages.length > 0 ? jpgImages[0] : '';
      console.log("JPG Image:", jpgImage);
      setMainImage(jpgImage);
    }
  }, [house]);  

  
  
  return (
    <div onClick={house.available !== "Not Available" ? handleCardClick : null}>
      <article className={`flex max-w-xl flex-col items-start justify-between border rounded-lg shadow-lg p-5 ${house.available === "Not available" ? "opacity-50" : ""}`} style={{ cursor: house.available === "Not available" ? "not-allowed" : "pointer" }}>
        <div className="mx-auto mb-5">
          {mainImage ? (
            <img src={mainImage} alt="" style={{ width: "350px", height: "220px" }} />
          ) : (
            <img src="https://www.hemdevs.com/wp-content/uploads/2019/11/NO-IMAGE-AVAILABLE-818x540.jpg" alt="" /> 
          )}
        </div>
        <div className="flex items-center gap-x-4 text-xs">
          <p className={`text-red-500 text-lg ${house.available === "Not available" ? "opacity-50" : ""}`}>{house.available}</p>
          <a
            href={house.href}
            className={`relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 ${house.available === "Not available" ? "pointer-events-none" : ""}`}
          >
            {house.available}
          </a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={house.href}>
              <span className="absolute inset-0" />
              {house.title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            <LocationOnOutlinedIcon sx={{ fontSize: "20px" }} />
            {house.location}
          </p>
          <div className="mt-5 flex">
            <p className="line-clamp-3 text-md leading-6 text-gray-600 pr-5">
              Beds: {house.size}
            </p>
            <p className="line-clamp-3 text-md leading-6 text-gray-600 px-5">
              Baths: {house.bath}
            </p>
            <p className="line-clamp-3 text-md leading-6 text-gray-600 px-5">
              Price: {house.price}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default HouseCard;
