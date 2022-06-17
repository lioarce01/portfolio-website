import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {

  return (
      <Layout title='Twitch App'>
          <Container>
              <Title>
                  Twitch NextJS App<Badge>2022</Badge>
              </Title>
              <P>
                  Twitch clone with NextJS.
              </P>
              <List ml ={4} my={4}>
                  <ListItem>
                      <Meta>Website</Meta>
                      <Link href='https://twitch-next-app.vercel.app'>
                          Twitch App  <ExternalLinkIcon mx='2px'/>
                      </Link>
                  </ListItem>
                  <ListItem>
                      <Meta>Github</Meta>
                      <Link href='https://github.com/lioarce01/twitch-next-app'>
                          Github  <ExternalLinkIcon mx='2px'/>
                      </Link>
                  </ListItem>
                  <ListItem>
                      <Meta>Platform</Meta>
                      <span>Windows/macOS/iOS/Android</span>
                  </ListItem>
                  <ListItem>
                      <Meta>Stack</Meta>
                      <span>NodeJS, NextJS, TailwindCSS</span>
                  </ListItem>
                  <br></br>
                  <WorkImage src="/public/images/works/thumbTwitch.png" alt="Twitch App" />
              </List>
          </Container>
      </Layout>
  )
}

export default Work