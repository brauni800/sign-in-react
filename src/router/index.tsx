import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from '../pages/Landing'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  }
])

export default function Router (): JSX.Element {
  return (
    <RouterProvider router={router} />
  )
}
