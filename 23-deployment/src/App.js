import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
// import PostPage, { loader as postLoader } from "./pages/Post";
// import BlogPage, { loader as postsLoader } from "./pages/Blog";

const postsLoader = () =>
  import("./pages/Blog").then((module) => module.loader());
const postLoader = (meta) =>
  import("./pages/Post").then((module) => module.loader(meta));

const BlogPage = lazy(() => import("./pages/Blog"));
const PostPage = lazy(() => import("./pages/Post"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<h1>Loading...</h1>}>
                <BlogPage />
              </Suspense>
            ),
            loader: postsLoader,
          },
          {
            path: ":id",
            element: (
              <Suspense fallback={<h1>Loading...</h1>}>
                <PostPage />
              </Suspense>
            ),
            loader: postLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
