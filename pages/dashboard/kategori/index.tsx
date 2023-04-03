import type { ReactElement } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Button, CardContent, FormControl, FormHelperText, Grid, Icon, Input, InputLabel, Typography } from '@mui/material';
import PageContainer from '../../../src/components/container/PageContainer';
import DashboardCard from '../../../src/components/shared/DashboardCard';
import DataGridTable from '../../../src/components/tables/DataGridTable';
import FullLayout from '../../../src/layouts/full/FullLayout';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconPlus } from '@tabler/icons-react';

const KategoriPage = () => {
  return (
    <PageContainer title="Kategori Page" description="this is Sample page">
      <DashboardCard title="Master Data Kategori">
        <CardContent>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{fontWeight: 'bold', fontSize: '16px'}}>Tambah Data Kategori</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={3}>
                        <Grid item xs padding={1}>
                            <FormControl fullWidth={true} margin='dense' size='small'>
                                <InputLabel htmlFor="label-kode-kategori">Kode Kategori</InputLabel>
                                <Input id="input-kode-kategori" aria-describedby="input-kode-kategori" />
                            </FormControl>
                        </Grid>
                        <Grid item xs padding={1}>
                            <FormControl fullWidth={true} margin='dense' size='small'>
                                <InputLabel htmlFor="my-input">Nama Kategori</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" />
                            </FormControl>
                        </Grid>
                        <Grid item xs padding={1}>
                            <FormControl fullWidth={true} margin='dense' size='small'>
                                <InputLabel htmlFor="my-input">Keterangan</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" />
                            </FormControl>
                        </Grid>
                        <Grid item xs padding={1} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Button variant="contained" startIcon={<IconPlus/>}>Tambah</Button>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>

            <div style={{marginTop: '10px'}}>
                <DataGridTable/>
            </div>
        </CardContent>
      </DashboardCard>
    </PageContainer>
  );
};

export default KategoriPage;
KategoriPage.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};