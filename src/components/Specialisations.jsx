import { Button, useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useEffect, useState } from 'react';
import { FaUserDoctor } from 'react-icons/fa6';
import { LiaXRaySolid } from 'react-icons/lia';
import { LuTestTube2 } from 'react-icons/lu';
import { PiHeartbeatLight, PiShieldPlusLight, PiStethoscopeFill } from 'react-icons/pi';
import { RiHospitalLine } from 'react-icons/ri';
import { TbHeartRateMonitor } from 'react-icons/tb';
import IconCard from './cards/IconCard';

const Specialisations = () => {
    const data = [
        {
            id: 1,
            label: 'Dentistry',
            icon: <RiHospitalLine />
        },
        {
            id: 2,
            label: 'Primary Care',
            icon: <PiStethoscopeFill />
        },
        {
            id: 3,
            label: 'Cardiology',
            icon: <PiHeartbeatLight />
        },
        {
            id: 4,
            label: 'MRI Resonance',
            icon: <TbHeartRateMonitor />
        },
        {
            id: 5,
            label: 'Blood Test',
            icon: <LuTestTube2 />
        },
        {
            id: 6,
            label: 'Piscologist',
            icon: <PiShieldPlusLight />
        },
        {
            id: 7,
            label: 'Laboratory',
            icon: <RiHospitalLine />
        },
        {
            id: 8,
            label: 'X-Ray',
            icon: <LiaXRaySolid />
        },
        {
            id: 9,
            label: 'General Physician',
            icon: <FaUserDoctor />
        },
    ];

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const [isExpanded, setIsExpanded] = useState(false);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const maxElmOnCollapse = isDesktop ? 8 : (isTablet ? 6 : 3);
        if (isExpanded)
            setFilteredData(data);
        else
            setFilteredData(data.slice(0, maxElmOnCollapse));
    }, [isExpanded, isDesktop, isTablet]);

    return (
        <Grid width={'100%'} container spacing={2}>
            {filteredData.map((item) =>
                <Grid
                    key={item.id}
                    size={{ xs: 12, sm: 4, md: 3 }}
                    sx={{
                        display: 'flex',
                    }}
                >
                    <IconCard
                        icon={item.icon}
                        label={item.label}
                        elevation={0}
                        iconSize={"3.75rem"}
                        sx={{
                            flex: '1 1 0px'
                        }}
                        textSx={{
                            fontWeight: 500
                        }}
                    />
                </Grid>
            )}

            <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    variant='contained'
                    onClick={() => { setIsExpanded(!isExpanded) }}
                    sx={{ ms: 'auto', me: 'auto', px: 4, py: 1 }}
                    disableElevation
                >
                    {isExpanded ? 'Collapse' : 'View All'}
                </Button>
            </Grid>
        </Grid>
    )
}

export default Specialisations