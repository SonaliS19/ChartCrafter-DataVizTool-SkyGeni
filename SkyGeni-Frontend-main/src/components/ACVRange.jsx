import * as React from "react";

import { BarPlot } from "@mui/x-charts/BarChart";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { ChartsLegend } from "@mui/x-charts/ChartsLegend";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import ErrorComponent from "./NotFound";
import { LinePlot } from "@mui/x-charts/LineChart";
import { useEffect } from "react";
import { useState } from "react";

export default function AcvRangeChart() {
    const [data, setData] = useState([]);

    const getCustomerTypeData = async () => {
        const url = `${process.env.REACT_APP_BACKEND_URL}/api/getACVData`;
        console.log(url);

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

    const { quarters, series } = data;

    return (
        <>
            <ChartContainer
                series={series}
                width={600}
                height={500}
                xAxis={[
                    {
                        id: "quarters",
                        data: quarters,
                        scaleType: "band",
                        valueFormatter: (value) => value.toString(),
                    },
                ]}
                yAxis={[
                    {
                        id: "count",
                        scaleType: "linear",
                        label: "Count of Deals",
                    },
                    {
                        id: "totalAcv",
                        scaleType: "linear",
                        label: "Total ACV",
                        valueFormatter: (value) =>
                            `${(value / 1000000).toFixed(1)}M`,
                    },
                ]}
            >
                <ChartsLegend direction="row" />
                <BarPlot />
                <LinePlot />
                <ChartsXAxis
                    label="Fiscal Quarter"
                    position="bottom"
                    axisId="quarters"
                />
                <ChartsYAxis
                    label="Count of Deals"
                    position="left"
                    axisId="count"
                />
                <ChartsYAxis
                    label="Total ACV"
                    position="right"
                    axisId="totalAcv"
                />
            </ChartContainer>
        </>
    );
}
