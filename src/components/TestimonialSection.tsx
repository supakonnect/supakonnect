import { Box, Container, Typography, Avatar } from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Terzulum Mefa",
    company: "TechNova Inc.",
    avatar: "/terzulum.jpg",
    comment:
      "Working with this team was a pleasure. They delivered everything on time and exceeded expectations with their creative approach.",
    id: 1,
  },
  {
    name: "Aondover Pineter",
    company: "BrightWare Solutions",
    avatar: "/pineter.jpg",
    comment:
      "Excellent communication and top-notch development skills. Our website is faster and more user-friendly than ever.",
    id: 2,
  },
  {
    name: "Kadoon Aondona",
    company: "StartFlow",
    avatar: "/kadoon.jpg",
    comment:
      "They understood our vision immediately and brought it to life with clean code and beautiful design. Highly recommended!",
    id: 3,
  },
];

const MotionTypography = motion.create(Typography);

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Box sx={{ py: 10 }} id="testimonials">
      <Typography
        variant="h3"
        sx={{
          display: "block",
          textAlign: "center",
          fontWeight: 800,
          letterSpacing: 2,
          mb: 6,
          textTransform: "uppercase",
        }}
      >
        What Our Clients Say
      </Typography>
      <Container maxWidth="md">
        <Box>
          <Swiper
            grabCursor={true}
            effect={"fade"}
            modules={[Autoplay, EffectFade]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            slidesPerView={1}
            loop={true}
            pagination={false}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="mySwiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={item.id}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      margin: "0 auto",
                    }}
                  >
                    <Avatar
                      src={item.avatar}
                      alt={item.name}
                      sx={{ height: 200, width: 200 }}
                    />
                  </Box>
                  <MotionTypography
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                    sx={{
                      //   color: "white",
                      fontWeight: 900,
                      fontFamily: `"Poppins", "Segoe UI", "Helvetica Neue", "Arial", sans-serif`,
                      letterSpacing: "-0.5px",
                      textShadow: "1px 1px 2px rgba(0,0,0,0.25)",
                      lineHeight: "1em",
                      background:
                        "linear-gradient(90deg,rgb(189, 10, 141), #00C9FF,rgb(128, 8, 96))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: {
                        lg: "4em",
                        md: "3em",
                        sm: "2.5em",
                        xs: "2.2em",
                      },
                    }}
                    // variant="h1"
                  >
                    {item.name}
                  </MotionTypography>

                  <MotionTypography
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                    sx={{
                      //   color: "white",
                      fontFamily: `"Poppins", "Segoe UI", "Helvetica Neue", "Arial", sans-serif`,
                      py: 1,
                    }}
                    variant="h4"
                  >
                    {item.company}
                  </MotionTypography>

                  <MotionTypography
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
                    sx={{
                      py: 1,
                      //   color: "white",
                      fontFamily: "sans-serif",
                      //   textAlign: "center",
                      width: 450,
                      maxWidth: "100%",
                    }}
                    variant="h6"
                  >
                    “{item.comment}”
                  </MotionTypography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
