import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const Loading = <div>Loading...</div>;
const InputSample = lazy(() => import("./InputSample"));
const IterationSample = lazy(() => import("./IterationSample"));
const EffectVisible = lazy(() => import("./EffectVisible"));
// const IterationSampleVol3 = lazy(() => import("./IterationSampleVol3"));
// const IterationSampleVol4 = lazy(() => import("./IterationSampleVol4"));

const studyRouter = createBrowserRouter([
  {
    path: "study1",
    element: (
      <Suspense fallback={Loading}>
        <InputSample />
      </Suspense>
    ),
  },
  {
    path: "study2",
    element: (
      <Suspense fallback={Loading}>
        <IterationSample />
      </Suspense>
    ),
  },
  {
    path: "study3",
    element: (
      <Suspense fallback={Loading}>
        <EffectVisible />
      </Suspense>
    ),
  },
]);

export default studyRouter;
