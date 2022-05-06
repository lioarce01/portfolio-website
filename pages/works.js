import { Container, Heading, SimpleGrid, Divider, Badge, Link, List, ListItem, } from '@chakra-ui/react'
import Section from '../components/section'
import  { WorkGridItem } from '../components/grid-item'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
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
            {/*<SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id='inkdrop' title='Inkdrop' thumbnail={thumbInkdrop}>
                        Texto
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id='walknote' title='walknote' thumbnail={thumbWalknote}>
                        Texto  
                    </WorkGridItem>
                </Section>
            </SimpleGrid> */}
            <List ml ={4} my={4}>
                  <Section>
                    <ListItem>
                        <Meta>Code</Meta>
                        <Link href='https://github.com/lioarce01/NFT-Marketplace'>
                            NFT Marketplace<ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NextJS, Solidity, Vercel</span>
                    </ListItem>
                    </Section>
                    <Section>
                        <ListItem>
                            <Meta>Code</Meta>
                                <Link href='https://github.com/lioarce01/ecommerce-blockchain-based'>
                                E-Commerse Blockchain Based<ExternalLinkIcon mx='2px'/>
                                </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack</Meta>
                            <span>NextJS, Solidity, Moralis, EthersJS, TailwindCSS</span>
                        </ListItem>
                    </Section>
                    <Section>
                        <ListItem>
                            <Meta>Code</Meta>
                            <Link href='https://github.com/lioarce01/CampaignFactory-Solidity'>
                          Basic DAO<ExternalLinkIcon mx='2px'/>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack</Meta>
                            <span>NextJS, Solidity, Web3JS, Semantic UI React</span>
                        </ListItem>
                    </Section>
                </List>
        </Container>
        </Layout>
    )
}

export default Works