import Grid from '@mui/material/Grid2';
import { FaUserDoctor } from 'react-icons/fa6';
import IconCard from './cards/IconCard';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { RiHospitalLine } from 'react-icons/ri';
import { PiHeartbeatLight, PiShieldPlusLight, PiStethoscopeFill } from 'react-icons/pi';
import { TbHeartRateMonitor } from 'react-icons/tb';
import { LuTestTube2 } from 'react-icons/lu';
import { LiaXRaySolid } from 'react-icons/lia';

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

    const [isExpanded, setIsExpanded] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const maxElmOnCollapse = 8

    useEffect(() => {
        if (isExpanded)
            setFilteredData(data);
        else
            setFilteredData(data.slice(0, maxElmOnCollapse));
    }, [isExpanded]);

    return (
        <Grid width={'100%'} container spacing={2}>
            {filteredData.map((item) =>
                <Grid
                    key={item.id}
                    size={3}
                    sx={{
                        display: 'flex',
                    }}
                >
                    <IconCard
                        icon={item.icon}
                        label={item.label}
                        elevation={0}   
                        iconSize={"3.75rem"}
                    />
                </Grid>
            )}

            <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    onClick={() => { setIsExpanded(!isExpanded) }}
                    sx={{ ms: 'auto', me: 'auto', px: 4, py: 1 }}
                >
                    {isExpanded ? 'Collapse' : 'View All'}
                </Button>
            </Grid>
        </Grid>
    )
}

export default Specialisations