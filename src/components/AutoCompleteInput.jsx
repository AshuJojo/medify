import { Autocomplete, Box, CircularProgress, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const AutocompleteInput = ({ value, setValue, fetchData, data, label, placeholder, ...props }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleOpen = () => {
        setOpen(true);

        if (data) {
            setOptions(data);
            return;
        }

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
        setLoading(false);
    };

    return (
        <Autocomplete
            {...props}
            open={open}
            onOpen={handleOpen}
            onClose={handleClose}
            options={options}
            loading={loading}
            defaultValue=""
            value={value}
            onChange={(e, v) => { setValue(v) }}
            getOptionLabel={(option) => { return (label ? option[label] : option) || "" }}
            disableClearable
            renderOption={(props, option) => <Typography {...props} key={option} variant="body2">{label ? option[label] : option}</Typography>}
            renderInput={(params) => (
                <TextField
                    {...params}
                    placeholder={placeholder}
                    sx={{
                        bgcolor: '#FAFBFE',
                        border: '1px solid #F0F0F0',
                        borderRadius: "0.5rem",
                        px: 0
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
                                <Box sx={{ px: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                </Box>
                            ),
                        },
                    }}
                />
            )}
            sx={{
                '& .MuiAutocomplete-inputRoot': {
                    paddingRight: 0,
                },
                "& .MuiOutlinedInput-root": {
                    borderRadius: "0.5rem",
                    color: 'primary.dark',
                    padding: '0 !important',
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #eee",
                    borderRadius: "0.5rem",
                },

            }}
        />
    );

}

export default AutocompleteInput