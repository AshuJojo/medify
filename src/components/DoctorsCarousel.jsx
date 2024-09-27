import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import doc1 from '../assets/images/docs/doc1.png';
import doc2 from '../assets/images/docs/doc2.png';
import doc3 from '../assets/images/docs/doc3.png';
import doc4 from '../assets/images/docs/doc4.png';
import doc5 from '../assets/images/docs/doc5.png';
import ImageCard from './cards/ImageCard';
import CustomCarousel from './CustomCarousel';

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

  const autoplayParams = {
    delay: 0,
  }

  const theme = useTheme();
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isTablet = useMediaQuery((theme.breakpoints.between('sm', 'md')));
  const slidesPerView = (isExtraLargeScreen ? 4 : (isLargeScreen ? 3 : (isTablet ? 2 : 1)));

  return (
    <CustomCarousel
      slidesPerView={slidesPerView}
      spaceBetween={30}
      loop={true}
      autoplay={autoplayParams}
      freeMode={freeModeParams}
      speed={5000}
    >
      {
        data.map((doctor, idx) => {
          return (

            <Stack key={idx} direction='column' spacing={3}>

              <ImageCard image={doctor.image} alt={doctor.name}
                imageSx={{
                  background: 'linear-gradient(144.2deg, #E1F3FF 0%, #2AA7FF 100%)',
                  pt: 4,
                  height: '22rem',
                }}

                elevation={1}
                sx={{
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
            </Stack>
          )
        })
      }
    </CustomCarousel >
  )
}

export default DoctorsCarousel