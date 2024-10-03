import { Box, Button } from "@mui/material"
import { useState } from "react"
import AutocompleteInput from "../AutoCompleteInput";
import { FiSearch } from "react-icons/fi";

const HospitalSearchForm = ({ bookedHospitals, setFilteredHospital }) => {
    const [searchValue, setSearchValue] = useState('')

    console.log('bookedHospitals', bookedHospitals);

    const handleFormSubmit = () => {
        if (!searchValue) {
            setFilteredHospital(bookedHospitals);
            return;
        }
        console.log('search value', searchValue)
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