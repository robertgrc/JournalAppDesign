import { Box, Toolbar } from "@mui/material"
import { NavBar, Sidebar } from "../components"


const drawerWidth =280

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>
        {/*Navbar */}
        <NavBar drawerWidth={drawerWidth}/>

        {/*Sidebar */}
        <Sidebar drawerWidth={drawerWidth}/>
        <Box
            component='main'
            sx={{flexGrow:1, p:4, paddingRight:2}}
        >
            <Toolbar />

            {/*Toolbar */}
            {children}
        </Box>
    </Box>
  )
}
