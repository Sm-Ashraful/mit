"use client";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Stack } from "@mui/material";
import Link from "next/link";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
};

export default function ContactModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className="!text-[.75rem]">
        Contact Us
        <KeyboardArrowDownIcon />
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              className="text-center border-b"
            >
              Contact by Department
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2, fontSize: ".75rem", fontWeight: 600 }}
            >
              Warehouse Services/MIT HQ:{" "}
              <span className="text-[#0096FF]">+1 770-414-1929</span>
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 0.5, fontSize: ".75rem", fontWeight: 600 }}
            >
              Freight Management (LoadDelivered):{" "}
              <span className="text-[#0096FF]">+1 847-509-0623</span>
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 0.5, fontSize: ".75rem", fontWeight: 600 }}
            >
              Last Mile & Order Tracking:{" "}
              <span className="text-[#0096FF]">+1 770-414-1929 Option 5</span>
            </Typography>
            <Stack className="mt-4">
              <Button className="bg-secondary text-black">
                <Link href="/contact-us">Visit Contact Page</Link>
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
