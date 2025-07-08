import {
  Box,
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

// services.ts

const courses = [
  {
    id: 1,
    title: "Fundamental Courses",
    courses: [
      {
        title: "Computer Basics",
        url: "basic1.jpg",
        sections: [
          "Basic computer & master skills (windows 10)",
          "Organizing file folders (Windows 10)",
        ],
      },

      {
        title: "Microsoft suite",
        url: "basic2.jpg",
        sections: [
          "Microsoft excel",
          "Microsoft power point",
          "Microsoft publisher",
          "Microsoft Word",
          "Mail Merge",
        ],
      },
      {
        title: "Internet & Software",
        url: "portfolio.jpg",
        sections: [
          "Email",
          "Corel draw",
          "Zoom clouds meet",
          "Network",
          "Software",
          "Hardware",
        ],
      },
      {
        title: "Google App Suite",
        url: "ecommerce.jpg",
        sections: [
          "Google and Android",
          "Google Calendar",
          "Google dots & sheets",
          "Google drive & google photo",
          "Gmail",
        ],
      },
    ],
  },

  {
    id: 2,
    title: "Advanced Courses",
    courses: [
      {
        title: "Frontend Development",
        url: "saas.jpg",
        sections: [
          "HTML/CSS",
          "Reactjs/Cypress",
          "Javascript/Typescript",
        ],
      },
      {
        title: "Backend Development",
        url: "advanced2.jpg",
        sections: ["Nodejs", "Python/Fastapi", "Javascript/Typescript"],
      },
      {
        title: "Database Design",
        url: "realestate.jpg",
        sections: [
          "Mysql",
          "Postgresql",
          "Mongodb",
          "Redis",
          "Firebase",
          "Supabase",
        ],
      },
      {
        title: "Fullstack Development",
        url: "advanced4.jpg",
        sections: [
          "React/Nextjs",
          "Python/Django",
          "Python/Fastapi",
          "React/Nodejs",
        ],
      },
    ],
  },
];

const CoursesSection = () => {
  return (
    <Box
      id="courses"
      sx={{
        py: 10,
        backgroundImage: `url(/courses.jpg)`,
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
        backgroundAttachment: "fixed",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={[
            () => ({
              display: "block",
              textAlign: "center",
              fontWeight: 700,
              letterSpacing: 2,
              mb: 1,
              textTransform: "uppercase",
              color: "white",
            }),
          ]}
        >
          Our Courses
        </Typography>

        <Typography
          variant="h6"
          component="h6"
          sx={[
            () => ({
              fontWeight: 800,
              textAlign: "center",
              mb: 6,
              fontFamily: "serif",
              color: "white",
            }),
          ]}
        >
          Check out our courses;
        </Typography>

        <Grid container spacing={4}>
          {courses.map((item, index) => (
            <Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }} key={index}>
              <Box>
                <Typography
                  variant="h3"
                  sx={[
                    () => ({
                      display: "block",
                      textAlign: "center",
                      fontWeight: 700,
                      letterSpacing: 2,
                      mb: 1,
                      textTransform: "uppercase",
                      color: "white",
                    }),
                  ]}
                >
                  {item.title}
                </Typography>
                <Grid container spacing={4}>
                  {item.courses.map((el) => (
                    <Grid
                      size={{ lg: 3, md: 3, sm: 12, xs: 12 }}
                      key={el.title}
                    >
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
                        <CardMedia component={"img"} image={el.url} />
                        <CardContent>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 700, mb: 1 }}
                          >
                            {el.title}
                          </Typography>
                          {el.sections.map((sec, idx) => (
                            <Typography
                              key={idx}
                              variant="body2"
                              color="text.secondary"
                            >
                              {sec}
                            </Typography>
                          ))}
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CoursesSection;
