import Sidebar from "./componets/Sidebar"
import Feed from "./componets/Feed"
import Rightbar from "./componets/Rightbar"
import Navbar from "./componets/Navbar"
import {  Box , Stack } from '@mui/material';

function App() {
   return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
      <Sidebar/> 
        <Feed/>
      <Rightbar/>
     </Stack>
      </Box>
  );
}

      
      
export default App;  




 
      
      
      
  
   