import { FC, lazy, useContext } from "react";

import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import { CartContext, UserContext } from "@/context";
import { PrivateRoute } from "@/components/auth";
import { Navbar } from "@/components";
// import { Box } from "@chakra-ui/react";

// Lazy load components
const AdminNavbar = lazy(() => import("@/components/admin/Navbar"));
const LoggedUserRedirect = lazy(
    () => import("@/components/auth/LoggedUserRedirect")
);
// const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));
// const FloatButton = lazy(() => import("@/components/Floatbutton"));
// const Footer = lazy(() => import("@/components/Footer"));
const LoggedUserNavbar = lazy(() => import("@/components/ui/LoggedUserNavbar"));
const ModNavbar = lazy(() => import("@/components/ui/ModNavbar"));

// Public routes
const Home = lazy(() => import("@/pages/home/Home"));
const Products = lazy(() => import("@/pages/products/Products"));
const Payment = lazy(() => import("@/pages/Succes/page"));
// src/pages/Succes/page.tsx
const Product = lazy(() => import("@/pages/products/Product"));
const Cart = lazy(() => import("@/pages/cart/Cart"));
const Contact = lazy(() => import("@/pages/contact/Contact"));
const PrivacyPolicy = lazy(() => import("@/pages/privacyPolicy/PrivacyPolicy"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Checkout = lazy(() => import("@/pages/checkout/Checkout"));
const Faqs = lazy(() => import("@/pages/faqs/index"));
const Questions = lazy(() => import("@/pages/questions/index"));
const PublicBlog = lazy(() => import("@/pages/admin/blog/ShowSectionUser"));
const PublicBlogDescroption = lazy(() => import("@/pages/admin/blog/DescriptionUser"));
const PublicBlogDescroptionNew = lazy(() => import("@/pages/admin/blog/newblog/DescriptionBlog"));

// Normal user routes
const UserProfile = lazy(() => import("@/pages/user/UserProfile"));
const UserInformation = lazy(() => import("@/pages/user/UserInformation"));
const Security = lazy(() => import("@/pages/user/security/Security"));
const Addresses = lazy(() => import("@/pages/user/address/Addresses"));

// Admin routes
const AddProduct = lazy(() => import("@/pages/admin/addProduct/AddProduct"));
const Dashboard = lazy(() => import("@/pages/admin/dashboard/Dashboard"));
const AdminProducts = lazy(() => import("@/pages/admin/products/Products"));
const Users = lazy(() => import("@/pages/admin/users/Users"));
const Backups = lazy(() => import("@/pages/admin/backups/Backups"));
const Encuestas = lazy(() => import("@/pages/admin/encuestas/Encuestas"));
const Comentarios = lazy(() => import("@/pages/admin/comentarios/page"));
const BlogAdminCreate = lazy(() => import("@/pages/admin/blog/CreateSection"));
const BlogAdminShow = lazy(() => import("@/pages/admin/blog/ShowSecttionAdmin"));
const BlogAdminUpdate = lazy(() => import("@/pages/admin/blog/UpdateSection"));
// const BlogAdminDescription = lazy(() => import("@/pages/admin/blog/DescriptionAdmin"));

const NavbarRenderer: FC = (): JSX.Element => {
    const { user, userRole } = useContext(UserContext);
    
    if (user) {
        if (userRole === "admin") return <AdminNavbar isUser={user} />;
        if (userRole === "user") return <LoggedUserNavbar />;
        if (userRole === "moderator") return <ModNavbar />;
    }

    return <Navbar />;
};

export const App: FC = (): JSX.Element => {
    const { cart } = useContext(CartContext);

    // const { pathname } = useLocation();

    return (
        <>
            
            {/* <Box id="router"> */}
                <Routes>
                    <Route element={<NavbarRenderer />}>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<LoggedUserRedirect />} />
                    <Route path="/signup" element={<LoggedUserRedirect />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/successPayment" element={<Payment />} />
                    <Route path="/products/:id" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/faqs" element={<Faqs />} />
                    <Route path="/questions" element={<Questions />} />
                    <Route path="/blog" element={<PublicBlog />} />
                    <Route path="/blog-description" element={<PublicBlogDescroption />} />
                    <Route path="/blog-description-new" element={<PublicBlogDescroptionNew />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/checkout" element={cart.length < 1 ? <Navigate to="/cart" /> : <Checkout />} />

                    <Route path="/user/profile" element={
                        <PrivateRoute allowedRoles="user">
                            <Outlet />
                        </PrivateRoute>
                    }
                    >
                        <Route
                            path=":uid"
                            element={
                                <PrivateRoute allowedRoles="user">
                                    <UserProfile />
                                    <Outlet />
                                </PrivateRoute>
                            }
                        />
                        <Route path=":uid/information" element={<UserInformation />} />
                        <Route path=":uid/security" element={<Security />} />
                        <Route path=":uid/purchases" element={<UserInformation />} />
                        <Route path=":uid/payments" element={<UserInformation />} />
                        <Route path=":uid/addresses" element={<Addresses />} />
                    </Route>

                    <Route
                        path="/admin"
                        element={
                            <PrivateRoute allowedRoles="admin">
                                <Outlet />
                            </PrivateRoute>
                        }
                    >
                        <Route
                            path="backups"
                            element={
                                <PrivateRoute allowedRoles="admin">
                                    <Backups />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="encuestas"
                            element={
                                <PrivateRoute allowedRoles="admin">
                                    <Encuestas />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="comentarios"
                            element={
                                <PrivateRoute allowedRoles="admin">
                                    <Comentarios />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="blog-create"
                            element={
                                <PrivateRoute allowedRoles="admin">
                                    <BlogAdminCreate />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="blog-show"
                            element={
                                <PrivateRoute allowedRoles="admin">
                                    <BlogAdminShow />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="blog-update"
                            element={
                                <PrivateRoute allowedRoles="admin">
                                    <BlogAdminUpdate />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="blog-description-new"
                            element={
                                <PrivateRoute allowedRoles="admin">
                                    <PublicBlogDescroptionNew />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="add"
                            element={
                                <PrivateRoute allowedRoles="admin">
                                    <AddProduct />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="dashboard"
                            element={
                                <PrivateRoute allowedRoles="admin">
                                    <Dashboard />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="products"
                            element={
                                <PrivateRoute allowedRoles="admin">
                                    <AdminProducts />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="products/:id"
                            element={
                                <PrivateRoute allowedRoles="admin">
                                    <AdminProducts />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="user"
                            element={
                                <PrivateRoute allowedRoles="admin">
                                    <Users />
                                </PrivateRoute>
                            }
                        />

                        <Route path="/admin/" element={<NotFound />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
            {/* </Box> */}


        </>
    );
};