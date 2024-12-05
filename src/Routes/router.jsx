import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import AddReview from "../Pages/AddReview";
import AllReviews from "../Pages/AllReviews";
import MyReviews from "../Pages/MyReviews";
import MyWatchlist from "../Pages/MyWatchlist";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import ReviewDetails from "../Pages/ReviewDetails";

const router = createBrowserRouter([
    {
        errorElement: <ErrorPage></ErrorPage>,
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-ten-server-iota-five.vercel.app/gameReviews')
            },
            {
                path: '/addReview',
                element: <PrivateRoute>
                    <AddReview></AddReview>
                </PrivateRoute>
            },
            {
                path: '/allReviews',
                element: <AllReviews></AllReviews>,
                loader: () => fetch('https://assignment-ten-server-iota-five.vercel.app/gameReviews')
            },
            {
                path: '/reviewDetails/:id',
                element: <ReviewDetails></ReviewDetails>,
                loader: ({ params }) => {
                    return fetch(`https://assignment-ten-server-iota-five.vercel.app/gameReviews/${params.id}`)
                }
            },
            {
                path: '/myReviews/:email',
                element: <PrivateRoute>
                    <MyReviews></MyReviews>
                </PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await fetch('https://assignment-ten-server-iota-five.vercel.app/gameReviews')
                    const data = await res.json();
                    const filterData = data.filter(d => d.userEmail == params.email)
                    // console.log(filterData)
                    return filterData;
                }
            },
            {
                path: '/myWatchlist',
                element: <PrivateRoute>
                    <MyWatchlist></MyWatchlist>
                </PrivateRoute>
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