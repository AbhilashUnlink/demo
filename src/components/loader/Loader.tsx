/* eslint-disable @typescript-eslint/no-explicit-any */

import { Box, Grid } from "@mui/material";
import spinner from "../../assets/spinner5.gif";
import "./style.css";
import Image from "next/image";

const Loader = ({ isLoading }: any) => {

    if (isLoading) {
        return (
            <Grid>
                <Box>
                    <div className="loader-container">
                        
                        <Image className="loader-gif" src={spinner} alt="Loader" />
                    </div>
                </Box>
            </Grid>
        );
    } else return <></>;
};

export default Loader;


