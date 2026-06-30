import { Alert, Box, Button, Card, CardContent, CircularProgress, Container, Typography } from "@mui/material";
import Image from "next/image";
import useSWR from 'swr';
import api from '../lib/api';

const fetcher = (url) => api.get(url).then((res) => res.data);

export default function Home() {
  // Configura o SWR para não buscar os dados automaticamente no carregamento da página.
  const { data, error, isLoading, mutate } = useSWR('/payload', fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: false,
  });

  const handleFetchPayload = () => {
    mutate(); // Aciona a busca de dados para o endpoint '/payload'
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'center', bgcolor: 'grey.100' }}>
      <Container component="main" sx={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', py: 8, px: 4, bgcolor: 'white' }} maxWidth="md">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, textAlign: 'center', my: 4 }}>
          {/* Área de interação com a API */}
          <Button variant="contained" onClick={handleFetchPayload} disabled={isLoading}>
            {isLoading ? 'Buscando...' : 'Acionar Backend'}
          </Button>

          {isLoading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
              <CircularProgress />
            </Box>
          )}

          {error && <Alert severity="error" sx={{ mt: 2 }}>Falha ao carregar. Verifique se o backend está rodando.</Alert>}

          {data && (
            <Card sx={{ mt: 2, width: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Dados Recebidos:</Typography>
                <pre style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '4px', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                  {JSON.stringify(data, null, 2)}
                </pre>
              </CardContent>
            </Card>
          )}
        </Box>

        <Typography variant="body2" color="text.secondary">Rodapé da página</Typography>
      </Container>
    </Box>
  );
}
