import { Box, Container, Typography, Card, CardContent } from '@mui/material';

function AboutMe() {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)',
        backgroundColor: 'var(--color-bg-primary)',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          className="text-gradient"
          sx={{
            textAlign: 'center',
            mb: 4,
            fontWeight: 700,
          }}
        >
          About Me
        </Typography>

        <Card
          sx={{
            backgroundColor: 'var(--color-bg-secondary)',
            p: 4,
            textAlign: 'center',
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ color: 'var(--color-text-primary)', mb: 2 }}
            >
              About Me 페이지
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}
            >
              About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default AboutMe;
