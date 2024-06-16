import { Grid, Typography } from "@mui/material";

import MainContent from "./components/MainContent";
import React from "react";
import SideBar from "./components/SideBar";

const App = () => {
    const items = [
        "Team",
        "Customer Type",
        "Customer Type Pie Chart",
        "ACV Range",
        "Account Industry",
    ];
    const [currentIndex, setCurrentIndex] = React.useState(0);

    return (
        <Grid container sx={{ height: "100vh" }}>
            {/* Sidebar */}
            <Grid
                item
                xs={12}
                sm={4}
                md={3}
                lg={3}
                sx={{
                    position: "fixed",
                    height: "100vh",
                    width: { sm: "30%", md: "20%", lg: "20%" },
                    backgroundColor: "#f0f0f0",
                    overflow: "auto",
                }}
            >
                <SideBar
                    items={items}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                />
            </Grid>

            {/* Main Content */}
            <Grid
                item
                xs={false}
                sm={8}
                md={9}
                lg={9}
                sx={{
                    marginLeft: { sm: "30%", md: "20%", lg: "20%" },
                    height: "100vh",
                    overflowY: "auto",
                    p: 2,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ textAlign: "center", mb: 2, fontWeight: "medium" }}
                >
                    Showing Results for {items[currentIndex]}
                </Typography>
                <MainContent item={items[currentIndex]} />
            </Grid>
        </Grid>
    );
};

export default App;
