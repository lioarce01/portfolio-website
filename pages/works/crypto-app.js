import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {

  return (
      <Layout title='Crypto Hunter'>
          <Container>
              <Title>
                  Crypto Tracker <Badge>2022</Badge>
              </Title>
              <P>
                  App to see cryptocurrency information, in real time prices, charts.
              </P>
              <List ml ={4} my={4}>
                  <ListItem>
                      <Meta>Website</Meta>
                      <Link href='https://crypto-hunter-app.vercel.app/'>
                          Cryptocurrency Tracker  <ExternalLinkIcon mx='2px'/>
                      </Link>
                  </ListItem>
                  <ListItem>
                      <Meta>Github</Meta>
                      <Link href='https://github.com/lioarce01/crypto-hunter'>
                          Github  <ExternalLinkIcon mx='2px'/>
                      </Link>
                  </ListItem>
                  <ListItem>
                      <Meta>Platform</Meta>
                      <span>Windows/macOS/iOS/Android</span>
                  </ListItem>
                  <ListItem>
                      <Meta>Stack</Meta>
                      <span>NodeJS, ReactJS, Material UI</span>
                  </ListItem>
                  <br></br>
                  <WorkImage src="/images/works/thumbCrypto.png" alt="CryptoTrackerApp" />
              </List>
          </Container>
      </Layout>
  )
}

export default Work