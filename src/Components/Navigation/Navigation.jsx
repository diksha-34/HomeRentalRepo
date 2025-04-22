import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import { useLocation, useNavigate } from "react-router-dom/dist";
import { useDispatch, useSelector } from "react-redux";
import AuthModal from "../../Auth/AuthModel";
import { getUser, logout } from "../../State/Auth/Action";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [openAuthModal, setOpenAuthModel] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpen = () => {
    setOpenAuthModel(true);
  };
  const handleClose = () => {
    setOpenAuthModel(false);
  };
  const handleCloseUserMenu=(event)=>{
    setAnchorEl(null);
  }

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  useEffect(() => {
    if (auth.user) {
      handleClose();
    }
    if (location.pathname === "/login" || location.pathname === "/register") {
      navigate(-1);
    }
  }, [auth.user]);

  const handleLogout = () => {
    dispatch(logout());
    handleCloseUserMenu();
  };
  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <MapsHomeWorkIcon fontSize="large" />
              <span className="ml-2 font-bold text-2xl align-middle">
                FindHouse
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <a
              href="/" className="flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900">
                Home
              </a>

            </Popover>

            <a
              href="/about"
              className="text-md font-semibold leading-6 text-gray-900"
            >
              About us
            </a>
            <a
              href="/services"
              className="text-md font-semibold leading-6 text-gray-900"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-md font-semibold leading-6 text-gray-900"
            >
              Contact
            </a>
           
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {auth.user?.firstName ? (
                   <a className="text-md font-semibold leading-6 text-gray-900 flex text-right">
                    {auth.user?.firstName.toUpperCase()} /   
                    <p className="text-md cursor-pointer" onClick={handleLogout}> LOGOUT</p>
                    </a>
                  ):(
                    <a
                    className="text-md font-semibold leading-6 text-gray-900 cursor-pointer"
                    onClick={handleOpen}
                  >
                    Log in / Register <span aria-hidden="true">&rarr;</span>
                  </a>
                  )
                }
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
              <MapsHomeWorkIcon fontSize="large" />
              <span className="ml-2 font-bold text-2xl align-middle">
                FindHouse
              </span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <a
              href="/" className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Home
                        </a>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About us
                  </a>
                  <a
                    href="/services"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Services
                  </a>
                  <a
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact
                  </a>
                </div>
                <div className="py-6">
                {auth.user?.firstName ? (
                   <a className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 flex text-right">
                    {auth.user?.firstName.toUpperCase()} /  
                    <p className="text-lg cursor-pointer" onClick={handleLogout}> LOGOUT</p>
                    </a>
                  ):(
                    <a
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 "
                    onClick={handleOpen}
                  >
                    Log in / Register
                  </a>
                  )
                }
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <AuthModal handleClose={handleClose} open={openAuthModal} />
    </div>
  );
}
