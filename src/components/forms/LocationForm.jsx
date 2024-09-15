import { Box, Button } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react"
import { BASE_URL } from "../../data/constants";
import AutocompleteInput from "../AutoCompleteInput";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const LocationForm = () => {
    const [state, setState] = useState(null);
    const [city, setCity] = useState(null);
    const navigate = useNavigate();

    const fetchStates = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/states`);

            return res.data;
        } catch (e) {
            console.error('Failed to fetch states', e);
            return null;
        }
    }


    const fetchCities = async () => {
        if (!state)
            return [];

        try {
            const res = await axios.get(`${BASE_URL}/cities/${state}`);

            return res.data;
        } catch (e) {
            console.error('Failed to fetch cities', e);
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
        <Box sx={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
        }}
        >
            <Box sx={{ width: '50%' }}>
                <AutocompleteInput value={state} setValue={setState} fetchData={fetchStates} placeholder="State" fullWidth />
            </Box>
            <Box sx={{ width: '50%' }}>
                <AutocompleteInput value={city} setValue={setCity} fetchData={fetchCities} placeholder="City" fullWidth />
            </Box>
            <Button startIcon={<FiSearch />} disabled={!state || !city} onClick={handleFormSubmit}>Search</Button>
        </Box>
    )
}

export default LocationForm