import { Grid, Avatar, Typography, Box, Button, Chip } from '@mui/material';
import PropTypes from 'prop-types';
import MeasurementCard from './MeasurementCard';
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';

const MemberRow = ({ member, measurements }) => {
    return (
        <Grid container sx={{ padding: 1, borderRadius: '8px' }}>
            {/* Member Details */}
            <Grid item xs={12} sm={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <Avatar src={member.avatar} alt={member.name} sx={{ mr: 2, width: 38, height: 38 }} />
                    <Box>
                        <Typography variant="h6" fontFamily={'Segoe UI'} fontSize={16}>{member.name}</Typography>
                        <Typography color="text.secondary" fontFamily={'Segoe UI'} fontSize={14}>
                            {member.id} | {member.gender} | {member.age} Years
                        </Typography>
                    </Box>
                </Box>
            </Grid>

            {/* Measurements */}
            <Grid item xs={12} sm={5}>
                <Grid container spacing={3}>
                    {measurements.map((measurement, index) => (
                        <Grid item key={index} xs={6} sm={4} >
                            <MeasurementCard
                                title={measurement.title}
                                value={measurement.value}
                                unit={measurement.unit}
                                date={measurement.date}
                                icon={measurement.icon}
                                status={measurement.status}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* Action Section */}

            <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 8 }}>
                <Box>
                    <Button
                        color="secondary"
                        size="small"
                        startIcon={<MessageIcon />}
                        sx={{ minWidth: 15, padding: '2px 4px' }}
                    />
                    <Button
                        color="secondary"
                        size="small"
                        startIcon={<CallIcon />}
                        sx={{ minWidth: 15, padding: '2px 4px' }}

                    />
                </Box>

            </Grid>

            {/* Review Status */}
            <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Chip
                    label={member.status}
                    color={
                        member.status === 'Pending'
                            ? 'warning'
                            : member.status === 'Partially Reviewed'
                                ? 'primary'
                                : 'success'
                    }
                    variant="outlined"
                    sx={{
                        fontSize: '0.75rem',
                        height: 24,
                        width: 'fit-content',
                    }}
                />
            </Grid>
        </Grid>
    );
};

// Add PropTypes validation
MemberRow.propTypes = {
    member: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        avatar: PropTypes.string, // Optional for the icon component
        status: PropTypes.string.isRequired, // Status for the review column
    }).isRequired,
    measurements: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            unit: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            icon: PropTypes.elementType, // Optional for the icon component
            status: PropTypes.string, // Status for each measurement
        })
    ).isRequired,
    showActions: PropTypes.bool,
};

export default MemberRow;
