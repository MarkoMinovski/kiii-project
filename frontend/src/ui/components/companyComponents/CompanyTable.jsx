import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const CompanyTable = (companiesWrapper) => {
    console.log(companiesWrapper);
    console.log("Inside CompanyTable")
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 850 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{  }} aria-label="simple table">
                            <TableCell sx={{textAlign: 'center', fontSize: 'h6.fontSize', fontWeight: 'bold'}}>
                                Company</TableCell>
                            <TableCell sx={{textAlign: 'center', fontSize: 'h6.fontSize', fontWeight: 'bold'}}>
                                Sector</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {companiesWrapper.companies.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{textAlign: 'center'}}>
                                    {row.name}
                                </TableCell>
                                <TableCell sx={{textAlign: 'center'}} >{row.sector}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default CompanyTable;
