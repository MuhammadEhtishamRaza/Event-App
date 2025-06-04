import HomePage from "./pages/HomePage"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App