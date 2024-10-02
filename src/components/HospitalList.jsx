import { Box, Container, Typography } from "@mui/material"
import { MdOutlineVerified } from "react-icons/md";
import HospitalInfoCard from "./cards/HospitalInfoCard";
import Grid from '@mui/material/Grid2';

import ad from '../assets/images/ad.png'
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../data/constants";

const HospitalList = ({ state, city }) => {
    const [hospitals, setHospitals] = useState([
        {
            "Provider ID": "060010",
            "Hospital Name": "POUDRE VALLEY HOSPITAL",
            "Address": "1024 S LEMAY AVE",
            "City": "FORT COLLINS",
            "State": "Colorado",
            "ZIP Code": 80524,
            "County Name": "LARIMER",
            "Phone Number": 9704957000,
            "Hospital Type": "Acute Care Hospitals",
            "Hospital Ownership": "Voluntary non-profit - Private",
            "Emergency Services": "Yes",
            "Meets criteria for meaningful use of EHRs": "Y",
            "Hospital overall rating": 4,
            "Hospital overall rating footnote": "",
            "Mortality national comparison": "Same as the national average",
            "Mortality national comparison footnote": "",
            "Safety of care national comparison": "Above the national average",
            "Safety of care national comparison footnote": "",
            "Readmission national comparison": "Above the national average",
            "Readmission national comparison footnote": "",
            "Patient experience national comparison": "Above the national average",
            "Patient experience national comparison footnote": "",
            "Effectiveness of care national comparison": "Same as the national average",
            "Effectiveness of care national comparison footnote": "",
            "Timeliness of care national comparison": "Above the national average",
            "Timeliness of care national comparison footnote": "",
            "Efficient use of medical imaging national comparison": "Same as the national average",
            "Efficient use of medical imaging national comparison footnote": ""
        },
        {
            "Provider ID": "060126",
            "Hospital Name": "BANNER FORT COLLINS MEDICAL CENTER",
            "Address": "4700 LADY MOON DR",
            "City": "FORT COLLINS",
            "State": "Colorado",
            "ZIP Code": 80528,
            "County Name": "LARIMER",
            "Phone Number": 9708214000,
            "Hospital Type": "Acute Care Hospitals",
            "Hospital Ownership": "Voluntary non-profit - Other",
            "Emergency Services": "Yes",
            "Meets criteria for meaningful use of EHRs": "Y",
            "Hospital overall rating": "Not Available",
            "Hospital overall rating footnote": "There are too few measures or measure groups reported to calculate a star rating or measure group score",
            "Mortality national comparison": "Not Available",
            "Mortality national comparison footnote": "Results are not available for this reporting period",
            "Safety of care national comparison": "Not Available",
            "Safety of care national comparison footnote": "Results are not available for this reporting period",
            "Readmission national comparison": "Not Available",
            "Readmission national comparison footnote": "Results are not available for this reporting period",
            "Patient experience national comparison": "Not Available",
            "Patient experience national comparison footnote": "Results are not available for this reporting period",
            "Effectiveness of care national comparison": "Not Available",
            "Effectiveness of care national comparison footnote": "Results are not available for this reporting period",
            "Timeliness of care national comparison": "Above the national average",
            "Timeliness of care national comparison footnote": "",
            "Efficient use of medical imaging national comparison": "Not Available",
            "Efficient use of medical imaging national comparison footnote": "Results are not available for this reporting period"
        }
    ]);

    const fetchHospitals = async (state, city) => {
        try {
            const res = await axios.get(`${BASE_URL}/data?state=${state}&city=${city}`);

            return res.data;
        } catch (e) {
            console.error(e);
            return [];
        }
    }

    useEffect(() => {
        // (async () => {
        //     const data = await fetchHospitals(state, city);

        //     console.log('hospitals', data);
        //     if (data)
        //         setHospitals(data);
        // })()
    }, [state, city]);

    return (
        <Container sx={{
            display: 'block',
            py: 8
        }}>
            <Typography variant="subtitle1" color="black" fontWeight={500}>
                {hospitals.length} medical centers available in {city}
            </Typography>
            <Typography variant="subtitle2" color="#787887" fontWeight={400}>
                <MdOutlineVerified fontSize={20} color="black" style={{ verticalAlign: 'text-top', marginRight: 5 }} /> <span style={{ verticalAlign: 'text-bottom' }}>Book appointments with minimum wait-time & verified doctor details</span>
            </Typography>

            <Grid container spacing={2} mt={4}>
                <Grid item size={{ xs: 12, md: 8 }}>
                    <Box width='100%'>
                        {hospitals.length > 0 && hospitals.map((hospital) => (
                            <HospitalInfoCard key={hospital['Provider ID']} hospital={hospital} />
                        ))}
                    </Box>
                </Grid>
                <Grid item size={{ xs: 12, md: 4 }}>
                    <Box component='img' src={ad} alt="Ad" width={1}/>
                </Grid>
            </Grid>
        </Container >
    )
}

export default HospitalList