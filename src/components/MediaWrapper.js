import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MediaItem from './MediaItem';

export default function MediaWrapper() {

    const allMediaData = useSelector(state => state.mediadataReducer.data);
    console.log('allMediaData', allMediaData);


    const medaiDataToShow = allMediaData.map((item, idx) => ({...item, id:idx+1 }));
    console.log('medaiDataToShow', medaiDataToShow);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

    return (
        <div>
            <Paper>
             <TableContainer>
                <Table aria-label="collapsible table">
                    <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>№</TableCell>
                        <TableCell>Conposition</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Teacher</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {medaiDataToShow ? 
                                medaiDataToShow
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((mediaItemData, idx) => (
                                    <MediaItem key={idx} index={idx} mediaItemData={mediaItemData} />
                                ))
                            :
                                "Error"
                            }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={allMediaData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </Paper>
        </div>
    )
}
