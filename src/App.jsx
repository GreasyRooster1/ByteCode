import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/Home/HomePage.jsx";
import EditorPage from "./Pages/Editor/EditorPage.jsx";
import LandingPage from "./Pages/Landing/LandingPage.jsx";
import LoadingTestPage from "./Pages/Loading/LoadingTestPage.jsx";
import AuthRedirectPage from "~/Pages/AuthRedirect/AuthRedirectPage.jsx";
import OrgAdmin from "~/Pages/OrgAdmin/OrgAdmin.jsx";


function App() {

  return (
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/loadingTest" element={<LoadingTestPage />} />
        <Route path="/__authRedirect" element={<AuthRedirectPage />} />

        <Route path="/org/admin" element={<OrgAdmin />} />
      </Routes>
  )
}

export default App
