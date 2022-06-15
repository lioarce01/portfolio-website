import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {

  return (
      <Layout title='Weather App'>
          <Container>
              <Title>
                  Restaurant Pizza<Badge>2022</Badge>
              </Title>
              <P>
                  Restaurant ReactJS App
              </P>
              <List ml ={4} my={4}>
                  <ListItem>
                      <Meta>Website</Meta>
                      <Link href='https://lioarce-restaurant-react-app.vercel.app'>
                          Restaurant App  <ExternalLinkIcon mx='2px'/>
                      </Link>
                  </ListItem>
                  <ListItem>
                      <Meta>Github</Meta>
                      <Link href='https://github.com/lioarce01/pizza-restaurant-react-app'>
                          Github  <ExternalLinkIcon mx='2px'/>
                      </Link>
                  </ListItem>
                  <ListItem>
                      <Meta>Platform</Meta>
                      <span>Windows/macOS/iOS/Android</span>
                  </ListItem>
                  <ListItem>
                      <Meta>Stack</Meta>
                      <span>NodeJS, ReactJS, Styled Components</span>
                  </ListItem>
                  <br></br>
                  <WorkImage src="/images/works/thumPizza.png" alt="Restaurant App" />
              </List>
          </Container>
      </Layout>
  )
}

export default Work