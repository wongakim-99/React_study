import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Home from "./Home";

const Loading = <div>Loading...</div>;
const About = lazy(() => import("./About"));
const Profile = lazy(() => import("./Profile"));
const Article = lazy(() => import("./Article"));
const Articles = lazy(() => import("./Articles"));

const StudyRouter = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={Loading}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "profile/:username",
    element: (
      <Suspense fallback={Loading}>
        <Profile />
      </Suspense>
    ),
  },
  {
    path: "articles",
    element: (
      <Suspense fallback={Loading}>
        <Articles />
      </Suspense>
    ),
    children: [
      {
        path: ":id",
        element: (
          <Suspense fallback={Loading}>
            <Article />
          </Suspense>
        ),
      },
    ],
  },
]);

export default StudyRouter;
