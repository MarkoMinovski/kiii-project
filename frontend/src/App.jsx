import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./ui/components/layout/Footer.jsx";
import BasicLayout from "./ui/components/layout/BasicLayout.jsx";
import HomePage from "./ui/components/pages/HomePage.jsx";
import CompanyPage from "./ui/components/pages/CompanyPage.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasicLayout/>}>
                    <Route index element={<HomePage/>}></Route>
                    <Route path="/companies" element={<CompanyPage/>}></Route>
                </Route>
            </Routes>

        </BrowserRouter>
    </>
  )
}

export default App
