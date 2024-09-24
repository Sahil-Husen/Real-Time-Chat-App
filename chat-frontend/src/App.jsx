 import React from 'react'
 import { ChakraProvider,Box,Heading } from '@chakra-ui/react';

 import ChatBox from './Components/ChatBox'
 const App = () => {
   return (
     <ChakraProvider>
      <div>
      <Box p={5}></Box>
      <Heading>
        React-Time Chat
      </Heading>
      <ChatBox></ChatBox>
      </div>
     </ChakraProvider>
    
   )
 }
 
 export default App