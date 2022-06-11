import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {

  return (
      <Layout title='Ecommerce APP '>
          <Container>
              <Title>
                  E-Commerce React App<Badge>2022</Badge>
              </Title>
              <P>
                  A basic e-commerce app with ecommerce.js
              </P>
              <List ml ={4} my={4}>
                  <ListItem>
                      <Meta>Website</Meta>
                      <Link href='https://mystore-with-commercejs.vercel.app'>
                          E-Commerce  <ExternalLinkIcon mx='2px'/>
                      </Link>
                  </ListItem>
                  <ListItem>
                      <Meta>Github</Meta>
                      <Link href='https://github.com/lioarce01/e_commerce-react'>
                          Github  <ExternalLinkIcon mx='2px'/>
                      </Link>
                  </ListItem>
                  <ListItem>
                      <Meta>Platform</Meta>
                      <span>Windows/macOS/iOS/Android</span>
                  </ListItem>
                  <ListItem>
                      <Meta>Stack</Meta>
                      <span>NodeJS, ReactJS, Material-UI</span>
                  </ListItem>
                  <br></br>
                  <WorkImage src="/images/works/thumbEcommerce.png" alt="Ecommerce App" />
              </List>
          </Container>
      </Layout>
  )
}

export default Work