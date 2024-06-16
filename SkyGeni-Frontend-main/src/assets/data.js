const customerType = [
    {
        count: 46,
        acv: 1322309.9899999998,
        closed_fiscal_quarter: "2023-Q3",
        Cust_Type: "Existing Customer",
    },
    {
        count: 14,
        acv: 983031.39,
        closed_fiscal_quarter: "2023-Q3",
        Cust_Type: "New Customer",
    },
    {
        count: 45,
        acv: 1124856.9500000002,
        closed_fiscal_quarter: "2023-Q4",
        Cust_Type: "Existing Customer",
    },
    {
        count: 10,
        acv: 387300,
        closed_fiscal_quarter: "2023-Q4",
        Cust_Type: "New Customer",
    },
    {
        count: 51,
        acv: 1360047.1599999997,
        closed_fiscal_quarter: "2024-Q1",
        Cust_Type: "Existing Customer",
    },
    {
        count: 6,
        acv: 313189.25,
        closed_fiscal_quarter: "2024-Q1",
        Cust_Type: "New Customer",
    },
    {
        count: 23,
        acv: 647821.48,
        closed_fiscal_quarter: "2024-Q2",
        Cust_Type: "Existing Customer",
    },
    {
        count: 6,
        acv: 224643.3,
        closed_fiscal_quarter: "2024-Q2",
        Cust_Type: "New Customer",
    },
];

const customerAcvRange = [
    {
        count: 2,
        acv: 307500,
        closed_fiscal_quarter: "2023-Q3",
        ACV_Range: "$100K - 200K",
    },
    {
        count: 15,
        acv: 472297.11,
        closed_fiscal_quarter: "2023-Q3",
        ACV_Range: "$20K - 50K",
    },
    {
        count: 8,
        acv: 554205.6,
        closed_fiscal_quarter: "2023-Q3",
        ACV_Range: "$50K - 100K",
    },
    {
        count: 33,
        acv: 263138.67,
        closed_fiscal_quarter: "2023-Q3",
        ACV_Range: "<$20K",
    },
    {
        count: 2,
        acv: 708200,
        closed_fiscal_quarter: "2023-Q3",
        ACV_Range: ">=$200K",
    },
    {
        count: 5,
        acv: 564500,
        closed_fiscal_quarter: "2023-Q4",
        ACV_Range: "$100K - 200K",
    },
    {
        count: 11,
        acv: 348497.14,
        closed_fiscal_quarter: "2023-Q4",
        ACV_Range: "$20K - 50K",
    },
    {
        count: 6,
        acv: 356708.07000000007,
        closed_fiscal_quarter: "2023-Q4",
        ACV_Range: "$50K - 100K",
    },
    {
        count: 33,
        acv: 242451.74000000002,
        closed_fiscal_quarter: "2023-Q4",
        ACV_Range: "<$20K",
    },
    {
        count: 1,
        acv: 112125,
        closed_fiscal_quarter: "2024-Q1",
        ACV_Range: "$100K - 200K",
    },
    {
        count: 9,
        acv: 306169.81999999995,
        closed_fiscal_quarter: "2024-Q1",
        ACV_Range: "$20K - 50K",
    },
    {
        count: 10,
        acv: 694818.49,
        closed_fiscal_quarter: "2024-Q1",
        ACV_Range: "$50K - 100K",
    },
    {
        count: 36,
        acv: 261356.43000000002,
        closed_fiscal_quarter: "2024-Q1",
        ACV_Range: "<$20K",
    },
    {
        count: 1,
        acv: 298766.67,
        closed_fiscal_quarter: "2024-Q1",
        ACV_Range: ">=$200K",
    },
    {
        count: 2,
        acv: 242043.69,
        closed_fiscal_quarter: "2024-Q2",
        ACV_Range: "$100K - 200K",
    },
    {
        count: 7,
        acv: 234323.99,
        closed_fiscal_quarter: "2024-Q2",
        ACV_Range: "$20K - 50K",
    },
    {
        count: 4,
        acv: 283836.78,
        closed_fiscal_quarter: "2024-Q2",
        ACV_Range: "$50K - 100K",
    },
    {
        count: 16,
        acv: 112260.32,
        closed_fiscal_quarter: "2024-Q2",
        ACV_Range: "<$20K",
    },
];

const industryData = [
    {
        count: 29,
        acv: 1010483.64,
        closed_fiscal_quarter: "2023-Q3",
        Acct_Industry: "Manufacturing",
        query_key: "industry",
    },
    {
        count: 11,
        acv: 875741.9,
        closed_fiscal_quarter: "2023-Q3",
        Acct_Industry: "Transportation",
        query_key: "industry",
    },
    {
        count: 17,
        acv: 809108.63,
        closed_fiscal_quarter: "2024-Q1",
        Acct_Industry: "Manufacturing",
        query_key: "industry",
    },
    {
        count: 19,
        acv: 550324.8999999999,
        closed_fiscal_quarter: "2024-Q2",
        Acct_Industry: "Manufacturing",
        query_key: "industry",
    },
    {
        count: 17,
        acv: 519986.38000000006,
        closed_fiscal_quarter: "2023-Q4",
        Acct_Industry: "Manufacturing",
        query_key: "industry",
    },
    {
        count: 18,
        acv: 380430.32,
        closed_fiscal_quarter: "2023-Q4",
        Acct_Industry: "Transportation",
        query_key: "industry",
    },
    {
        count: 22,
        acv: 353472.38,
        closed_fiscal_quarter: "2024-Q1",
        Acct_Industry: "Transportation",
        query_key: "industry",
    },
    {
        count: 7,
        acv: 233000,
        closed_fiscal_quarter: "2023-Q4",
        Acct_Industry: "Wholesalers",
        query_key: "industry",
    },
    {
        count: 6,
        acv: 218577.94000000003,
        closed_fiscal_quarter: "2023-Q4",
        Acct_Industry: "Tecnology Svcs",
        query_key: "industry",
    },
    {
        count: 7,
        acv: 171210.96,
        closed_fiscal_quarter: "2024-Q1",
        Acct_Industry: "Wholesalers",
        query_key: "industry",
    },
    {
        count: 3,
        acv: 168722.41,
        closed_fiscal_quarter: "2024-Q1",
        Acct_Industry: "Retail",
        query_key: "industry",
    },
    {
        count: 6,
        acv: 168050,
        closed_fiscal_quarter: "2023-Q3",
        Acct_Industry: "Wholesalers",
        query_key: "industry",
    },
    {
        count: 2,
        acv: 136043.69,
        closed_fiscal_quarter: "2024-Q2",
        Acct_Industry: "Tecnology Svcs",
        query_key: "industry",
    },
    {
        count: 4,
        acv: 110339.22,
        closed_fiscal_quarter: "2024-Q1",
        Acct_Industry: "Tecnology Svcs",
        query_key: "industry",
    },
    {
        count: 4,
        acv: 106744.20000000001,
        closed_fiscal_quarter: "2023-Q3",
        Acct_Industry: "Financial Svcs",
        query_key: "industry",
    },
    {
        count: 3,
        acv: 100240,
        closed_fiscal_quarter: "2023-Q4",
        Acct_Industry: "Retail",
        query_key: "industry",
    },
    {
        count: 4,
        acv: 93597.2,
        closed_fiscal_quarter: "2024-Q2",
        Acct_Industry: "Transportation",
        query_key: "industry",
    },
    {
        count: 4,
        acv: 57966,
        closed_fiscal_quarter: "2023-Q3",
        Acct_Industry: "Tecnology Svcs",
        query_key: "industry",
    },
    {
        count: 1,
        acv: 51000,
        closed_fiscal_quarter: "2024-Q1",
        Acct_Industry: "Education",
        query_key: "industry",
    },
    {
        count: 1,
        acv: 42798.99,
        closed_fiscal_quarter: "2024-Q2",
        Acct_Industry: "Financial Svcs",
        query_key: "industry",
    },
    {
        count: 3,
        acv: 36475.64,
        closed_fiscal_quarter: "2023-Q3",
        Acct_Industry: "Retail",
        query_key: "industry",
    },
    {
        count: 2,
        acv: 25500,
        closed_fiscal_quarter: "2024-Q2",
        Acct_Industry: "Wholesalers",
        query_key: "industry",
    },
    {
        count: 1,
        acv: 24200,
        closed_fiscal_quarter: "2024-Q2",
        Acct_Industry: "Retail",
        query_key: "industry",
    },
    {
        count: 1,
        acv: 20696.38,
        closed_fiscal_quarter: "2023-Q4",
        Acct_Industry: "Financial Svcs",
        query_key: "industry",
    },
    {
        count: 2,
        acv: 6382.81,
        closed_fiscal_quarter: "2024-Q1",
        Acct_Industry: "Financial Svcs",
        query_key: "industry",
    },
    {
        acv: 49880,
        Total_Quantity: null,
        count: 3,
        Acct_Industry: "Others",
        closed_fiscal_quarter: "2023-Q3",
    },
    {
        acv: 3000,
        Total_Quantity: null,
        count: 1,
        Acct_Industry: "Others",
        closed_fiscal_quarter: "2024-Q1",
    },
    {
        acv: 0,
        Total_Quantity: 0,
        count: 0,
        Acct_Industry: "Others",
        closed_fiscal_quarter: "2024-Q2",
    },
    {
        acv: 39225.93,
        Total_Quantity: null,
        count: 3,
        Acct_Industry: "Others",
        closed_fiscal_quarter: "2023-Q4",
    },
];

export { customerType, customerAcvRange, industryData };