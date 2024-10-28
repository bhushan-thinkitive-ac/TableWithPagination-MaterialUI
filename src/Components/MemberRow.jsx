import { Grid2, Avatar, Typography, Box, Button } from '@mui/material';
import PropTypes from 'prop-types';
import MeasurementCard from './MeasurementCard';
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const MemberRow = ({ member, measurements, showActions }) => {
    return (
        <Grid2 container spacing={2} sx={{ mb: 3, padding: 2, backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            {/* Member Details */}
            <Grid2 item xs={12} sm={4}>
                <ResizableBox
                    width={300} // Initial width
                    height={100} // You can adjust height as needed
                    minConstraints={[100, 100]} // Minimum width and height
                    maxConstraints={[600, 300]} // Maximum width and height
                    axis="x" // Allow resizing on the x-axis
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <Avatar src={member.avatar} alt={member.name} sx={{ mr: 2 }} />
                        <Box>
                            <Typography variant="h6">{member.name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {member.gender} | {member.age} Years
                            </Typography>
                        </Box>
                    </Box>
                </ResizableBox>
            </Grid2>

            {/* Measurements */}
            <Grid2 item xs={12} sm={4}>
                <ResizableBox
                    width={300} // Initial width
                    height={100} // You can adjust height as needed
                    minConstraints={[100, 100]} // Minimum width and height
                    maxConstraints={[600, 300]} // Maximum width and height
                    axis="x" // Allow resizing on the x-axis
                >
                    <Grid2 container spacing={0.5}>
                        {measurements.map((measurement, index) => (
                            <Grid2 item key={index} xs={12}>
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
                </ResizableBox>
            </Grid2>

            {/* Action Section */}
            {showActions && (
                <Grid2 item xs={12} sm={4}>
                    <ResizableBox
                        width={300} // Initial width
                        height={100} // You can adjust height as needed
                        minConstraints={[100, 100]} // Minimum width and height
                        maxConstraints={[600, 300]} // Maximum width and height
                        axis="x" // Allow resizing on the x-axis
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, height: '100%' }}>
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
                    </ResizableBox>
                </Grid2>
            )}
        </Grid2>
    );
};

// Add PropTypes validation
MemberRow.propTypes = {
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
    showActions: PropTypes.bool,
};

export default MemberRow;
