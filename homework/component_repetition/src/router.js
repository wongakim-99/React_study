import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const Loading = <div>Loading...</div>;
const IterationSampleVol1 = lazy(() => import("./IterationSampleVol1"));
const IterationSampleVol2 = lazy(() => import("./IterationSampleVol2"));
const IterationSampleVol3 = lazy(() => import("./IterationSampleVol3"));
const IterationSampleVol4 = lazy(() => import("./IterationSampleVol4"));

const studyRouter = createBrowserRouter([
  {
    path: "chaptersix_1",
    element: (
      <Suspense fallback={Loading}>
        <IterationSampleVol1 />
      </Suspense>
    ),
  },
  {
    path: "chaptersix_2",
    element: (
      <Suspense fallback={Loading}>
        <IterationSampleVol2 />
      </Suspense>
    ),
  },
  {
    path: "chaptersix_3",
    element: (
      <Suspense fallback={Loading}>
        <IterationSampleVol3 />
      </Suspense>
    ),
  },
  {
    path: "chaptersix_4",
    element: (
      <Suspense fallback={Loading}>
        <IterationSampleVol4 />
      </Suspense>
    ),
  },
]);

export default studyRouter;
