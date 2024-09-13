import Grid from '@mui/material/Grid2';
import IconCard from "./cards/IconCard"
import { FaRegHospital, FaUserDoctor } from "react-icons/fa6"
import { RiHospitalLine } from "react-icons/ri"
import { PiAmbulance, PiPillDuotone } from "react-icons/pi"
import { useEffect, useState } from "react"

const SearchRecommendation = () => {
    const [selectedCardId, setSelectedCardId] = useState(3);

    const recommendations = [
        {
            id: 1,
            label: 'Doctors',
            icon: <FaUserDoctor />
        },
        {
            id: 2,
            label: 'Labs',
            icon: <RiHospitalLine />
        },
        {
            id: 3,
            label: 'Hospitals',
            icon: <FaRegHospital />
        },
        {
            id: 4,
            label: 'Medical Store',
            icon: <PiPillDuotone />
        },
        {
            id: 5,
            label: 'Ambulance',
            icon: <PiAmbulance />
        },
    ];

    useEffect(() => {
        console.log('selectedCard ', selectedCardId);
    }, [selectedCardId]);

    return (
        <Grid
            container
            spacing={2}
            width='100%'
        >
            {recommendations.map((recommendation) => {
                return (
                    <Grid
                        size={2}
                        sx={{
                            display: 'flex',
                        }}
                        key={recommendation.id}
                        flexGrow={1}
                    >
                        <IconCard
                            icon={recommendation.icon}
                            label={recommendation.label}
                            elevation={0}
                            sx={{
                                flexGrow: 1,
                                bgcolor: ((recommendation.id === selectedCardId) ? '#2aa6ff14' : '#FAFBFE'),
                                border: ((recommendation.id === selectedCardId) ? '1px solid #2AA7FF' : ''),
                            }}
                            onClick={() => { setSelectedCardId(recommendation.id) }}
                        />
                    </Grid>
                )
            }
            )}
        </Grid>
    )
}

export default SearchRecommendation