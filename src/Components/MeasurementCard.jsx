// MeasurementCard.js
import { Card, CardContent, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';

const MeasurementCard = ({ title, value, unit, date, icon: IconComponent }) => {
  return (
    <Card sx={{ width: 210, height: 100, overflow: 'hidden' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
          {IconComponent && <IconComponent sx={{ fontSize: 60, marginRight: 5 }} />}
          <Typography variant="h6" component="div" noWrap>
            {title}
          </Typography>
        </Box>
        <Typography variant="h6" component="div" color={value < 100 ? "error" : "primary"}>
          {value} {unit}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

MeasurementCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unit: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};

export default MeasurementCard;
