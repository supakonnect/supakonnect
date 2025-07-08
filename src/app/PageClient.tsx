"use client";
import * as React from "react";
import { Typography, Container, Box } from "@mui/material";
import {
  AboutSection,
  ContactSection,
  CoursesSection,
  HeroSection,
  MainNavbar,
  ProjectSection,
  ServicesSection,
  TestimonialSection,
} from "@/components";

const PageClient: React.FC = () => {
  return (
    <Box sx={{ maxWidth: "100vw", width: "100%", overflow: "hidden" }}>
      <MainNavbar />

      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <ProjectSection />

      <CoursesSection />

      <TestimonialSection />

      <ContactSection />

      <Box
        sx={[
          (theme) => ({
            backgroundColor: "primary.dark",
            color: "white",
            py: 4,
            boxShadow: 8,
            textAlign: "center",
            ...theme.applyStyles("dark", {
              backgroundColor: theme.vars?.palette.background.default,
            }),
          }),
        ]}
      >
        <Container>
          <Typography variant="body1">
            © {new Date().getFullYear()} Supakonnect Advanced Technology Ltd. All rights
            reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default PageClient;
