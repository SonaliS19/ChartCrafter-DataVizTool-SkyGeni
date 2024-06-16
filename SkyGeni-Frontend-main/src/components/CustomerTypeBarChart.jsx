import React, { useEffect, useState } from "react";

import { BarChart } from "@mui/x-charts/BarChart";
import { Box } from "@mui/material";
import ErrorComponent from "./NotFound";

const CustomerTypeBarChart = () => {
    const [data, setData] = useState([]);

    const getCustomerTypeData = async () => {
        const url = `${process.env.REACT_APP_BACKEND_URL}/api/getCustomerData`;

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

    const { xLabels, newCustomer, existingCustomer } = data;

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
            }}
        >
            <BarChart
                loading={data.length === 0}
                height={600}
                series={[
                    {
                        data: newCustomer,
                        label: "New",
                        id: "newCustomer",
                        stack: "total",
                    },
                    {
                        data: existingCustomer,
                        label: "Existing",
                        id: "existingCustomer",
                        stack: "total",
                    },
                ]}
                xAxis={[
                    {
                        data: xLabels,
                        scaleType: "band",
                        categoryGapRatio: 0.25,
                    },
                ]}
                yAxis={[
                    {
                        valueFormatter: (value) =>
                            `${(value / 1000000).toFixed(0)}M`,
                    },
                ]}
            />
        </Box>
    );
};

export default CustomerTypeBarChart;
