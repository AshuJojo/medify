import CustomCarousel from './CustomCarousel';
import doc1 from '../assets/images/docs/doc1.png'
import doc2 from '../assets/images/docs/doc2.png'
import doc3 from '../assets/images/docs/doc3.png'
import DoctorCard from './cards/DoctorCard';
import { Box, Typography } from '@mui/material';

const DoctorsCarousel = () => {
  const data = [
    {
      image: doc1,
      name: 'Dr. Lesley Hull',
      spcacility: 'Medicine',
    },
    {
      image: doc1,
      name: 'Dr. Ahmad Khan',
      spcacility: 'Neurologist',
    },
    {
      image: doc2,
      name: 'Dr. Heena Sachdeva',
      spcacility: 'Orthopadics',
    },
    {
      image: doc3,
      name: 'Dr. Ankur Sharma',
      spcacility: 'Medicine',
    },
    {
      image: doc3,
      name: 'Dr. Ahmad Stevens',
      spcacility: 'Neurologist',
    },
  ]

  const freeModeParams = {
    enabled: true,
    sticky: false
  }

  return (
    <CustomCarousel
      slidesPerView={4}
      spaceBetween={30}
      loop={true}
      freeMode={freeModeParams}
    >
      {data.map((doctor, idx) => {
        return (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 3
            }}
          >
            <DoctorCard image={doctor.image} alt={doctor.name} />
            <Box textAlign='center'>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 400,
                  color: 'primary.dark'
                }}
              >
                {doctor.name}
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 400,
                  color: 'primary.main'
                }}
              >
                {doctor.spcacility}
              </Typography>
            </Box>
          </Box>
        )
      })}
    </CustomCarousel>
  )
}

export default DoctorsCarousel