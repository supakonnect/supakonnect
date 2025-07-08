import {
  Box,
  Typography,
  Container,
  Divider,
  Grid,
  CardMedia,
} from "@mui/material";

export default function AboutSection() {
  return (
    <Box
      sx={[(theme) => ({
        py:4,
        backgroundColor: "#f9f9f9",
        ...theme.applyStyles("dark", {
            backgroundColor: theme.vars?.palette.background.paper
        })
      })]}
      id="about"
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid size={{ lg: 8, md: 8, sm: 12, xs: 12 }}>
            <Box>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 800,
                  textAlign: "center",
                  fontFamily: `"Poppins", "Segoe UI", sans-serif`,
                  mb: 2,
                }}
              >
                Who We Are
              </Typography>

              <Divider
                sx={{
                  width: 60,
                  height: 4,
                  backgroundColor: "primary.main",
                  margin: "0 auto",
                  mb: 4,
                  borderRadius: 2,
                }}
              />

              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  color: "text.secondary",
                  lineHeight: 1.8,
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  fontFamily: `"Poppins", "Segoe UI", sans-serif`,
                }}
              >
                We are a team of passionate designers, developers, and digital
                strategists committed to building impactful web experiences. At
                our core, we believe that great design and clean code go hand in
                hand — transforming bold ideas into scalable, user-focused
                solutions.
                <br />
                <br />
                Driven by creativity and powered by technology, we collaborate
                with startups, growing businesses, and established brands to
                craft websites and digital platforms that don&apos;t just look good —
                they perform. From custom web applications to full-stack
                solutions, we bring clarity to complexity and help our clients
                stand out in a crowded digital world.
                <br />
                <br />
                More than just a web agency, we&apos;re your creative partner. With a
                deep understanding of both design and development, we deliver
                products that align with your vision and business goals. Whether
                you&apos;re launching a new brand, revamping your online presence, or
                scaling your tech stack — we&apos;re here to help you build with
                confidence.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
            <CardMedia
              image="/home_about.jpg"
              component={"img"}
              alt="Who we are section"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
