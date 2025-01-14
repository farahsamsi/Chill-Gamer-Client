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
import UpdateReview from "../Pages/UpdateReview";

const router = createBrowserRouter([
    {
        errorElement: <ErrorPage></ErrorPage>,
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-ten-server-iota-five.vercel.app/gameReviews/top-rated')
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

            },
            {
                path: '/reviewDetails/:id',
                element: <ReviewDetails></ReviewDetails>,
                loader: ({ params }) => {
                    return fetch(`https://assignment-ten-server-iota-five.vercel.app/gameReviews/${params.id}`)
                }
            },
            {
                path: '/updateReview/:id',
                element: <PrivateRoute>
                    <UpdateReview></UpdateReview>
                </PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`https://assignment-ten-server-iota-five.vercel.app/gameReviews/${params.id}`)
                }
            },
            {
                path: '/myReviews/:email',
                element: <PrivateRoute>
                    <MyReviews></MyReviews>
                </PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`https://assignment-ten-server-iota-five.vercel.app/gameReviews/email/${params.email}`)
                }
            },
            {
                path: '/myWatchlist/:email',
                element: <PrivateRoute>
                    <MyWatchlist></MyWatchlist>
                </PrivateRoute>,
                loader: async ({ params }) => {
                    return fetch(`https://assignment-ten-server-iota-five.vercel.app/watchList/email/${params.email}`)

                }
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