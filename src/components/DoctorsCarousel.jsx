import CustomCarousel from './CustomCarousel';
import doc1 from '../assets/images/docs/doc1.png'
import doc2 from '../assets/images/docs/doc2.png'
import doc3 from '../assets/images/docs/doc3.png'
import doc4 from '../assets/images/docs/doc4.png'
import doc5 from '../assets/images/docs/doc5.png'
import { Box, Typography } from '@mui/material';
import ImageCard from './cards/SingleImageCard';

const DoctorsCarousel = () => {
  const data = [
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
      image: doc4,
      name: 'Dr. Lesley Hull',
      spcacility: 'Medicine',
    },
    {
      image: doc5,
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
            {/* <DoctorCard image={doctor.image} alt={doctor.name} /> */}

            <ImageCard image={doctor.image} alt={doctor.name}
              imageSx={{
                background: 'linear-gradient(144.2deg, #E1F3FF 0%, #2AA7FF 100%)',
                pt: 2,
                px: 4,
                height: '24rem',
              }}

              elevation={1}
              sx={{
                width: "fit-content",
                height: '24rem',
                border: '0.5rem solid white',
                borderRadius: '100% 100% 0 0',
                boxShadow: '0px 15px 55px -10px #00000017',
              }}
            />

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