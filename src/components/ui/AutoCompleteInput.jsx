import { Autocomplete, Box, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const AutocompleteInput = ({ name, value, setValue, fetchData, ...props }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleOpen = () => {
        setOpen(true);
        (async () => {
            setLoading(true);
            const data = await fetchData();
            setLoading(false);

            if (data)
                setOptions(data);
        })();
    };

    const handleClose = () => {
        setOpen(false);
        setOptions([]);
    };

    return (
        <Autocomplete
            {...props}
            open={open}
            onOpen={handleOpen}
            onClose={handleClose}
            options={options}
            loading={loading}
            value={value}
            onChange={(e, v) => { setValue(v) }}
            sx={{
                "& .MuiOutlinedInput-root": {
                    borderRadius: "0.5rem",
                    color: 'primary.dark',
                    padding: "0"
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #eee",
                    borderRadius: "0.5rem",
                }
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    placeholder={name}
                    sx={{
                        bgcolor: '#FAFBFE',
                        border: '1px solid #F0F0F0',
                        borderRadius: "0.5rem",
                    }}
                    slotProps={{
                        input: {
                            ...params.InputProps,
                            startAdornment: (
                                <Box sx={{ px: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <FiSearch size={20} color='#9CA3AF' />
                                </Box>
                            ),
                            endAdornment: (
                                <>
                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {/* {params.InputProps.endAdornment} */}
                                </>
                            ),
                        },
                    }}
                />
            )}
        />
    );
}

export default AutocompleteInput