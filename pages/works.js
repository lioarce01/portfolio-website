import { Container, Heading, SimpleGrid, Divider, Badge, Link, List, ListItem, } from '@chakra-ui/react'
import Section from '../components/section'
import  { WorkGridItem } from '../components/grid-item'
import thumbNetflix from '../public/images/works/thumbNetflix.png'
import thumbDAO from '../public/images/works/thumbDAO.webp'
import thumbSpotify from '../public/images/works/thumbSpotify.png'
import thumbChat from '../public/images/works/thumbChat.png'
import thumbCloud from '../public/images/works/thumbCloud.png'
import thumbDefi from '../public/images/works/thumbDefi.png'
import thumbCrypto from '../public/images/works/thumbCrypto.png'
import thumbEcommerce from '../public/images/works/thumbEcommerce.png'
import Layout from '../components/layouts/article'
import { Meta } from '../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as='h3' fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>

                <Section>
                    <WorkGridItem 
                        id="movie-app" 
                        title="Movie App" 
                        thumbnail={thumbNetflix}>
                        An application to watch movies, series, trends, the most watched, 
                        watch trailers, genres, make your own list, etc.
                    </WorkGridItem>
                </Section>
                {/*<Section>
                    <WorkGridItem
                        id="DAO"
                        title="DAO"
                        thumbnail={thumbDAO}
                    >
                        Basic Decentralized Autonomous Organization App to 
                        publish and invest in the projects that you see in the future, 
                        with a system of votes and requests
                    </WorkGridItem>
    </Section>*/}
                <Section>
                    <WorkGridItem 
                        id="music-app" 
                        title="Spotify API app" 
                        thumbnail={thumbSpotify}>
                        A music app using Spotify API for Developers. Use premium account to test.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem 
                        id="cloud-app" 
                        title="Cloud Management App" 
                        thumbnail={thumbCloud}>
                        Cloud management frontend web
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem 
                        id="defi-app" 
                        title="DeFi App" 
                        thumbnail={thumbDefi}>
                        DeFi trading frontend web
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem 
                        id="chat-app" 
                        title="Chat App" 
                        thumbnail={thumbChat}>
                        Chat App with basic functionalities.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem 
                        id="crypto-app" 
                        title="Crypto Tracker" 
                        thumbnail={thumbCrypto}>
                         A Cryptocurrency tracker.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem 
                        id="ecommerce-app" 
                        title="E-Commerce App" 
                        thumbnail={thumbEcommerce}>
                         A basic e-commerce with ecommerce.js
                    </WorkGridItem>
                </Section>

                </SimpleGrid> 
            </Container>
        </Layout>
    )
}

export default Works