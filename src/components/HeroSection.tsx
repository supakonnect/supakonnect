"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Autoplay,
  Pagination,
} from "swiper/modules";
import { Box, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Crafting Modern Web Experiences",
    subtitle: "Custom websites that drive results",
    description:
      "We design and develop high-performance websites tailored to your brand and business goals. From startups to enterprises, we turn ideas into digital success stories.",
    url: "/hero2.jpg",
    id: 1,
  },
  {
    title: "Design. Code. Deliver.",
    subtitle: "End-to-end web solutions for your business",
    description:
      "Our expert team builds sleek, responsive, and scalable web platforms using the latest technologies — ensuring your site is fast, secure, and user-friendly.",
    url: "/hero3.jpg",
    id: 2,
  },
  {
    title: "Your Digital Partner",
    subtitle: "Web solutions that grow with you",
    description:
      "Whether it's a new build or a redesign, we collaborate closely with clients to deliver websites that engage users and drive conversions. Let's bring your vision to life.",
    url: "/hero1.jpg",
    id: 3,
  },
];

const MotionTypography = motion.create(Typography);


const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box>
      <Swiper
        grabCursor={true}
        effect={"fade"}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {sections.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Box
              sx={{
                backgroundImage: `url(${item.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(0,0,0,0.6)",
                textAlign: "center",
                px: 2,
              }}
            >
              <MotionTypography
                initial={{ opacity: 0, y: 20 }}
                animate={
                  activeIndex === index
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                sx={{
                  color: "white",
                  fontWeight: 900,
                  fontFamily: `"Poppins", "Segoe UI", "Helvetica Neue", "Arial", sans-serif`,
                  letterSpacing: "-0.5px",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.25)",
                  lineHeight: "1em",
                  background:
                    "linear-gradient(90deg,rgb(189, 10, 141), #00C9FF,rgb(128, 8, 96))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: {lg: "7em", md: "6em", sm: "4.5em", xs: "4.2em"}
                }}
                // variant="h1"
              >
                {item.title}
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
                  color: "white",
                  fontFamily: `"Poppins", "Segoe UI", "Helvetica Neue", "Arial", sans-serif`,
                  py: 1,
                  
                }}
                variant="h4"
              >
                {item.subtitle}
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
                  color: "white",
                  fontFamily: "sans-serif",
                  textAlign: "center",
                  width: 450,
                  maxWidth: "100%",
                }}
                variant="h6"
              >
                {item.description}
              </MotionTypography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroSection;
