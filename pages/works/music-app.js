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
                  Music APP <Badge>2022</Badge>
              </Title>
              <P>
                  An application to play music from Spotify
              </P>
              <List ml ={4} my={4}>
                  <ListItem>
                      <Meta>Website</Meta>
                      <Link href='https://appmusic-spotify-api.vercel.app/'>
                          Movie App  <ExternalLinkIcon mx='2px'/>
                      </Link>
                  </ListItem>
                  <ListItem>
                      <Meta>Github</Meta>
                      <Link href='https://github.com/lioarce01/appmusic-spotify-api'>
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
                  <WorkImage src="/images/works/thumbSpotify.png" alt="MusicApp" />
              </List>
          </Container>
      </Layout>
  )
}

export default Work