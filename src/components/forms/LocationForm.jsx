import { Box, Button, Stack } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react"
import { BASE_URL } from "../../data/constants";
import AutocompleteInput from "../AutoCompleteInput";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const LocationForm = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [state, setState] = useState(null);
    const [city, setCity] = useState(null);
    const navigate = useNavigate();

    const fetchStates = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/states`);

            return res.data;
        } catch (e) {
            if (e.code === "ERR_NETWORK") {
                enqueueSnackbar('Please check your internet connection', { variant: 'warning' })
            }

            enqueueSnackbar('Some error occurred.', { variant: 'error' })

            return null;
        }
    }


    const fetchCities = async () => {
        if (!state) {
            enqueueSnackbar('Please select a state first.', { variant: 'warning' })
            return [];
        }

        try {
            const res = await axios.get(`${BASE_URL}/cities/${state}`);

            return res.data;
        } catch (e) {
            if (e.code === "ERR_NETWORK") {
                enqueueSnackbar('Please check your internet connection', { variant: 'warning' })
            }

            enqueueSnackbar('Some error occurred.', { variant: 'error' })

            return null;
        }
    }

    const handleFormSubmit = () => {
        if (!state || !city)
            return;

        console.log("navigatet")

        navigate(`/hospitals?state=${state}&city=${city}`);
    }

    useEffect(() => {
        if (!state)
            setCity(null);
    }, [state])

    return (
        // <Box sx={{
        //     display: 'flex',
        //     gap: '1rem',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     width: '100%',
        // }}
        // >
        //     <Box sx={{ width: '50%' }}>
        //         <AutocompleteInput value={state} setValue={setState} fetchData={fetchStates} placeholder="State" fullWidth />
        //     </Box>
        //     <Box sx={{ width: '50%' }}>
        //         <AutocompleteInput value={city} setValue={setCity} fetchData={fetchCities} placeholder="City" fullWidth />
        //     </Box>
        //     <Button startIcon={<FiSearch />} disabled={!state || !city} onClick={handleFormSubmit}>Search</Button>
        // </Box>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <AutocompleteInput value={state} setValue={setState} fetchData={fetchStates} placeholder="State" fullWidth />
            <AutocompleteInput value={city} setValue={setCity} fetchData={fetchCities} placeholder="City" fullWidth />
            <Button
                variant="contained"
                startIcon={<FiSearch />}
                disabled={!state || !city}
                onClick={handleFormSubmit}
                sx={{
                    minWidth: {
                        xs: '100%',
                        sm: 'auto'
                    }
                }}
                disableElevation
            >
                Search
            </Button>
        </Stack>
    )
}

export default LocationForm