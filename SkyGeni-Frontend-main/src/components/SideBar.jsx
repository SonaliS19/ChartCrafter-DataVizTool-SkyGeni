import * as React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";

const StyledListItem = styled(ListItem)(({ theme, selected }) => ({
    backgroundColor: selected ? theme.palette.action.selected : "transparent",
    "&:hover": {
        backgroundColor: theme.palette.action.hover,
    },
}));

export default function SideBar({ items = [], currentIndex, setCurrentIndex }) {
    const handleListItemClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <List
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                }}
            >
                {items.map((item, index) => (
                    <StyledListItem
                        key={index}
                        selected={currentIndex === index}
                        onClick={() => handleListItemClick(index)}
                    >
                        <ListItemText primary={item} />
                    </StyledListItem>
                ))}
            </List>
        </Box>
    );
}
