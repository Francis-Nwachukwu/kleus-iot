import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Slide } from "@mui/material";

export default function CustomSnackbar({
  open,
  severity,
  message,
  handleClose,
}) {
  function SlideTransition(props) {
    return <Slide {...props} direction="left" />;
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={SlideTransition}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
