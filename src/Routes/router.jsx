import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import AddReview from "../Pages/AddReview";
import AllReviews from "../Pages/AllReviews";
import MyReviews from "../Pages/MyReviews";
import MyWatchlist from "../Pages/MyWatchlist";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addReview',
                element: <AddReview></AddReview>
            },
            {
                path: '/allReviews',
                element: <AllReviews></AllReviews>
            },
            {
                path: '/myReviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/myWatchlist',
                element: <MyWatchlist></MyWatchlist>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router;