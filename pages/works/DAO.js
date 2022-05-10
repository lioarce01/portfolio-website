import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {

  return (
      <Layout title='Movie APP '>
          <Container>
              <Title>
                  Movie APP <Badge>2022</Badge>
              </Title>
              <P>
                  An application to see movies & series.
              </P>
              <List ml ={4} my={4}>
                  <ListItem>
                      <Meta>Github</Meta>
                      <Link href='https://github.com/lioarce01/CampaignFactory-Solidity'>
                          Github  <ExternalLinkIcon mx='2px'/>
                      </Link>
                  </ListItem>
                  <ListItem>
                      <Meta>Platform</Meta>
                      <span>Windows/macOS</span>
                  </ListItem>
                  <ListItem>
                      <Meta>Stack</Meta>
                      <span>NextJS, React, Solidity, Web3JS, Truffle, Semantic UI</span>
                  </ListItem>
                  <br></br>
                  <WorkImage src="/images/works/thumbDAO.webp" alt="DAO" />
              </List>
          </Container>
      </Layout>
  )
}

export default Work