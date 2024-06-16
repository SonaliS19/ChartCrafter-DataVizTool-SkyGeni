// Define the structure for each object in 'Account Industry'
interface AccountIndustry {
    count: number;
    acv: number;
    closed_fiscal_quarter: string;
    Acct_Industry: string;
    query_key: string;
    Total_Quantity?: number | null; // Optional field for 'Others'
}

// Define the structure for each object in 'ACV Range'
interface ACVRange {
    count: number;
    acv: number;
    closed_fiscal_quarter: string;
    ACV_Range: string;
}

// Define the structure for each object in 'Team'
interface Team {
    count: number;
    acv: number;
    closed_fiscal_quarter: string;
    Team: string;
}

// Define the structure for each object in 'Customer Type'
interface CustomerType {
    count: number;
    acv: number;
    closed_fiscal_quarter: string;
    Cust_Type: string;
}

// Define the structure for the response of Pie Chart
interface PieChartItem {
    label: string;
    value: number;
}

export { AccountIndustry, ACVRange, Team, CustomerType, PieChartItem };
