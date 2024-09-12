import { Box, Button } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react"
import { BASE_URL } from "../../data/constants";
import AutocompleteInput from "../ui/AutocompleteInput";
import { FiSearch } from "react-icons/fi";

const LocationForm = () => {
    const [state, setState] = useState(null);
    const [city, setCity] = useState(null);

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
        }}
        >
            <Box sx={{ width: '50%' }}>
                <AutocompleteInput name="State" value={state} setValue={setState} fetchData={fetchStates} fullWidth />
            </Box>
            <Box sx={{ width: '50%' }}>
                <AutocompleteInput name="City" value={city} setValue={setCity} fetchData={fetchCities} fullWidth />
            </Box>
            <Button startIcon={<FiSearch />} disabled={!state || !city}>Search</Button>
        </Box>
    )
}

export default LocationForm