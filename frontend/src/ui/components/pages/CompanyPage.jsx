import UseCompanies from "../../../hooks/UseCompanies.js";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {CircularProgress} from "@mui/material";
import CompanyTable from "../companyComponents/CompanyTable.jsx";


const CompanyPage = () => {
    const {companies, loading} = UseCompanies();
    console.log(companies);
    console.log(loading);
    return (
        <>
            <Box>
                {loading && (
                    <Box className="progress-box">
                        <CircularProgress/>
                    </Box>
                )}
                {(!loading && companies.length > 0) && (
                    <>
                        <CompanyTable companies={companies}></CompanyTable>
                    </>
                )}
            </Box>
        </>
    )
}

export default CompanyPage;
