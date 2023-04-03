import { BorderTop } from '@mui/icons-material';
import { Box, Button, Divider, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FaPencilAlt, FaRegTrashAlt, FaTrashAlt } from 'react-icons/fa';

const columns: GridColDef[] = [
  { 
    field: 'id', 
    headerName: 'Id', 
    width: 70, 
    headerClassName: 'header', 
    cellClassName: 'cellColor',
    renderHeader(params) {
      return(
        <Typography style={{fontWeight: 'bold', fontSize: '13px'}}>ID</Typography>
      )
    },
  },
  { 
    field: 'kodeKategori', 
    headerName: 'Kode Kategori', 
    width: 200, 
    headerClassName: 'header', 
    cellClassName: 'cellColor',
    renderHeader(params) {
      return(
        <Typography style={{fontWeight: 'bold', fontSize: '13px'}}>Kode Kategori</Typography>
      )
    },
  },
  { 
    field: 'namaKategori', 
    headerName: 'Nama Kategori', 
    width: 250, 
    headerClassName: 'header', 
    cellClassName: 'cellColor',
    renderHeader(params) {
      return(
        <Typography style={{fontWeight: 'bold', fontSize: '13px'}}>Nama Kategori</Typography>
      )
    },
  },
  { 
    field: 'keterangan', 
    headerName: 'Keterangan', 
    width: 350, 
    headerClassName: 'header', 
    cellClassName: 'cellColor',
    renderHeader(params) {
      return(
        <Typography style={{fontWeight: 'bold', fontSize: '13px'}}>Keterangan</Typography>
      )
    },
  },
  { 
    field: 'aksi', 
    headerName: 'Aksi', 
    width: 200, 
    headerClassName: 'header', 
    cellClassName: 'cellColor',
    renderCell(params) {
      return(
        <div>
          <Button startIcon={<FaPencilAlt style={{fontSize: '12px'}}/>} variant="contained" onClick={() => { console.log('edit'); }} color='secondary' style={{marginRight: '5px', width: '75px', fontSize: '12px', color: 'white'}}>Edit</Button>
          <Button startIcon={<FaTrashAlt style={{fontSize: '12px'}}/>} variant="contained" onClick={() => { console.log('delete'); }} color='error' style={{width: '75px', fontSize: '12px'}}>Delete</Button>
        </div>
      )
    },
    renderHeader(params) {
      return(
        <Typography style={{fontWeight: 'bold', fontSize: '13px'}}>Aksi</Typography>
      )
    },
  },

];

const rows = [
  { id: 1, kodeKategori: 'A001', namaKategori: 'Makanan Ringan', keterangan: 'Ciki dll'},
  { id: 2, kodeKategori: 'B001', namaKategori: 'Minuman Dingin', keterangan: 'Bir dll'}
];


export default function DataTable() {
  return (
    <Box style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // checkboxSelection
        autoPageSize={true}
        showCellVerticalBorder={true}
        sx={{
          '& .header' : {
            backgroundColor: '#F8F8F8',
          },
          '& .cellColor' : {
            borderBottom: '0.5px solid #000000',
          },
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
    </Box>
  );
}