import { createBrowserRouter, RouterProvider } from "react-router-dom"

import RootLayout from "./pages/Root"
import EditEventPage from "./pages/EditEvent"
import EventDetailPage from "./pages/EventDetail"
import EventsPage from "./pages/Events"
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
      { path: "events", element: <EventsPage /> },
      { path: "editevents", element: <EditEventPage /> },
      { path: "newevent", element: <NewEventPage /> },
      { path: "event/: eventId", element: <EventDetailPage /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
