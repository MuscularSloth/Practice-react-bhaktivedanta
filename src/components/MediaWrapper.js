import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FiltersWrapper from './FiltersWrapper';
import MediaItem from './MediaItem';

export default function MediaWrapper() {

    const allMediaData = useSelector(state => state.mediadataReducer.data);
    // console.log('allMediaData', allMediaData);

    const [formatedMediaData, setFormatedMediaData] = useState([])
    const [medaiDataToShow, setMedaiDataToShow] = useState([])
    
    useEffect(()=>{
        setMedaiDataToShow(formatedMediaData)
    }, [formatedMediaData])

    useEffect(()=>{
        setFormatedMediaData(allMediaData.map((item, idx) => ({...item, id:idx+1 })))
    }, [allMediaData])
    
    

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedComposition, setSelectedComposition] = useState(null);
    const [selectedTheme, setSelectedTheme] = useState(null);

    useEffect(() => {
        // console.log('selectedTeacher >>> ', selectedTeacher);
        // console.log('selectedYear >>> ', selectedYear);
        // console.log('selectedComposition >>> ', selectedComposition);
        // console.log('selectedTheme >>> ', selectedTheme);

        let filteredMediaData = formatedMediaData;

        if(selectedComposition){
            filteredMediaData = filteredMediaData.filter(item => item.composition.includes(selectedComposition))
        }

        if(selectedTeacher){
            filteredMediaData = filteredMediaData.filter(item => item.teacher.name.includes(selectedTeacher))
        }

        if(selectedYear){
            filteredMediaData = filteredMediaData.filter(item => item.date.includes(selectedYear.trim()))
        }

        if(selectedTheme){
            filteredMediaData = filteredMediaData.filter(item => item.tags.some( tag => tag.includes(selectedTheme)))
            console.log('filteredMediaData >>> ', filteredMediaData);
        }

        setMedaiDataToShow(filteredMediaData);

    }, [selectedTeacher, selectedYear, selectedComposition, selectedTheme])




    return (
        <div>
            <Paper sx={{marginTop: 2, marginBottom: 2}}>
                <FiltersWrapper 
                    setSelectedTeacher={setSelectedTeacher} 
                    setSelectedYear={setSelectedYear}
                    setSelectedComposition={setSelectedComposition}
                    setSelectedTheme={setSelectedTheme}
                    
                    allMediaData={allMediaData} 
                />
            </Paper>
            <Paper>
             <TableContainer>
                <Table aria-label="collapsible table">
                    <TableHead>
                    <TableRow>
                        <TableCell />
                        {/* <TableCell>№</TableCell> */}
                        <TableCell>Conposition</TableCell>
                        <TableCell>Part</TableCell>
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
                count={medaiDataToShow.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </Paper>
        </div>
    )
}
