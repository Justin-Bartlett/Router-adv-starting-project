import { createBrowserRouter, RouterProvider } from "react-router-dom"

import RootLayout from "./pages/Root"
import EditEventPage from "./pages/EditEvent"
import EventDetailPage from "./pages/EventDetail"
import EventsPage, { loader as eventsLoader } from "./pages/Events"
import HomePage from "./pages/Home"
import NewEventPage from "./pages/NewEvent"
import ErrorPage from "./pages/Error"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsPage />,
        loader: eventsLoader,
      },
      { path: "events/:eventId", element: <EventDetailPage /> },
      { path: "events/new", element: <NewEventPage /> },
      { path: "events/:eventId/edit", element: <EditEventPage /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
