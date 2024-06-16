import * as React from "react";

import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

import ErrorComponent from "./NotFound";
import { useEffect } from "react";
import { useState } from "react";

export default function CustomerTypePieChart() {
    const [data, setData] = useState([]);

    const getCustomerTypeData = async () => {
        const url = `${process.env.REACT_APP_BACKEND_URL}/api/getCustomerData/pieChart`;

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

    const TOTAL = data.reduce((acc, curr) => acc + curr.value, 0);

    const getArcLabel = (arc) => {
        const percentage = ((arc.value / TOTAL) * 100).toFixed(2);
        return `${percentage}%`;
    };

    return (
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
                    },
                    cornerRadius: 8,
                },
            ]}
            sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                    fill: "white",
                    fontSize: 20,
                },
            }}
            height={600}
        />
    );
}
