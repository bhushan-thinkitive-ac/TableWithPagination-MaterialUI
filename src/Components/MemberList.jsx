import {
    Container,
    Typography,
    Grid2,
    IconButton,
    TextField,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Button,
    Box,
} from '@mui/material';
import PropTypes from 'prop-types';
import MemberRow from './MemberRow';
import SearchIcon from "@mui/icons-material/Search";
import { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';


const MemberList = ({ membersData }) => {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <Container>
            {/* Dashboard and Search Bar */}
            <Grid2 container spacing={18} sx={{ mb: 6, borderRadius: '5px' }} marginTop={2} paddingBottom={0}>
                <Grid2 item xs={12} sm={4} md={3} lg={2}>
                    <Typography variant="h6" sx={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>
                        Dashboard
                    </Typography>
                </Grid2>

                <Grid2 item xs={12} sm={8} md={6} lg={5}>
                    <form style={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                            id="search-bar"
                            label="Search Patient"
                            variant="outlined"
                            placeholder="Search..."
                            size="small"
                            sx={{ marginRight: 1 }}
                        />
                        <IconButton type="submit" aria-label="search" sx={{ marginRight: 2 }}>
                            <SearchIcon style={{ fill: "blue" }} />
                        </IconButton>
                        <FormControl size="small" sx={{ minWidth: 100 }}>
                            <InputLabel id="filter-label">Filter By</InputLabel>
                            <Select
                                labelId="filter-label"
                                id="filter"
                                value={filter}
                                onChange={handleFilterChange}
                                label="Filter By"
                            >
                                <MenuItem value="day">Day</MenuItem>
                                <MenuItem value="week">Week</MenuItem>
                                <MenuItem value="month">Month</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                </Grid2>

                {/* Export and Add New Entry Buttons */}
                <Grid2 item xs={12} sm={8} md={6} lg={5}>
                    <Box display="flex" justifyContent="flex-end" alignItems="center" gap={1}>
                        <Button
                            type="submit"
                            sx={{
                                fontSize: 12,
                                padding: '4px 16px',
                                border: '2px solid #1a62ba',
                                color: '#1a62ba',
                                textTransform: 'uppercase',
                            }}
                            startIcon={<FaDownload />}
                        >
                            Export
                        </Button>
                        <Button
                            type="submit"
                            sx={{
                                fontSize: 12,
                                padding: '4px 16px',
                                border: '2px solid lightblue',
                                backgroundColor: '#1a62ba',
                                color: 'white',
                                textTransform: 'uppercase',
                            }}
                            startIcon={<AiOutlinePlus />}

                        >
                            Add new entry
                        </Button>
                    </Box>
                </Grid2>
            </Grid2>

            {/* Heading Row with Light Gray Background */}
            <Grid2 container spacing={2} sx={{ backgroundColor: '#f0f0f0', padding: 2, paddingTop: 0, marginBottom: 2, height: 60, borderRadius: '8px' }}>
                <Grid2 container spacing={48} >
                    <Grid2 container spacing={21}>
                        <Typography variant="h6" sx={{ mb: 1, mt: 3 }} fontFamily={'Segoe UI'} fontSize={16}>
                            Member Details
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 1, mt: 3 }} fontFamily={'Segoe UI'} fontSize={16}>
                            Recent Measurements
                        </Typography>
                    </Grid2>
                    <Typography variant="h6" sx={{ mb: 1, mt: 3 }} fontFamily={'Segoe UI'} fontSize={16}>
                        Actions & Reviews
                    </Typography>
                </Grid2>
            </Grid2>

            {/* Member Rows */}
            <Grid2 container spacing={1}>
                {membersData.map((memberData, index) => (
                    <MemberRow
                        key={index}
                        member={memberData.member}
                        measurements={memberData.measurements}
                        showActions={true}
                    />
                ))}
            </Grid2>
        </Container>
    );
};

// Add PropTypes validation
MemberList.propTypes = {
    membersData: PropTypes.arrayOf(
        PropTypes.shape({
            member: PropTypes.shape({
                name: PropTypes.string.isRequired,
                gender: PropTypes.string.isRequired,
                age: PropTypes.number.isRequired,
                avatar: PropTypes.string, // Optional
            }).isRequired,
            measurements: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string.isRequired,
                    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
                    unit: PropTypes.string.isRequired,
                    date: PropTypes.string.isRequired,
                    icon: PropTypes.elementType, // Optional for the icon component
                })
            ).isRequired,
        })
    ).isRequired,
};

export default MemberList;
