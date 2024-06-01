import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import backgroundImage from "/background.png";

const EmptyLayout = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                height: "100vh",
                backgroundRepeat: "repeat-y", // Make background repeat vertically
            }}
        >
            <Outlet />
        </Box>

    );
};

export default EmptyLayout;
