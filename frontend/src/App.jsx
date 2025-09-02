import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./ui/components/layout/Footer.jsx";
import BasicLayout from "./ui/components/layout/BasicLayout.jsx";
import HomePage from "./ui/components/pages/HomePage.jsx";
import CompanyPage from "./ui/components/pages/CompanyPage.jsx";
import AdsPage from "./ui/components/pages/AdsPage.jsx";
import AppGrid from "./ui/components/jobAppComponents/AppGrid.jsx";
import JobAppsPage from "./ui/components/pages/JobAppsPage.jsx";

function App() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasicLayout/>}>
                    <Route index element={<HomePage/>}></Route>
                    <Route path="/companies" element={<CompanyPage/>}></Route>
                    <Route path="/ads" element={<AdsPage/>}></Route>
                    <Route path="/apps" element={<JobAppsPage/>}></Route>
                </Route>
            </Routes>

        </BrowserRouter>
    </>
  )
}

export default App
