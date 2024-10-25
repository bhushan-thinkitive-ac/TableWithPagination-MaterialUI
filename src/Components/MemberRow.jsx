import { Grid2, Avatar, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';
import MeasurementCard from './MeasurementCard';

const MemberRow = ({ member, measurements }) => {
    return (
        <Grid2 container spacing={2} sx={{ mb: 2 }} >
            <Grid2 item xs={12} sm={4} md={3} lg={2} width={'200px'} height={'100px'}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={member.avatar} alt={member.name} sx={{ mr: 2 }} />
                    <Box>
                        <Typography variant="h6">{member.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {member.gender} | {member.age} Years
                        </Typography>
                    </Box>
                </Box>
            </Grid2>

            <Grid2 item xs={12} sm={8} md={9} lg={10}>
                <Grid2 container spacing={2}>
                    {measurements.map((measurement, index) => (
                        <Grid2 item key={index}>
                            <MeasurementCard
                                title={measurement.title}
                                value={measurement.value}
                                unit={measurement.unit}
                                date={measurement.date}
                                icon={measurement.icon}
                            />
                        </Grid2>
                    ))}
                </Grid2>
            </Grid2>
        </Grid2>
    );
};

MemberRow.propTypes = {
    member: PropTypes.shape({
        name: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        avatar: PropTypes.string,
    }).isRequired,
    measurements: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            unit: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            icon: PropTypes.elementType,
        })
    ).isRequired,
};

export default MemberRow;
