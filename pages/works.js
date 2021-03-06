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
import thumbWeather from '../public/images/works/thumbWeather.png'
import thumbPizza from '../public/images/works/thumbPizza.png'
import thumbTwitch from '../public/images/works/thumbTwitch.png'
import thumbFinance from '../public/images/works/thumbFinance.png'
import thumbTesla from '../public/images/works/thumbTesla.png'
import thumbCryptoYield from '../public/images/works/thumbCryptoYield.png'
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
                        id="crypto-app" 
                        title="Crypto Tracker" 
                        thumbnail={thumbCrypto}>
                         Cryptocurrency tracker.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem 
                        id="weather-app" 
                        title="Weather App" 
                        thumbnail={thumbWeather}>
                         React Weather App
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem 
                        id="restaurant-app" 
                        title="Pizza Restaurant App" 
                        thumbnail={thumbPizza}>
                         Frontend Restaurant React App
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem 
                        id="twitch-app" 
                        title="Twitch App" 
                        thumbnail={thumbTwitch}>
                         Twitch clone with NextJS
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem 
                        id="finance-app" 
                        title="Data Finance App" 
                        thumbnail={thumbFinance}>
                         Data Finance Web with ReactJS
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem 
                        id="tesla-clone" 
                        title="Tesla Clone App" 
                        thumbnail={thumbTesla}>
                         Tesla Clone Web with ReactJS
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem 
                        id="crypto-yield"
                        title="Crypto Web App" 
                        thumbnail={thumbCryptoYield}>
                         Frontend Crypto Web
                    </WorkGridItem>
                </Section>
                </SimpleGrid> 
            </Container>
        </Layout>
    )
}

export default Works