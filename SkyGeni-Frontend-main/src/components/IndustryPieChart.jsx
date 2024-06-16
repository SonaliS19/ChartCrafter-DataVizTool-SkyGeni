import * as React from "react";

import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

import ErrorComponent from "./NotFound";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

export default function IndustryPieChart() {
    const [data, setData] = useState([]);

    const getCustomerTypeData = async () => {
        const url = `${process.env.REACT_APP_BACKEND_URL}/api/getIndustryData/pieChart`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        getCustomerTypeData();
    }, []);

    if (data.length === 0) {
        return (
            <div>
                <ErrorComponent />
            </div>
        );
    }

    const getArcLabel = (arc) => arc.value;

    return (
        <>
            <Typography
                variant="h6"
                sx={{ textAlign: "center", marginBottom: 2 }}
            >
                Sales by Industry
            </Typography>
            <PieChart
                series={[
                    {
                        data,
                        arcLabel: getArcLabel,
                        highlightScope: {
                            faded: "global",
                            highlighted: "item",
                        },
                        faded: {
                            innerRadius: 30,
                            additionalRadius: -10,
                            color: "gray",
                            paddingAngle: 1,
                        },
                        cornerRadius: 8,
                    },
                ]}
                sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                        fill: "white",
                        fontSize: 18,
                    },
                }}
                height={500}
            />
        </>
    );
}
