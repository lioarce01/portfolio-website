import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {

  return (
      <Layout title='Data Finances Web'>
          <Container>
              <Title>
                  Data Finance Web<Badge>2022</Badge>
              </Title>
              <P>
                  Data Finances with ReactJS.
              </P>
              <List ml ={4} my={4}>
                  <ListItem>
                      <Meta>Website</Meta>
                      <Link href='https://data-finance-react-app.vercel.app'>
                          Data Finance Web<ExternalLinkIcon mx='2px'/>
                      </Link>
                  </ListItem>
                  <ListItem>
                      <Meta>Github</Meta>
                      <Link href='https://github.com/lioarce01/data-finance-react-app'>
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
                  <WorkImage src="/public/images/works/thumbFinance.png" alt="Finance Data Web" />
              </List>
          </Container>
      </Layout>
  )
}

export default Work