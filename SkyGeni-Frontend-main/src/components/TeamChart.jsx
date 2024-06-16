import * as React from "react";

import { BarPlot } from "@mui/x-charts/BarChart";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { ChartsLegend } from "@mui/x-charts/ChartsLegend";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import ErrorComponent from "./NotFound";
import { useEffect } from "react";
import { useState } from "react";

export default function TeamChart() {
    const [data, setData] = useState([]);

    const getCustomerTypeData = async () => {
        const url = `${process.env.REACT_APP_BACKEND_URL}/api/getTeamData`;

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

    const { series, quarters } = data;
    return (
        <ChartContainer
            series={series}
            width={700}
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
                    id: "acv",
                    scaleType: "linear",
                    label: "ACV ($)",
                    valueFormatter: (value) => `${(value / 1000).toFixed(0)}K`,
                },
            ]}
        >
            <ChartsLegend direction="row" />
            <BarPlot />
            <ChartsXAxis
                label="Fiscal Quarter"
                position="bottom"
                axisId="quarters"
            />
            <ChartsYAxis label="ACV ($)" position="left" axisId="acv" />
        </ChartContainer>
    );
}
