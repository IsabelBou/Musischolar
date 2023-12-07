import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Container, SimpleGrid, Card } from '@chakra-ui/react'
import customTheme from './themes/index';
import CustomCard from './themes/components/CustomCard';
import Header from './themes/components/Header'
import { cards } from './resources/constants';

function App() {
  return (
    <ChakraProvider theme={customTheme} >
      <Container minHeight="100vh" width="100vw"> 
          <Header />
          <br></br>
          <Card> Test </Card>
          <br></br>
          <SimpleGrid 
            flexShrink={0}
            align = 'stretch'
            spacing = {4} 
            columns={{base: 1, sm: 1, md: 2}}> {/* If screen about the size of a phone (portrait), 1 column. Otherwise, 2 of them*/}
            <CustomCard {...cards.TEMPLATE}/>
            <CustomCard {...cards.TEMPLATE}/>
            <Card> Test </Card>
          </SimpleGrid>
      </Container>
    </ChakraProvider>
  )
}

export default App