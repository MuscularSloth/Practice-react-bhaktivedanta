import { Avatar, Box, Collapse, IconButton, TableCell, TableRow } from '@mui/material';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function MediaItem({mediaItemData, index}) {


    const [open, setOpen] = useState(false);


    return (
        <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
            <TableCell style={{ width: 50 }}>
            <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
            >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            </TableCell>
            {/* <TableCell style={{ width: 50 }}>
            {mediaItemData.id}
            </TableCell> */}
            <TableCell>{mediaItemData.composition}</TableCell>
            <TableCell>{mediaItemData.page}</TableCell>
            <TableCell style={{ width: 250 }} >{mediaItemData.date}</TableCell>
            <TableCell style={{ width: 250 }}>
                <Box style={{display: 'flex', alignItems: 'center'}}>
                    <Avatar style={{ marginRight: 20}} alt={mediaItemData.teacher.name} src={mediaItemData.teacher.photo} />
                    {mediaItemData.teacher.name}
                </Box>
            </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
            <AudioPlayer
                src={mediaItemData.file}
            />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
        </React.Fragment>
    )
}
