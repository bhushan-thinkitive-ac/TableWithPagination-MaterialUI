// import { Grid2 } from '@mui/material';
// import MeasurementCard from './MeasurementCard';
// import {Bloodtype, Thermostat, Favorite, Air, Opacity, HealthAndSafety, FitnessCenter, EmojiPeople, WaterDrop, SportsGymnastics, LocalFireDepartment, Bedtime, DirectionsRun, Straighten, Science
// } from '@mui/icons-material'; // Import icons for different measurements

// const RecentMeasurements = () => {
//   const measurements = [
//     {
//       title: 'Blood Pressure',
//       value: '100/59',
//       unit: 'mmhg',
//       date: '08-02-2022, 02:30 PM',
//       icon: Bloodtype,
//     },
//     {
//       title: 'Blood Glucose',
//       value: '97.22',
//       unit: 'mmol/L',
//       date: '08-02-2022, 02:30 PM',
//       icon: Bloodtype,
//     },
//     {
//       title: 'Body Temperature',
//       value: '101',
//       unit: '°F',
//       date: '08-02-2022, 02:30 PM',
//       icon: Thermostat,
//     },
//     {
//       title: 'Heart Rate',
//       value: '72',
//       unit: 'bpm',
//       date: '08-02-2022, 02:30 PM',
//       icon: Favorite,
//     },
//     {
//       title: 'Respiration Rate',
//       value: '14',
//       unit: 'bpm',
//       date: '08-02-2022, 02:30 PM',
//       icon: Air,
//     },
//     {
//         title: 'Blood Pressure',
//         value: '110/70',
//         unit: 'mmHg',
//         date: '08-04-2022, 08:30 AM',
//         icon: Bloodtype,
//       },
//       {
//         title: 'Blood Glucose',
//         value: '92.8',
//         unit: 'mg/dL',
//         date: '08-04-2022, 08:30 AM',
//         icon: Bloodtype,
//       },
//       {
//         title: 'Body Temperature',
//         value: '98.6',
//         unit: '°F',
//         date: '08-04-2022, 08:30 AM',
//         icon: Thermostat,
//       },
//       {
//         title: 'Heart Rate',
//         value: '78',
//         unit: 'bpm',
//         date: '08-04-2022, 08:30 AM',
//         icon: Favorite,
//       },
//       {
//         title: 'Respiration Rate',
//         value: '16',
//         unit: 'bpm',
//         date: '08-04-2022, 08:30 AM',
//         icon: Air,
//       },
//       {
//         title: 'Oxygen Saturation',
//         value: '96',
//         unit: '%',
//         date: '08-04-2022, 08:30 AM',
//         icon: Opacity,
//       },
//       {
//         title: 'Cholesterol',
//         value: '185',
//         unit: 'mg/dL',
//         date: '08-04-2022, 08:30 AM',
//         icon: HealthAndSafety,
//       },
//       {
//         title: 'BMI',
//         value: '24.5',
//         unit: 'kg/m²',
//         date: '08-04-2022, 08:30 AM',
//         icon: FitnessCenter,
//       },
//       {
//         title: 'Body Fat',
//         value: '18.7',
//         unit: '%',
//         date: '08-04-2022, 08:30 AM',
//         icon: EmojiPeople,
//       },
//       {
//         title: 'Hydration Level',
//         value: '55',
//         unit: '%',
//         date: '08-04-2022, 08:30 AM',
//         icon: WaterDrop,
//       },
//       {
//         title: 'Muscle Mass',
//         value: '42.5',
//         unit: 'kg',
//         date: '08-04-2022, 08:30 AM',
//         icon: SportsGymnastics,
//       },
//       {
//         title: 'Basal Metabolic Rate',
//         value: '1500',
//         unit: 'kcal/day',
//         date: '08-04-2022, 08:30 AM',
//         icon: LocalFireDepartment,
//       },
//       {
//         title: 'Visceral Fat',
//         value: '9',
//         unit: 'rating',
//         date: '08-04-2022, 08:30 AM',
//         icon: Favorite,
//       },
//       {
//         title: 'Sleep Duration',
//         value: '7.5',
//         unit: 'hrs',
//         date: '08-04-2022, 08:30 AM',
//         icon: Bedtime,
//       },
//       {
//         title: 'Activity Level',
//         value: '5000',
//         unit: 'steps',
//         date: '08-04-2022, 08:30 AM',
//         icon: DirectionsRun,
//       },
//       {
//         title: 'Waist Circumference',
//         value: '32',
//         unit: 'inches',
//         date: '08-04-2022, 08:30 AM',
//         icon: Straighten,
//       },
//       {
//         title: 'Resting Heart Rate',
//         value: '65',
//         unit: 'bpm',
//         date: '08-04-2022, 08:30 AM',
//         icon: Favorite,
//       },
//       {
//         title: 'Blood pH',
//         value: '7.35',
//         unit: '',
//         date: '08-04-2022, 08:30 AM',
//         icon: Science,
//       },
//       {
//         title: 'Serum Creatinine',
//         value: '1.2',
//         unit: 'mg/dL',
//         date: '08-04-2022, 08:30 AM',
//         icon: HealthAndSafety,
//       },
//       {
//         title: 'Body Water Percentage',
//         value: '60',
//         unit: '%',
//         date: '08-04-2022, 08:30 AM',
//         icon: Opacity,
//       },
      
    
//   ];

//   return (
//     <Grid2 container spacing={2}>
//       {measurements.map((measurement, index) => (
//         <Grid2 item xs={12} sm={6} md={4} key={index}>
//           <MeasurementCard 
//             title={measurement.title}
//             value={measurement.value}
//             unit={measurement.unit}
//             date={measurement.date}
//             icon={measurement.icon}
//           />
//         </Grid2>
//       ))}
//     </Grid2>
//   );
// };

// export default RecentMeasurements;
