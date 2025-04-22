import { Typography } from "@material-tailwind/react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import YouTubeIcon from "@mui/icons-material/YouTube";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SendIcon from '@mui/icons-material/Send';
const LINKS = [
  {
    title: "Quick Links",
    items: ["About us", "Service", "Contact"],
  },
  {
    title: "Contact us",
    items: [
      "info@findhouse.com",
      "new city, jalandhar",
      "144602 Punjab",
      "+ 6377130289",
    ],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative w-full bg-green-700 text-white">
      <div className="w-full p-10">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6">
            About Site

            <p className=" py-5 text-sm text-gray-200 max-w-md">"Our website is designed to help you find rental houses according to your preferred location and budget. Whether you're looking for a cozy apartment in the city or a spacious house in the suburbs, we've got you covered. Search, discover, and find your perfect rental home with ease."</p>
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3  justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 text-lg font-semibold"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal text-gray-200 hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
            <div className=" pr-10">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-3 text-lg font-semibold pr-5"
              >
                Follow us
              </Typography>
              <div className="flex space-x-4 text-gray-200 sm:justify-center mb-5 ml-10">
                <FacebookOutlinedIcon/>
                <InstagramIcon />
                <TwitterIcon />
                <LanguageIcon />
                <YouTubeIcon />
              </div>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 200,
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Your email"
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton
                  sx={{ p: "10px" }}
                  aria-label="directions"
                >
                  <SendIcon />
                </IconButton>
              </Paper>
            </div>
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col text-center border-t border-blue-gray-50 py-4 ">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">Material Tailwind</a>. All
            Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
