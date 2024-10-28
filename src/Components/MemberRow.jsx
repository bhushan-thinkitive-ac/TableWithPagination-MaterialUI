import { Grid, Avatar, Typography, Box, Button, Chip } from '@mui/material';
import PropTypes from 'prop-types';
import MeasurementCard from './MeasurementCard';
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';

const MemberRow = ({ member, measurements, showActions }) => {
    return (
        <Grid container spacing={2} sx={{ mb: 2, padding: 2, backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            {/* Member Details */}
            <Grid item xs={12} sm={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <Avatar src={member.avatar} alt={member.name} sx={{ mr: 2, width: 48, height: 48 }} />
                    <Box>
                        <Typography variant="h6">{member.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {member.gender} | {member.age} Years
                        </Typography>
                    </Box>
                </Box>
            </Grid>

            {/* Measurements */}
            <Grid item xs={12} sm={6}>
                <Grid container spacing={1}>
                    {measurements.map((measurement, index) => (
                        <Grid item key={index} xs={6} sm={4}>
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

            {/* Action & Review Status Section */}
            {showActions && (
                <Grid item xs={12} sm={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                        <Button
                            color="secondary"
                            size="small"
                            startIcon={<MessageIcon />}
                            sx={{ minWidth: 25, padding: '2px 4px' }}
                        />
                        <Button
                            color="secondary"
                            size="small"
                            startIcon={<CallIcon />}
                            sx={{ minWidth: 25, padding: '2px 4px' }}
                        />
                    </Box>
                    {/* Status Label */}
                    <Chip
                        label={member.status}
                        color={member.status === 'Pending' ? 'warning' : member.status === 'Partially Reviewed' ? 'primary' : 'success'}
                        variant="outlined"
                        sx={{
                            fontSize: '0.75rem',
                            height: 24,
                            width: 'fit-content',
                        }}

                    />
                </Grid>
            )}
        </Grid>
    );
};

// Add PropTypes validation
MemberRow.propTypes = {
    member: PropTypes.shape({
        name: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        avatar: PropTypes.string, // Optional
        status: PropTypes.string.isRequired, // Status for the member row
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
