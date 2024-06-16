import * as React from "react";

import AcvRangeChart from "./ACVRange";
import Box from "@mui/material/Box";
import CustomerTypeBarChart from "./CustomerTypeBarChart";
import CustomerTypePieChart from "./CustomerTypePieChart";
import ErrorComponent from "./NotFound";
import IndustryPieChart from "./IndustryPieChart";
import JsonViewer from "./JsonViewer";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TeamChart from "./TeamChart";
import { useState } from "react";

export default function MainContent({ item }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // get chart data based on the selected item
    const getChartData = () => {
        switch (item) {
            case "Customer Type":
                return <CustomerTypeBarChart />;
            case "Customer Type Pie Chart":
                return <CustomerTypePieChart />;
            case "Team":
                return <TeamChart />;
            case "ACV Range":
                return <AcvRangeChart />;
            case "Account Industry":
                return <IndustryPieChart />;
            default:
                return <ErrorComponent />;
        }
    };

    // get json data based on the selected item
    const getJsonData = () => {
        const urlMapping = {
            "Customer Type": "getCustomerData/raw",
            Team: "getTeamData/raw",
            "ACV Range": "getACVData/raw",
            "Account Industry": "getIndustryData/raw",
        };

        const url = `${process.env.REACT_APP_BACKEND_URL}/api/${urlMapping[item]}`;
        return <JsonViewer url={url} />;
    };

    return (
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab key={0} label={"Code"} />
                <Tab key={1} label={"Chart"} />
            </Tabs>

            {/* show tab data */}
            <Box sx={{ mt: 2, pt: 2 }}>
                <Box
                    sx={{
                        display: value === 0 ? "block" : "none",
                        justifyContent: "center",
                    }}
                >
                    {getJsonData()}
                </Box>

                <Box
                    sx={{
                        display: value === 1 ? "flex" : "none",
                        justifyContent: "center",
                    }}
                >
                    {getChartData()}
                </Box>
            </Box>
        </Box>
    );
}
