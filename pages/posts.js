import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg'
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg'
import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg'

const Posts = () => (
    <Layout title='Posts'>
        <Container>
            <Heading as='h4' fontSize={20} mb={4}>
                Popular Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid column={[1,2,2]} gap={6}>
                    <GridItem 
                        title='My Fish workflow' 
                        thumbnail={thumbFishWorkflow} 
                        href='https://www.youtube.com/'
                    />
                    <GridItem 
                        title='My Desk Setup' 
                        thumbnail={thumbMyDeskSetup} 
                        href='https://www.youtube.com/'
                    />
                    <GridItem 
                        title='500 Paid Users' 
                        thumbnail={thumb500PaidUsers} 
                        href='https://www.youtube.com/'
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts