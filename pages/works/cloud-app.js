import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {

  return (
      <Layout title='Music APP '>
          <Container>
              <Title>
                  Chat APP <Badge>2022</Badge>
              </Title>
              <P>
                  Cloud management concept app
              </P>
              <List ml ={4} my={4}>
                  <ListItem>
                      <Meta>Website</Meta>
                      <Link href='https://cloud-react-app-beta.vercel.app/'>
                          Cloud Management App  <ExternalLinkIcon mx='2px'/>
                      </Link>
                  </ListItem>
                  <ListItem>
                      <Meta>Github</Meta>
                      <Link href='https://github.com/lioarce01/cloud-react-app'>
                          Github  <ExternalLinkIcon mx='2px'/>
                      </Link>
                  </ListItem>
                  <ListItem>
                      <Meta>Platform</Meta>
                      <span>Windows/macOS/iOS/Android</span>
                  </ListItem>
                  <ListItem>
                      <Meta>Stack</Meta>
                      <span>NodeJS, ReactJS, TailwindCSS</span>
                  </ListItem>
                  <br></br>
                  <WorkImage src="src=/images/works/thumbCloud.png" alt="Cloud App" />
              </List>
          </Container>
      </Layout>
  )
}

export default Work