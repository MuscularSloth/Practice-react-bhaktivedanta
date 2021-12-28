import React, { useEffect, useState } from 'react';
import SingleFilter from './SingleFilter';
import moment from 'moment';
import { Box } from '@mui/system';

export default function FiltersWrapper({setSelectedTeacher, setSelectedYear, setSelectedComposition, setSelectedTheme, allMediaData}) {

    const [filterTeacherData, setfilterTeacherData] = useState([])
    const [filterYearData, setfilterYearData] = useState([])
    const [filterCompositionData, setfilterCompositionData] = useState([])
    const [filterThemeData, setfilterThemeData] = useState([])

    useEffect(() => {
        const allTeachers = [];
        const allDates = [];
        const allCompositions = [];
        const allThemes = [];
        
        allMediaData.forEach(media => {
            if(media.teacher.name){
                allTeachers.push(media.teacher.name)
            }
            if(media.date){
                allDates.push(media.date)
            }
            if(media.composition){
                allCompositions.push(media.composition)
            }
            if(media.tags.length > 0){
                media.tags.forEach( tag => tag && allThemes.push(tag))
            }
        });
        
        const uniqTeachers = [...new Set(allTeachers)];
        const uniqYears = [...new Set(allDates.map(date => moment(date, "DD.MM.YYYY").year()))];
        const uniqCompositions = [...new Set(allCompositions)];
        const uniqThemes = [...new Set(allThemes)];

        setfilterTeacherData(uniqTeachers)
        setfilterYearData(uniqYears)
        setfilterCompositionData(uniqCompositions)
        setfilterThemeData(uniqThemes)

    }, [allMediaData])

    return (
        <Box sx={{ display: 'flex'}}>
            <SingleFilter slug='Composition' placeholder='Произведение' options={filterCompositionData} callback={setSelectedComposition}/>
            <SingleFilter slug='Teacher' placeholder='Лектор' options={filterTeacherData} callback={setSelectedTeacher}/>
            <SingleFilter slug='Year' placeholder='Год' options={filterYearData} callback={setSelectedYear}/>
            <SingleFilter slug='Theme' placeholder='Тема' options={filterThemeData} callback={setSelectedTheme} />
        </Box>
    )
}
