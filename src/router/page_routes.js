import AboutPage from "../pages/about/about_page";
import Contact_us from "../pages/contactUs/contact_us";
import HomePage from "../pages/home/home_page";
import LayoutPage from "../pages/layout/layout_page";
import NoPage from "../pages/no_page/no_page";
import Products from "../pages/products/products_page";
import Sign_in from "../pages/signIn/sign_in";
import Signup from "../pages/signUp/Sign_up";
import CheckoutPage from "../pages/checkout/checkout_page";
import ChangePasswordPage from "../pages/change_password/change_password.page";
import EditProfilePage from "../pages/edit_profile/edit_profile.page";
import EnterEmailPage from "../pages/enter_email/enter_email.page";
import ProfilePage from "../pages/profile/profile_page";
import SellerOrders from "../pages/sellerdashboard/scenes/orderslist";
import SellerOrderDetails from "../pages/sellerdashboard/scenes/orderdetails";
import SellerAddproduct from "../pages/sellerdashboard/scenes/addproduct";
import SellerEditproduct from "../pages/sellerdashboard/scenes/editproduct";
import SellerProductDetails from "../pages/sellerdashboard/scenes/productDetails";
import Calendar from "../pages/sellerdashboard/scenes/calendar/calendar";
import SellerDashboard from './../pages/sellerdashboard/scenes/dashboard/index';
import SellerDashboardLayout from './../pages/sellerdashboard/App';
import SellerProducts from './../pages/sellerdashboard/scenes/productslist/index';
import ProductDetails from "../pages/products/productDetails";
import OrderSummary from "../imported/pages/new_checkout/step_1/check_out_first_step_page";
import Payment from "../imported/pages/new_checkout/step3/check_out_third_step";
import ShippingDetails from "../imported/pages/new_checkout/step_2/check_out_second_step";
import NewProfilePage from "../imported/pages/new_profile/new_profile.page";
import MainAccountComponent from "../imported/pages/new_profile/components/account/main_account_component";
import MainMyOrdersComponent from "../imported/pages/new_profile/components/my_orders/main_my_orders_component";
import AdminDashboard from "../pages/admindashboard/scenes/dashboard";
import AdminDashboardLayout from "../pages/admindashboard/App";
import AdminProducts from './../pages/admindashboard/scenes/productslist/index';
import AdminAddproduct from './../pages/admindashboard/scenes/addproduct/index';
import AdminEditproduct from './../pages/admindashboard/scenes/editproduct/index';
import AdminProductDetails from './../pages/admindashboard/scenes/productDetails/index';
import AdminOrders from './../pages/admindashboard/scenes/orderslist/index';
import AdminOrderDetails from './../pages/admindashboard/scenes/orderdetails/index';
import AdminCalendar from './../pages/admindashboard/scenes/calendar/calendar';
import AdminUsers from './../pages/admindashboard/scenes/userslist/index';
import AdminAddUser from './../pages/admindashboard/scenes/adduser/index';
import AdminEditUser from './../pages/admindashboard/scenes/edituser/index';
import AdminUserDetails from './../pages/admindashboard/scenes/userDetails/index';
import AdminContactDetails from "../pages/admindashboard/scenes/contactDetails";
import AdminContacts from "../pages/admindashboard/scenes/contactslist";

export default class PageRoutes {
  static layoutRoute = {
    path: "/",
    component: <LayoutPage />,
  };

  static homeRoute = {
    path: "/",
    component: <HomePage />,
  };

  static aboutRoute = {
    path: "/about",
    component: <AboutPage />,
  };
  static signINRoute = {
    path: "/signin",
    component: <Sign_in />,
  };
  static signUpRoute = {
    path: "/signup",
    component: <Signup />,
  };
  static contactUsRoute = {
    path: "/contactus",
    component: <Contact_us />,
  };
  static productsRoute = {
    path: "/products",
    component: <Products />,
  };
  static checkoutRoute = {
    path: "/checkout",
    component: <CheckoutPage />,
  };
  // static profileRoute = {
  //   path: "/profile",
  //   component: <ProfilePage />,
  // }

  static changePasswordRoute = {
    path: "/change-password",
    component: <ChangePasswordPage />,
  }

  static enterEmailRoute = {
    path: "/enter-email",
    component: <EnterEmailPage />,
  }

  // static editProfileRoute = {
  //   path: "/edit-profile",
  //   component: <EditProfilePage />,
  // }

  static profileRoute = {
    path: "/profile",
    component: <NewProfilePage />,
  }

  static accountRoute = {
    path: "/profile",
    component: <NewProfilePage />,
  }

  static myOrdersRoute = {
    path: "/my-orders",
    component: <NewProfilePage />,
  }

  static checkOutFirstStep = {
    path: "/checkout-step-1",
    component: <OrderSummary />,
  }

  static checkOutSecondStep = {
    path: "/checkout-step-2",
    component: <ShippingDetails />,
  }

  static checkOutThirdStep = {
    path: "/checkout-step-3",
    component: <Payment />,
  }

  //seller dashboard 
  static sellerDashboard = {
    path: "sellerdashboard",
    component: <SellerDashboard />,
  }
  static sellerDashboardLayout = {
    path: "/sellerdashboardlayout",
    component: <SellerDashboardLayout />,
  }

  static sellerProducts = {
    path: "sellerproducts",
    component: <SellerProducts />,
  }
  static sellerAddProduct = {
    path: "selleraddproduct",
    component: <SellerAddproduct />,
  }
  static sellerEditProducts = {
    path: "sellereditproduct/:id",
    component: <SellerEditproduct />,
  }
  static sellerProductDetails = {
    path: "sellerproductDetails",
    component: <SellerProductDetails />,
  }
  static sellerOrders = {
    path: "sellerorders",
    component: <SellerOrders />,
  }
  static sellerOrderDetails = {
    path: "sellerorderdetails/:id",
    component: <SellerOrderDetails />,
  }
  static sellerCalender = {
    path: "sellercalendar",
    component: <Calendar />,
  }
  static productDetails = {
    path: "productdetails/:id",
    component: <ProductDetails />,
  };
  static sellerProductDetails = {
    path: "sellerproductdetails/:id",
    component: <SellerProductDetails />,
  }

  // admin dashboard
  static adminDashboard = {
    path: "admindashboard",
    component: <AdminDashboard />,
  }
  static adminDashboardLayout = {
    path: "/admindashboardlayout",
    component: <AdminDashboardLayout />,
  }

  static adminUsers = {
    path: "users",
    component: <AdminUsers />,
  }
  static adminAddUser = {
    path: "adminadduser",
    component: <AdminAddUser />,
  }
  static adminEditUsers = {
    path: "adminedituser/:id",
    component: <AdminEditUser />,
  }
  static adminUserDetails = {
    path: "adminuserDetails/:id",
    component: <AdminUserDetails />,
  }
  static adminContacts = {
    path: "adminContacts",
    component: <AdminContacts />,
  }
  static adminContactDetails = {
    path: "admincontactdetails/:id",
    component: <AdminContactDetails />,
  }
  static adminProducts = {
    path: "adminproducts",
    component: <AdminProducts />,
  }
  static adminAddProduct = {
    path: "adminaddproduct",
    component: <AdminAddproduct />,
  }
  static adminEditProducts = {
    path: "admineditproduct/:id",
    component: <AdminEditproduct />,
  }
  static adminProductDetails = {
    path: "adminproductDetails/:id",
    component: <AdminProductDetails />,
  }
  static adminOrders = {
    path: "adminorders",
    component: <AdminOrders />,
  }
  static adminOrderDetails = {
    path: "adminorderdetails/:id",
    component: <AdminOrderDetails />,
  }

  static NoPageRoute = {
    path: "*",
    component: <NoPage />,
  };
}
