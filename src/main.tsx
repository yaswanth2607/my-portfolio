import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import FullPageRenderer from "./components/FullPageRenderer";
import loading from "./assets/animation/loading.lottie";
import fullError from "./assets/animation/Full_error_Page.lottie";
import { ErrorBoundary } from "react-error-boundary";
import { store } from "./data/store";
import { Provider } from "react-redux";

const App = lazy(() => import("./App.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary fallback={<FullPageRenderer src={fullError} />}>
        <Suspense fallback={<FullPageRenderer src={loading} />}>
          <Provider store={store}>
            <App />
          </Provider>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
);
