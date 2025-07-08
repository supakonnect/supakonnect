import {
  Box,
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";

// services.ts
import {
  Code,
  Brush,
  Speed,
  Devices,
  Security,
  TrendingUp,
  Storage,
  SupportAgent,
} from "@mui/icons-material";

export const services = [
  {
    title: "Web & App Development",
    description:
      "Custom websites and mobile applications built with modern frameworks.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    description: "Intuitive interfaces and delightful user experiences.",
    icon: Brush,
  },
  {
    title: "Performance Optimization",
    description: "Speed up your site with best practices and tools.",
    icon: Speed,
  },
  {
    title: "Responsive Design",
    description: "Mobile-first layouts that look great on any screen.",
    icon: Devices,
  },
  {
    title: "Security",
    description:
      "Secure your platform with audits, encryption, and best practices.",
    icon: Security,
  },
  {
    title: "SEO & Analytics",
    description:
      "Boost visibility and track engagement with smart SEO strategies.",
    icon: TrendingUp,
  },
  {
    title: "Cloud & Hosting",
    description: "Deploy and scale using modern cloud infrastructure.",
    icon: Storage,
  },
  {
    title: "Technical Support",
    description: "Reliable maintenance and support to keep things running.",
    icon: SupportAgent,
  },
];

export default function ServicesSection() {
  return (
    <Box
    id="services"
      sx={{
        py: 10,
        backgroundImage: `url(/service_bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0,0,0,0.6)",
        textAlign: "center",
        px: 2,
        backgroundAttachment: "fixed"
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={[() => ({
            display: "block",
            textAlign: "center",
            fontWeight: 700,
            letterSpacing: 2,
            mb: 1,
            textTransform: "uppercase",
            color: "white",
          })]}
        >
          Our Services
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          sx={[() => ({
            fontWeight: 800,
            textAlign: "center",
            mb: 6,
            fontFamily: "serif",
            color: "white",
            
          })]}
        >
          What We Offer
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ lg: 3, md: 3, sm: 12, xs: 12 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  boxShadow: 3,
                  textAlign: "center",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  <Avatar
                    sx={{
                      bgcolor: "primary.main",
                      width: 56,
                      height: 56,
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    <service.icon sx={{ color: "#fff" }} />
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
