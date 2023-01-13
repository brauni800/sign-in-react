import { ReactNode } from 'react'

interface PrivateRouteProps {
  children: ReactNode
}

export default function PrivateRoute ({ children }: PrivateRouteProps): JSX.Element {
  return (
    <div>PrivateRoute</div>
  )
}
