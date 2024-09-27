import IconCard from "./cards/IconCard"
import { FaRegHospital, FaUserDoctor } from "react-icons/fa6"
import { RiHospitalLine } from "react-icons/ri"
import { PiAmbulance, PiPillDuotone } from "react-icons/pi"
import { useEffect, useState } from "react"
import { alpha, Stack, useTheme } from '@mui/material';

const SearchRecommendation = () => {
    const theme = useTheme();

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
        <Stack direction="row" gap={2} flexWrap='wrap' justifyContent='center'>
            {recommendations.map((recommendation) => {
                return (
                    <IconCard
                        key={recommendation.id}
                        icon={recommendation.icon}
                        label={recommendation.label}
                        elevation={0}
                        iconColor={theme.palette.primary.main}
                        sx={{
                            minWidth: '9rem',
                            maxWidth: '12rem',
                            flex: '1 1 0px',
                            bgcolor: ((recommendation.id === selectedCardId) ? alpha(theme.palette.primary.main, 0.08) : '#FAFBFE'),
                            border: ((recommendation.id === selectedCardId) ? `1px solid ${theme.palette.primary.main}` : ''),
                        }}
                        textSx={{
                            color: ((recommendation.id === selectedCardId) ? '#2AA7FF' : ''),
                            fontWeight: ((recommendation.id === selectedCardId) ? 600 : 400),
                        }}
                        onClick={() => { setSelectedCardId(recommendation.id) }}
                    />
                )
            })}
        </Stack>
    )
}

export default SearchRecommendation