import PublicRoutes from "./routes/PublicRoutes";
import AuthRoutes from "./routes/AuthRoutes";

function App() {

  return (
    <div className='bg-[#05050580]'>
      <PublicRoutes />
      <AuthRoutes />
    </div>
  )
}

export default App
