import { Alert } from "@mui/material"

const AlertBar = () => {
    return (
        <Alert variant="filled" severity="info" icon={false}
            sx={{ borderRadius: 0, justifyContent: 'center', py: 0, fontWeight: 400, textAlign: 'center' }}
        >
            The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
        </Alert>
    )
}

export default AlertBar