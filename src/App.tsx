import { RouterProvider } from "react-router"
import {createBrowserRouter } from "react-router-dom"

function App() {

  const router = createBrowserRouter(
    [
      { path: "/", element: <>Home page...</> },
      { path: "/projects", element: <>Projects page...</> },
      { path: "/projects/:id", element: <>Project dedicated page...</> },
      { path: "/labs", element: <>Labs page...</> },
      { path: "/labs/:id", element: <>Lab dedicated page...</> },
      { path: "/blog", element: <>Blog page...</> },
      { path: "/blog/:slug", element: <>Blog dedicated page...</> },
    ]
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
