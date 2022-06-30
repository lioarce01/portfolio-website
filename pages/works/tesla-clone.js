import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {

  return (
      <Layout title='Tesla Clone App'>
          <Container>
              <Title>
                  Tesla Clone Frontend App<Badge>2022</Badge>
              </Title>
              <P>
                  A Frontend Tesla Clone
              </P>
              <List ml ={4} my={4}>
                  <ListItem>
                      <Meta>Website</Meta>
                      <Link href='https://teslaclone-lioarce-reactapp.vercel.app'>
                          Tesla Website  <ExternalLinkIcon mx='2px'/>
                      </Link>
                  </ListItem>
                  <ListItem>
                      <Meta>Github</Meta>
                      <Link href='https://github.com/lioarce01/tesla-clone-react'>
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
                  <WorkImage src="/public/images/works/thumbTesla.png" alt="Tesla Website" />
              </List>
          </Container>
      </Layout>
  )
}

export default Work