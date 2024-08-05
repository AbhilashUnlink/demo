/* eslint-disable @typescript-eslint/no-explicit-any */
import { CloseRounded } from "@mui/icons-material";
import { Backdrop, Box, Slide, Modal, Typography, Divider } from "@mui/material";

const CustomPopup = ({
    style,
    open,
    onClose,
    children,
    color = "#fff",
    title
}: any) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Slide in={open} direction="up" mountOnEnter unmountOnExit>
                <Box style={style}>
                    <div className="flex justify-between w-100 px-3">
                        <Typography variant="h5">
                            {title}
                        </Typography>
                        <button
                            style={{
                                border: "none",
                                background: "none",
                                fontSize: "1.5rem",
                                cursor: "pointer",
                                position: "absolute",
                                right: "0.7rem",
                                top: "0.7rem",
                                color: color,
                                zIndex: 1,
                            }}
                            onClick={onClose}
                        >
                            <CloseRounded />
                        </button>
                    </div>

                    <div style={{ marginTop: "1rem" }}>
                        {children}
                    </div>
                </Box>
            </Slide>
        </Modal>
    );
};

export default CustomPopup;
