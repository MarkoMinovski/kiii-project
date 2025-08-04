import useCompanies from "../../../hooks/UseCompanies.js";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {CircularProgress} from "@mui/material";
import CompanyTable from "../companyComponents/CompanyTable.jsx";


const CompanyPage = () => {
    const {companies, loading} = useCompanies();

    return (
        <>
            <Box>
                {loading && (
                    <Box className="progress-box">
                        <CircularProgress/>
                    </Box>
                )}
                {!loading &&
                    <>
                        <CompanyTable companies={companies}></CompanyTable>
                    </>
                }
            </Box>
        </>
    )
}

export default CompanyPage;
