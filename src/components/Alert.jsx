import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

export function AlertSnackbar({ message, severity = "info", open, setOpen }) {
  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={1200}
      onClose={handleAlertClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert severity={severity} onClose={handleAlertClose}>
        {message}
      </Alert>
    </Snackbar>
  );
}
