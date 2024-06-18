import { Alert } from "@mui/material";

export function WarnAlert({ message, handleAlertClose = () => {} }) {
  return (
    <Alert severity="warning" onClose={handleAlertClose}>
      {message}
    </Alert>
  );
}

export function SuccessAlert({ message, handleAlertClose = () => {} }) {
  return (
    <Alert severity="success" onClose={handleAlertClose}>
      {message}
    </Alert>
  );
}
