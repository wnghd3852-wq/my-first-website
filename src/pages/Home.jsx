import { Link } from 'react-router-dom';
import { Box, Container, Typography, Card, CardContent, Button, Grid } from '@mui/material';

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        className="hero-gradient"
        sx={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Card
            sx={{
              backgroundColor: 'rgba(30, 90, 110, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--color-border-dark)',
              p: 4,
            }}
          >
            <CardContent>
              <Typography
                variant="h2"
                component="h1"
                className="text-gradient"
                sx={{ mb: 2, fontWeight: 700 }}
              >
                Hero Section
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}
              >
                여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* About Me Section */}
      <Box
        sx={{
          backgroundColor: 'var(--color-bg-secondary)',
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Card
            sx={{
              backgroundColor: 'var(--color-bg-primary)',
              p: 4,
              textAlign: 'center',
            }}
          >
            <CardContent>
              <Typography
                variant="h3"
                component="h2"
                sx={{ mb: 3, color: 'var(--color-text-primary)' }}
              >
                About Me
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'var(--color-text-secondary)', mb: 3 }}
              >
                여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.
              </Typography>
              <Button
                variant="contained"
                component={Link}
                to="/about"
                sx={{
                  backgroundColor: 'var(--color-button-primary)',
                  color: 'var(--color-text-dark)',
                  '&:hover': {
                    backgroundColor: 'var(--color-button-hover)',
                  },
                }}
              >
                더 알아보기
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Skill Tree Section */}
      <Box
        sx={{
          backgroundColor: 'var(--color-bg-primary)',
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Card
            sx={{
              backgroundColor: 'var(--color-bg-secondary)',
              p: 4,
              textAlign: 'center',
            }}
          >
            <CardContent>
              <Typography
                variant="h3"
                component="h2"
                sx={{ mb: 3, color: 'var(--color-text-primary)' }}
              >
                Skill Tree
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'var(--color-text-secondary)' }}
              >
                여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box
        sx={{
          backgroundColor: 'var(--color-bg-secondary)',
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Card
            sx={{
              backgroundColor: 'var(--color-bg-primary)',
              p: 4,
              textAlign: 'center',
            }}
          >
            <CardContent>
              <Typography
                variant="h3"
                component="h2"
                sx={{ mb: 3, color: 'var(--color-text-primary)' }}
              >
                Projects
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'var(--color-text-secondary)', mb: 3 }}
              >
                여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다.
              </Typography>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                {[1, 2, 3, 4].map((item) => (
                  <Grid item xs={6} md={3} key={item}>
                    <Box
                      sx={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        borderRadius: 2,
                        height: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid var(--color-border-dark)',
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: 'var(--color-text-muted)' }}
                      >
                        Project {item}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Button
                variant="contained"
                component={Link}
                to="/projects"
                sx={{
                  backgroundColor: 'var(--color-button-primary)',
                  color: 'var(--color-text-dark)',
                  '&:hover': {
                    backgroundColor: 'var(--color-button-hover)',
                  },
                }}
              >
                더 보기
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        sx={{
          backgroundColor: 'var(--color-bg-primary)',
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Card
            sx={{
              backgroundColor: 'var(--color-bg-secondary)',
              p: 4,
              textAlign: 'center',
            }}
          >
            <CardContent>
              <Typography
                variant="h3"
                component="h2"
                sx={{ mb: 3, color: 'var(--color-text-primary)' }}
              >
                Contact
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'var(--color-text-secondary)' }}
              >
                여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: 'var(--color-primary-dark)',
          py: 3,
          textAlign: 'center',
          borderTop: '1px solid var(--color-border-dark)',
        }}
      >
        <Typography variant="body2" sx={{ color: 'var(--color-text-muted)' }}>
          &copy; 2026 Portfolio. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
