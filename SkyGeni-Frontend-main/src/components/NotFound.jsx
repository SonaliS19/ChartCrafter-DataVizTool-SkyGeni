import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";

const ErrorComponent = () => {
    return (
        <Box sx={{ p: 2, backgroundColor: "#f8d7da" }}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                <Typography variant="body1">
                    Something went wrong. Please try again later.
                </Typography>
            </Alert>
        </Box>
    );
};

export default ErrorComponent;
