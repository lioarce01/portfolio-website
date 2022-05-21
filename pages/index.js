import NextLink from 'next/link'
import {
    Button, 
    Container, 
    Box,
    Heading,
    Image,
    Link,
    SimpleGrid,
    useColorModeValue,
    ListItem,
    List,
    Icon,
} from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import {
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoDiscord,
    IoLogoLinkedin
} from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
    <Container>
        <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mt={5} p={3} mb={6} align='center'>
            Hello, I&apos;m a Frontend developer based in Argentina!
        </Box>
        <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
                Lionel Arce
            </Heading>
            <p>Full-stack web developer</p>
            </Box>
            <Box 
                flexShrink={0} 
                mt={{base: 4, md: 0}} 
                ml={{md: 6}} 
                align='center'
                >
                {/*<Image 
                borderColor='whiteAlpha.800' 
                borderWidth={2} 
                borderStyle='solid' 
                maxWidth='100px' 
                display='inline-block' 
                borderRadius='full' 
                src='/images/takuya.jpg' 
                alt='Profile Image'
                />*/}
            </Box>
        </Box>

        <Section delay={0.1}>
            <Heading as='h3' variant='section-title'>
                Work
            </Heading>
            <Paragraph>
                Lionel Arce is a full-stack developer based in Argentina with a great passion 
                for designing and building websites. He is also very passionate about the crypto world 
                and decided to start studying blockchain development. Currently building projects for his 
                portfolio combining Frontend with blockchain technology.
            </Paragraph>
            <Box align='center' my={4}>
                <NextLink href='https://github.com/lioarce01'>
                    <Button rightIcon={<ChevronRightIcon/>} colorScheme='teal'>
                        My portfolio
                    </Button>
                </NextLink>
            </Box>
        </Section>
        <Section delay={0.2}>
            <Heading as='h3' variant='section-title'>
                Bio
            </Heading>
            <BioSection>
                <BioYear> 1999 </BioYear>
                Born in Buenos Aires, Argentina.
            </BioSection>
            <BioSection>
                <BioYear> 2020 </BioYear>
                Finished the Information Security Course at National Technology University.
            </BioSection>
            <BioSection>
                <BioYear> 2022 </BioYear>
                Finished Blockchain Developer with Solidity at Udemy.
            </BioSection>
            <BioSection>
                <BioYear> 2022 to present </BioYear>
                Studying Accounting at National University of La Matanza.
                Studying Fullstack Javascript and Blockchain Developer.
            </BioSection>
        </Section>
        <Section delay={0.3}>
            <Heading as='h3' variant='section-title'>
                Contact
            </Heading>
            <List>
                <ListItem>
                    <Link href='https://github.com/lioarce01' target='_blank'>
                        <Button 
                            variant='ghost' 
                            colorScheme='teal' 
                            leftIcon={<Icon as={IoLogoGithub}/>}
                            >
                            Github
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href='https://www.linkedin.com/in/lionel-arce-62b873177/' target='_blank'>
                        <Button 
                            variant='ghost' 
                            colorScheme='teal' 
                            leftIcon={<Icon as={IoLogoLinkedin}/>}
                            >
                            LinkedIn
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                        <Button 
                            variant='ghost' 
                            colorScheme='teal' 
                            leftIcon={<Icon as={IoLogoDiscord}/>}
                            >
                            Lzvick#5874
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href='https://www.instagram.com/lioarce_/' target='_blank'>
                        <Button 
                            variant='ghost' 
                            colorScheme='teal' 
                            leftIcon={<Icon as={IoLogoInstagram}/>}
                            >
                            Instagram
                        </Button>
                    </Link>
                </ListItem>
            </List>
        </Section>
    </Container>
    </Layout>
    )
}

export default Page