import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A sleek and modern personal portfolio for a frontend developer.",
    url: "/portfolio.jpg",
  },
  {
    title: "E-commerce Store",
    description:
      "A full-stack online store with Stripe payments and admin dashboard.",
    url: "/ecommerce.jpg",
  },
  {
    title: "SaaS Dashboard",
    description:
      "Responsive SaaS admin dashboard with analytics and user management.",
    url: "/saas.jpg",
  },
  {
    title: "Real Estate App",
    description:
      "Browse and list properties with interactive maps and filters.",
    url: "/realestate.jpg",
  },
  {
    title: "Food Delivery App",
    description:
      "UI for a food delivery platform with restaurant menus and tracking.",
    url: "/food-delivery.jpg",
  },
  {
    title: "Blog Platform",
    description:
      "A modern blogging platform with markdown support and user profiles.",
    url: "/blog.jpg",
  },
  {
    title: "Fitness Tracker",
    description: "Track workouts, nutrition, and progress with visual charts.",
    url: "/fitness.jpg",
  },
  {
    title: "Event Booking System",
    description:
      "Book, manage, and attend events with real-time calendar sync.",
    url: "/event.jpg",
  },
  {
    title: "Travel Booking App",
    description:
      "Plan and book trips with interactive maps, flight deals, and itineraries.",
    url: "/travel.jpg",
  },
];

export default function ProjectSection() {
  return (
    <Box id="portfolio" sx={[(theme) => ({
        backgroundColor: "#f9f9f9",
        py: 8, 
        px: { xs: 2, md: 6},
        ...theme.applyStyles("dark", {
            backgroundColor: theme.vars?.palette.background.paper
        })
      })]}>
      <Typography sx={[() => ({
            display: "block",
            textAlign: "center",
            fontWeight: 700,
            letterSpacing: 2,
            mb: 1,
            textTransform: "uppercase",
            // color: "white",
          })]} variant="h2" align="center" gutterBottom>
        Our Portfolio
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 3,
                boxShadow: 3,
                cursor: "pointer",
                "&:hover .overlay": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              }}
            >
              <Box
                component="img"
                src={project.url}
                alt={project.title}
                sx={{
                  width: "100%",
                  height: 280,
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.6)",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  px: 2,
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", mb: 1, fontFamily: "Poppins" }}
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: "Poppins" }}>
                  {project.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
