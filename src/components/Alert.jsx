import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

export function AlertSnackbar({
  message,
  severity = "info",
  open,
  setOpen,
  vertical = "top",
  horizontal = "center",
}) {
  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={1500}
      onClose={handleAlertClose}
      anchorOrigin={{ vertical, horizontal }}
    >
      <Alert severity={severity} onClose={handleAlertClose}>
        {message}
      </Alert>
    </Snackbar>
  );
}
