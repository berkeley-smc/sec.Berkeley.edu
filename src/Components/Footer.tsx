import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';
import * as React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <Box bg="#212121">
      <Container as={Stack} maxW={'6xl'} py={7} align={'center'}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr' }}
          spacing={9}>
          <Stack align={'flex-start'}>
            <Logo/>
            <Stack direction={'row'}>
              <Link href='https://nsf.gov/awardsearch/showAward?AWD_ID=2027260&HistoricalAwards=false'>
                <Image src='/images/NSFlogo.svg' boxSize='50px'/ >
              </Link>
              <Stack align={'flex-start'}>
                <Text variant="FootnoteBold"> NSF Grant </Text>
                <Link variant="footer" href={'#'}>
                  #2027260
                </Link>
              </Stack>
            </Stack>
            
          </Stack>
          <Stack align={'center'}>
            <Link href='https://www.issnationallab.org/'>
              <Image src='/images/ISSLogo.svg'/>
            </Link>
            
            <Link href='https://www.berkeley.edu'>
              <Image src='/images/berkeleylogo.svg'/>
            </Link> 
          </Stack>
          <Stack align={'flex-start'}>
            <Link variant="footerBold" href={'/'}> Home </Link>
            <Link variant="footer" href={'about_project'}>
              The Project
            </Link>
            <Link variant="footer" href={'about_team'}>
              The Team
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Link variant="footerBold" href={'/units'}> Curriculum </Link>
            <Link variant="footer" href={'/units'}>
              For Students
            </Link>
            <Link variant="footer" href={'/units'}>
              For teachers
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Link variant="footerBold" href={'/resources'}> 
              Resources 
            </Link>
            <Link variant="footer" href={'/'}>
              Live Data
            </Link>
            <Link variant="footer" href={'/contact'}>
              Contact Us
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Link href='https://webatberkeley.org/'>
              <Image src = '/images/WebDevCredit.svg'/>
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;