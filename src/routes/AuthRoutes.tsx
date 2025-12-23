import { Navigate, Route, Routes } from 'react-router-dom'
// import Admin from '../pages/Admin'

export default function AuthRoutes() {
  const isAuthenticated = false

  return (
    <Routes>
      {isAuthenticated ? (
        <Route path="/admin" element={(
          <div>Admin</div>
        )} />
      ) : (
        <Route path="/admin" element={<Navigate to="/" />} />
      )}
    </Routes>
  )
}