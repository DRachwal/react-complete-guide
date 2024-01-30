import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Event, { eventLoader } from "./pages/Event";
import NewEvent, { action as addEventAction } from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import EventsLayout from "./pages/EventsLayout";
import { eventsLoader } from "./components/EventsList";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <EventsLayout />,
        children: [
          {
            path: "",
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: ":id",
            element: <Event />,
            loader: eventLoader,
          },
          {
            path: "new",
            element: <NewEvent />,
            action: addEventAction,
          },
          {
            path: ":id/edit",
            element: <EditEvent />,
            loader: eventLoader,
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
