import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, Paper, Typography, Box, useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const TableWithPagination = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Sample data
  const rows = Array.from({ length: 100 }, (_, index) => ({
    name: `${index + 1}`,
    description: `Description for item ${index + 1}`,
    status: `Active`
  }));

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const displayedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box
      sx={{
        p: isMobile ? 1 : 2, 
        maxWidth: isMobile ? '100%' : '600px',
        margin: '0 auto',
      }}
    >
      <Typography
        variant={isMobile ? 'h4' : 'h4'}
        align="center"
        gutterBottom
        sx={{ color: '#1976d2', fontWeight: 'bold' }}
      >
        Table with Pagination
      </Typography>

      <Paper elevation={6} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: isMobile ? '300px' : '400px' }}>
          <Table size={isMobile ? 'small' : 'medium'}>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#1976d2' }}>
                <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: '14px', padding: '8px' }}>
                  Sr. No
                </TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: '14px', padding: '8px' }}>
                  Description
                </TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: '14px', padding: '8px' }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedRows.map((row, index) => (
                <TableRow
                  key={index}
                  hover
                  sx={{
                    '&:hover': {
                      backgroundColor: '#e0f7fa',
                      transition: 'background-color 0.1s ease',
                    }
                  }}
                >
                  <TableCell sx={{ fontSize: '15px', padding: isMobile ? '10px' : '8px' }}>
                    {row.name}
                  </TableCell>
                  <TableCell sx={{ fontSize: '15px', padding: isMobile ? '10px' : '8px' }}>
                    {row.description}
                  </TableCell>
                  <TableCell sx={{ fontSize: '15px', padding: isMobile ? '10px' : '8px' }}>
                    {row.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'center' : 'center',
            alignItems: 'center',
            backgroundColor: '#1976d2',
            color: '#fff',
            padding: isMobile ? '10px' : '0 24px',
            borderTop: isMobile ? '1px solid #1976d2' : 'none', 
          }}
        >
          <TablePagination
            component="div"
            count={rows.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10]}
            sx={{
              '& .MuiTablePagination-selectLabel, & .MuiTablePagination-input': {
                color: '#fff',
              },
              '& .MuiTablePagination-selectIcon': {
                color: '#fff',
              },
              '& .MuiTablePagination-toolbar': {
                flexDirection: isMobile ? 'column' : 'row',
              },
              '& .MuiTablePagination-displayedRows': {
                fontSize: isMobile ? '12px' : '14px', 
              }
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default TableWithPagination;
