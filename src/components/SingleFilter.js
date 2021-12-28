import { Autocomplete, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function SingleFilter({slug, placeholder, options, callback}) {

    const formatedOptions = options.map( option => typeof(option) === 'string' ? option : option + ' ' ).sort((a, b) => b - a)

    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e, newValue) => {
        setValue(newValue);
        callback(newValue);
    }

    return (
        <Autocomplete
            style={{ padding: 10 }}
            fullWidth
            value={value}
            onChange={handleChange}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            id={'select-' + slug}
            options={formatedOptions}
            renderInput={(params) => <TextField {...params} label={placeholder} />}
        >
        </Autocomplete>
    )
}
