import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Alert from '@mui/material/Alert';

export default function SearchBox({ onSearch }) {
    const [city, setCity] = useState('');
    const [error, setError] = useState('');

    //todo: City logic -
    const handleSearch = () => {
        const result = city.trim();
        if (!result) {
            setError('Input field is empty. Please Enter City name.')
        } else if (!/^[a-zA-Z\s]+$/.test(result)) {
            setError('Invalid Characters! Enter Alphabetic City name.')
        } else {
            console.log('City Name: ', result);
            onSearch(result);
            setCity('')
        }
        setTimeout(() => setError(''), 2000);
    }

    //todo: Keyboard Press Key -
    const handlePressKey = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <>
            < Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    width: '100%',
                    maxWidth: { xs: '100%', sm: '400px', md: '500px', lg: '600px' },
                    mx: 'auto',
                    p: { xs: 1, sm: 2 },
                }
                }
            >
                <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField
                    label="Enter City Name"
                    variant="standard"
                    fullWidth
                    value={city}
                    onChange={(e) => {
                        setCity(e.target.value)
                    }}
                    onKeyDown={handlePressKey}
                />
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ ml: 2, textTransform: 'none' }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box >

            {error && (<Alert variant="filled" severity="error">
                {error}
            </Alert>)}
        </>
    );
}
