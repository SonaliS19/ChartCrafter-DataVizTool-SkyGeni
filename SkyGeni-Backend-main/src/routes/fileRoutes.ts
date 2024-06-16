import {
    ACVRange,
    AccountIndustry,
    CustomerType,
    PieChartItem,
    Team,
} from "../types";
import { Request, Response, Router } from "express";

import fs from "fs";
import path from "path";

const router = Router();

// src/data/Team.json
// src/data/Customer Type.json
// src/data/ACV Range.json
// src/data/Account Industry.json

router.get("/getTeamData", async (req: Request, res: Response) => {
    const FILE_NAME = "Team.json";

    try {
        const fileContent = await fs.promises.readFile(
            path.join(__dirname, "..", "data", FILE_NAME),
            "utf-8"
        );
        const rawData = fileContent ? JSON.parse(fileContent) : {};

        const quarters = Array.from(
            new Set(rawData.map((item: Team) => item.closed_fiscal_quarter))
        );

        const teams = Array.from(
            new Set(rawData.map((item: Team) => item.Team))
        );

        const series = teams.map((team) => ({
            type: "bar",
            stack: "acvTeam",
            yAxisKey: "acv",
            label: team,
            data: quarters.map((quarter) => {
                const item = rawData.find(
                    (d: Team) =>
                        d.closed_fiscal_quarter === quarter && d.Team === team
                );
                return item ? item.acv : 0;
            }),
        }));

        res.json({ quarters, series });
    } catch (error) {
        console.error("Error reading files:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/getCustomerData", async (req: Request, res: Response) => {
    const FILE_NAME = "Customer Type.json";

    try {
        const fileContent = await fs.promises.readFile(
            path.join(__dirname, "..", "data", FILE_NAME),
            "utf-8"
        );
        const data = fileContent ? JSON.parse(fileContent) : {};

        const xLabels = [
            ...new Set(
                data.map((item: CustomerType) => item.closed_fiscal_quarter)
            ),
        ];

        const existingCustomer = data
            .filter(
                (item: CustomerType) => item.Cust_Type === "Existing Customer"
            )
            .map((item: CustomerType) => item.acv);

        const newCustomer = data
            .filter((item: CustomerType) => item.Cust_Type === "New Customer")
            .map((item: CustomerType) => item.acv);

        res.json({ xLabels, existingCustomer, newCustomer });
    } catch (error) {
        console.error("Error reading files:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/getCustomerData/pieChart", async (req: Request, res: Response) => {
    const FILE_NAME = "Customer Type.json";

    try {
        const fileContent = await fs.promises.readFile(
            path.join(__dirname, "..", "data", FILE_NAME),
            "utf-8"
        );
        const data = fileContent ? JSON.parse(fileContent) : {};

        const finalData = data.reduce(
            (acc: PieChartItem[], item: CustomerType) => {
                const existing = acc.find(
                    (element: PieChartItem) => element.label === item.Cust_Type
                );

                if (existing) {
                    existing.value += item.count;
                } else {
                    acc.push({
                        label: item.Cust_Type,
                        value: item.count,
                    });
                }

                return acc;
            },
            []
        );

        res.json(finalData);
    } catch (error) {
        console.error("Error reading files:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/getACVData", async (req: Request, res: Response) => {
    const FILE_NAME = "ACV Range.json";

    try {
        const fileContent = await fs.promises.readFile(
            path.join(__dirname, "..", "data", FILE_NAME),
            "utf-8"
        );
        const data = fileContent ? JSON.parse(fileContent) : {};

        const quarters = Array.from(
            new Set(data.map((item: ACVRange) => item.closed_fiscal_quarter))
        );
        const ranges = Array.from(
            new Set(data.map((item: ACVRange) => item.ACV_Range))
        );
        const rangeData = ranges.map((range) => ({
            type: "bar",
            stack: "acvRange",
            yAxisKey: "count",
            label: range,
            data: quarters.map((quarter) => {
                const item = data.find(
                    (d: ACVRange) =>
                        d.closed_fiscal_quarter === quarter &&
                        d.ACV_Range === range
                );
                return item ? item.count : 0;
            }),
        }));

        const totalAcvData = {
            type: "line",
            yAxisKey: "totalAcv",
            color: "red",
            data: quarters.map((quarter) => {
                const items = data.filter(
                    (d: ACVRange) => d.closed_fiscal_quarter === quarter
                );
                return items.reduce(
                    (sum: number, item: ACVRange) => sum + item.acv,
                    0
                );
            }),
        };

        res.json({ quarters, series: [...rangeData, totalAcvData] });
    } catch (error) {
        console.error("Error reading files:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/getIndustryData/pieChart", async (req: Request, res: Response) => {
    const FILE_NAME = "Account Industry.json";

    try {
        const fileContent = await fs.promises.readFile(
            path.join(__dirname, "..", "data", FILE_NAME),
            "utf-8"
        );
        const data = fileContent ? JSON.parse(fileContent) : {};

        const finalData = data.reduce(
            (
                acc: PieChartItem[],
                { Acct_Industry, count }: AccountIndustry
            ) => {
                const industry = acc.find(
                    (item) => item.label === Acct_Industry
                );
                if (industry) {
                    industry.value += count;
                } else {
                    acc.push({ label: Acct_Industry, value: count });
                }
                return acc;
            },
            []
        );

        res.json(finalData);
    } catch (error) {
        console.error("Error reading files:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/getTeamData/raw", async (req: Request, res: Response) => {
    const FILE_NAME = "Team.json";

    try {
        const fileContent = await fs.promises.readFile(
            path.join(__dirname, "..", "data", FILE_NAME),
            "utf-8"
        );
        const rawData = fileContent ? JSON.parse(fileContent) : {};

        res.json(rawData);
    } catch (error) {
        console.error("Error reading files:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/getCustomerData/raw", async (req: Request, res: Response) => {
    const FILE_NAME = "Customer Type.json";

    try {
        const fileContent = await fs.promises.readFile(
            path.join(__dirname, "..", "data", FILE_NAME),
            "utf-8"
        );
        const data = fileContent ? JSON.parse(fileContent) : {};

        res.json(data);
    } catch (error) {
        console.error("Error reading files:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/getACVData/raw", async (req: Request, res: Response) => {
    const FILE_NAME = "ACV Range.json";

    try {
        const fileContent = await fs.promises.readFile(
            path.join(__dirname, "..", "data", FILE_NAME),
            "utf-8"
        );
        const data = fileContent ? JSON.parse(fileContent) : {};

        res.json(data);
    } catch (error) {
        console.error("Error reading files:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/getIndustryData/raw", async (req: Request, res: Response) => {
    const FILE_NAME = "Account Industry.json";

    try {
        const fileContent = await fs.promises.readFile(
            path.join(__dirname, "..", "data", FILE_NAME),
            "utf-8"
        );
        const data = fileContent ? JSON.parse(fileContent) : {};

        res.json(data);
    } catch (error) {
        console.error("Error reading files:", error);
        res.status(500).send("Internal Server Error");
    }
});

export default router;
