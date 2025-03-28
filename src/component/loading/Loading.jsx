import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import CircularProgress from "@mui/joy/CircularProgress";
import styles from "./loading.module.css";

export default function Loading() {
  return (
    <Box
      className={styles.loading}
      sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}
    >
      <Button
        className={styles.btn_loading}
        startDecorator={<CircularProgress variant="solid" />}
      >
        Loading…
      </Button>
    </Box>
  );
}
