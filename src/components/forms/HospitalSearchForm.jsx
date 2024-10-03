import { Box, Button } from "@mui/material";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import AutocompleteInput from "../AutoCompleteInput";

const HospitalSearchForm = ({ bookedHospitals, setFilteredHospital }) => {
    const [searchValue, setSearchValue] = useState('')

    const handleFormSubmit = () => {
        if (!searchValue) {
            setFilteredHospital(bookedHospitals);
            return;
        }
        const filteredHospitals = bookedHospitals.filter((hospital) => (hospital['Provider ID'] === searchValue['Provider ID']));

        setFilteredHospital(filteredHospitals);
    }

    return (
        <Box sx={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
            <Box sx={{ flexGrow: 1 }}>
                <AutocompleteInput
                    name="City"
                    value={searchValue || ''}
                    setValue={setSearchValue}
                    data={bookedHospitals}
                    label={"Hospital Name"}
                    placeholder={"Search By Hospital"}
                    fullWidth
                />
            </Box>
            <Button variant="contained" startIcon={<FiSearch />} disabled={!searchValue} onClick={handleFormSubmit}>Search</Button>
        </Box>
    )
}

export default HospitalSearchForm