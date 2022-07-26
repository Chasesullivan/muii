import React from 'react'
import { AppBar, styled ,Toolbar, Typography } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';

const StyledToolbar= styled(Toolbar)({
   display:"flex",
   justifyContent:"space-between"
})


const Search= styled("div")(({theme}) => ({
    backgroundColor: "white",
}))
const Icons= styled("Box")(({theme}) => ({
    backgroundColor: "white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRaduis,
    width:"40%"
}))
const Navbar = () => {
    return (
        <AppBar position="sticky">
           < StyledToolbar>
           <Typography variant="h6" sx={{display:{xs:"none", sm:"block" }}}>LAMA DEV</Typography>
           <PetsIcon sx={{display:{xs:"none", sm:"block" }}}/>
           <Search>serch</Search>
           <Icons>icons</Icons>
           </ StyledToolbar> 
            </AppBar>
    )
}

export default Navbar
           
            