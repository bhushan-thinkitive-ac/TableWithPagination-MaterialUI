import { Container, Typography, Grid2, IconButton, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import PropTypes from 'prop-types';
import MemberRow from './MemberRow';
import SearchIcon from "@mui/icons-material/Search";

const MemberList = ({ membersData }) => {
    return (
        <Container>
            <Grid2 container spacing={70} sx={{ mb: 6, borderRadius: '5px' }}>
                <Grid2 item xs={12} sm={4} md={3} lg={2}>
                    <Typography variant="h5" sx={{ fontFamily: 'initial', fontWeight: 'bold' }}>
                        Dashboard
                    </Typography>
                </Grid2>

                <Grid2 item xs={12} sm={4} md={6} lg={5}>
                    <form style={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                            id="search-bar"
                            className="text"
                            label="Search Patient"
                            variant="outlined"
                            placeholder="Search..."
                            size="small"
                            sx={{ marginRight: 1 }}
                        />
                        <IconButton type="submit" aria-label="search" sx={{ marginRight: 2 }}>
                            <SearchIcon style={{ fill: "blue" }} />
                        </IconButton>
                        <FormControl size="small" sx={{ minWidth: 120 }}>
                            <InputLabel id="select-label">Filter By</InputLabel>
                            <Select
                                labelId="select-label"
                                id="select"
                                label="Filter By"
                            >
                                <MenuItem value="age">Age</MenuItem>
                                <MenuItem value="gender">Gender</MenuItem>
                                <MenuItem value="recent">Recent</MenuItem>
                                {/* Add other options as needed */}
                            </Select>
                        </FormControl>
                    </form>
                </Grid2>
            </Grid2>

            <Grid2 container spacing={9} sx={{ mb: 4, background: 'lightgray', borderRadius: '5px' }}>
                <Grid2 item xs={12} sm={4} md={3} lg={2}>
                    <Typography variant="h6" sx={{ fontFamily: 'initial', fontWeight: 'bold', padding: '5px' }}>
                        Member Name
                    </Typography>
                </Grid2>
                <Grid2 item xs={12} sm={8} md={9} lg={10}>
                    <Typography variant="h6" sx={{ fontFamily: 'initial', fontWeight: 'bold', padding: '5px' }}>
                        Recent Measurements
                    </Typography>
                </Grid2>
            </Grid2>

            {membersData.map((memberData, index) => (
                <MemberRow
                    key={index}
                    member={memberData.member}
                    measurements={memberData.measurements}
                />
            ))}
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
