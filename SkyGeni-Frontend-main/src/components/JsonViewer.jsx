import * as React from "react";

import Box from "@mui/material/Box";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function JsonViewer({ url }) {
    const [jsonData, setJsonData] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setJsonData(data);
                localStorage.setItem(url, JSON.stringify(data));
            } catch (error) {
                console.log("error", error);
                setError("Failed to fetch data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        const data = localStorage.getItem(url);
        if (data) {
            setJsonData(JSON.parse(data));
            setLoading(false); // Set loading to false if data is fetched from localStorage
        } else {
            fetchData();
        }
    }, [url]);

    React.useEffect(() => {
        // Show error message after 3 seconds if still loading
        const timer = setTimeout(() => {
            if (loading) {
                setError("Failed to fetch data. Please check your connection.");
                setLoading(false);
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, [loading]);

    if (loading) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "70vh",
                }}
            >
                Loading...
            </Box>
        );
    }

    if (error) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "70vh",
                    backgroundColor: "#f8d7da",
                    p: 2,
                }}
            >
                {error}
            </Box>
        );
    }

    return (
        <Box
            sx={{
                maxHeight: "70vh",
                backgroundColor: "#f5f5f5",
                p: 2,
                overflowY: "auto",
            }}
        >
            <SyntaxHighlighter
                language="json"
                style={atomOneDark}
                showLineNumbers={true}
                wrapLines={true}
                wrapLongLines={true}
            >
                {JSON.stringify(jsonData, null, 2)}
            </SyntaxHighlighter>
        </Box>
    );
}
