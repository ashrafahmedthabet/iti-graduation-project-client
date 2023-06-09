import logo from "../images/logoWithNewColor.png";
import React, { useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import BadgeComponent from "./badge_component";
import { BasketToggle } from "./basket";
import UserAvatarComponent from "./user_avatar_component";
import PageRoutes from "../../router/page_routes";
import cartIcon from "../../imported/images/icons/icons8-shopping-cart-64.png";
import useAuth from "../../custom_hooks/use_auth";
import SwitchLanguageComponent from "../../components/switch_button_component/switch_button_component";
import { useLang } from '../../custom_hooks/use_get_current_language';
import { useSelector } from "react-redux";

const NavBarComponent = () => {
  const { translate, isArabic } = useLang()
  const { isAuth, logout, authData, isSeller, isAdmin } = useAuth();
  const navbar = useRef(null);
  const { pathname } = useLocation();
  const cart = [
    ...useSelector((state) => state.order.acceptedOrders),
    ...useSelector((state) => state.order.cart),
  ];

  const scrollHandler = () => {
    if (navbar.current && window.screen.width > 480) {
      if (window.pageYOffset >= 70) {
        navbar.current.classList.add("is-nav-scrolled");
      } else {
        navbar.current.classList.remove("is-nav-scrolled");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const basketDisabledPathNames = [
    // ROUTE.CHECKOUT_STEP_1,
  ];

  const handleActiveColor = (path) => {
    if (pathname == path) {
      return { color: "#6c7ae0" };
    } else {
      return { color: "#222" };
    }
  };

  return (
    <nav
      className="navigation navbar navbar-expand-lg navbar-light shadow-sm bg-white"
      ref={navbar}
    >
      <div className="container navigation-menu-main">
        <a className="navbar-brand" href="#">
          <Link to="/">
            <img height={30} className="ms-3 mt-md-0" alt="Logo" src={logo} />
          </Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 align-middle mb-lg-0">
            <li className="nav-item my-3 my-lg-0 ms-lg-5">
              <NavLink
                className="navigation-menu-active nav-link active fw-bold px-4"
                aria-current="page"
                exact
                to={PageRoutes.homeRoute.path}
                style={handleActiveColor(PageRoutes.homeRoute.path)}
              >
                {translate("nav_Home")}
              </NavLink>
            </li>
            <li className="nav-item my-3 my-lg-0">
              <NavLink
                className="navigation-menu-active nav-link fw-bold px-4"
                to={PageRoutes.productsRoute.path}
                style={handleActiveColor(PageRoutes.productsRoute.path)}
              >
                {translate("nav_Product")}
              </NavLink>
            </li>
            <li className="nav-item my-3 my-lg-0">
              <NavLink
                className="navigation-menu-active nav-link fw-bold px-4"
                to={PageRoutes.aboutRoute.path}
                style={handleActiveColor(PageRoutes.aboutRoute.path)}
              >
                {translate("nav_About")}
              </NavLink>
            </li>
            <li className="nav-item my-3 my-lg-0">
              <NavLink
                className="navigation-menu-active nav-link fw-bold px-4"
                to={PageRoutes.contactUsRoute.path}
                style={handleActiveColor(PageRoutes.contactUsRoute.path)}
              >
                {translate("nav_Contact")}
              </NavLink>
            </li>
            {
              isSeller == true && (
                <li className="nav-item my-3 my-lg-0">
                  <NavLink
                    className="navigation-menu-active nav-link fw-bold px-4"
                    to={PageRoutes.sellerDashboardLayout.path}
                    style={handleActiveColor(PageRoutes.sellerDashboardLayout.path)}
                  >
                    {translate("dashboard")}
                  </NavLink>
                </li>
              )
            }
            {
              isAdmin == true && (
                <li className="nav-item my-3 my-lg-0">
                  <NavLink
                    className="navigation-menu-active nav-link fw-bold px-4"
                    to={PageRoutes.adminDashboardLayout.path}
                    style={handleActiveColor(PageRoutes.adminDashboardLayout.path)}
                  >
                    {translate("dashboard")}
                  </NavLink>
                </li>
              )
            }
            {isAuth == false && (
              <>
                <li className="nav-item d-block d-lg-none my-3">
                  <NavLink
                    className="navigation-menu-active nav-link fw-bold px-4"
                    to={PageRoutes.signINRoute.path}
                    style={handleActiveColor(PageRoutes.signINRoute.path)}
                  >
                    {translate("nav_SingIn")}
                  </NavLink>
                </li>
                <li className="nav-item d-block d-lg-none my-3">
                  <NavLink
                    className="navigation-menu-active nav-link fw-bold px-4"
                    to={PageRoutes.signUpRoute.path}
                    style={handleActiveColor(PageRoutes.signUpRoute.path)}
                  >
                    {translate("nav_SingUp")}
                  </NavLink>
                </li>
              </>
            )}
            {isAuth == true && (
              <>
                <li className="nav-item d-block d-lg-none my-3">
                  <NavLink
                    className="navigation-menu-active nav-link fw-bold px-4"
                    to={PageRoutes.checkOutFirstStep.path}
                    style={handleActiveColor(PageRoutes.checkOutFirstStep.path)}
                  >
                    Check out
                    <BadgeComponent count={2} />
                  </NavLink>
                </li>
                <li className="nav-item d-block d-lg-none my-3">
                  <NavLink
                    className="navigation-menu-active nav-link fw-bold px-4"
                    to={PageRoutes.checkOutFirstStep.path}
                  >
                    {translate("nav_SingOut")}
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <ul className="navbar-nav me-2">
            {isAuth == true && (
              <>
                <li className=" m-1 nav-item d-none d-lg-block">
                  <BasketToggle>
                    {({ onClickToggle }) => (
                      <button
                        className="button-link navigation-menu-link basket-toggle"
                        disabled={basketDisabledPathNames.includes(pathname)}
                        onClick={onClickToggle}
                        type="button"
                      >
                        <BadgeComponent count={cart.length ?? 0}>
                          <img src={cartIcon} height={20} />
                        </BadgeComponent>
                      </button>
                    )}
                  </BasketToggle>
                </li>
                <li className="d-none d-lg-block pt-3">
                  <UserAvatarComponent logout={logout} authData={authData} />
                </li>
              </>
            )}
            {isAuth == false && (
              <>
                <li className=" mt-2 nav-item d-sm-none d-none d-lg-block">
                  <Link
                    className="nav-item margin-left-s d-none d-lg-block fw-bold "
                    to={PageRoutes.signINRoute.path}
                    style={handleActiveColor(PageRoutes.signINRoute.path)}
                  >
                    {translate("nav_SingIn")}
                  </Link>
                </li>
                <li className=" mt-2 nav-item d-sm-none d-none d-lg-block ">
                  <Link
                    className="d-none d-lg-block fw-bold"
                    to={PageRoutes.signUpRoute.path}
                    style={handleActiveColor(PageRoutes.signUpRoute.path)}
                  >
                    {translate("nav_SingUp")}
                  </Link>
                </li>
              </>
            )}
            <SwitchLanguageComponent />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
