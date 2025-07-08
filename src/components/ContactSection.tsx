"use client";
import * as React from "react";
import {
  Typography,
  Container,
  Grid,
  Box,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  FacebookOutlined,
  Twitter,
} from "@mui/icons-material";
import Link from "next/link";

// Define TypeScript interfaces
// interface FormData {
//   subject: string;
//   email: string;
//   message: string;
// }
const ContactSection = () => {
  // const [formData, setFormData] = useState<FormData>({
  //   subject: "",
  //   email: "supakonnectnologies@gmail.com",
  //   message: "",
  // });

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const router = useRouter()

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if(!formData.subject || !formData.email || !formData.message){
  //     return alert("Please fill all fields")
  //   }
  //   const { email, message, subject } = formData
  //   const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  //   console.log(mailtoLink)
  //   // router.push(mailtoLink)
  //   // window.location.replace(mailtoLink)
  //   window.location.href = mailtoLink;
  //   // redirect(mailtoLink)
  //   // setFormData(prev => ({...prev, subject: "", message: "" }));
  // };

  const social = [
      { name: "Facebook", url: "https://www.facebook.com", icon: <FacebookOutlined  /> },
      { name: "Twitter", url: "https://x.com/@supakonnect", icon: <Twitter /> },
    ];
  return (
    <Box
      id="contact"
      sx={[
        (theme) => ({
          backgroundColor: "primary.main",
          color: "white",
          py: 8,
          // boxShadow: 8,
          ...theme.applyStyles("dark", {
            backgroundColor: theme.vars?.palette.grey[900],
          }),
        }),
      ]}
    >
      <Container>
        <Typography variant="h3"
        sx={{
          display: "block",
          textAlign: "center",
          fontWeight: 800,
          letterSpacing: 2,
          mb: 6,
          textTransform: "uppercase",
        }} gutterBottom>
          Contact Us
        </Typography>
        <Typography>You can easily reach out to us through email or by phone. Just send us a mail or call us on the numbers provided below.</Typography>
        <Typography>You can also visit our physical office address below; Thank you in advance.</Typography>
        <Grid container spacing={4}>
          {/* <Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
            <form onSubmit={handleSubmit} action={"mailto:supakonnectnologies@gmail.com"}>
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
                required
                sx={[
                  (theme) => ({
                    bgcolor: "white",
                    ...theme.applyStyles("dark", {
                      bgcolor: "transparent",
                    }),
                  }),
                ]}
              />
              
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
                multiline
                required
                rows={4}
                sx={[
                  (theme) => ({
                    bgcolor: "white",
                    ...theme.applyStyles("dark", {
                      bgcolor: "transparent",
                    }),
                  }),
                ]}
              />
              <Box sx={{ display: "block", textAlign: "center" }}>
                <Button
                  type="submit"
                  variant="outlined"
                  color="secondary"
                  size="large"
                  sx={{ mt: 2, borderRadius: 30 }}
                  // href={"mailto:supakonnectnologies@gmail.com?subject=Post%20Feed%20%26%20Timeline&body=Client-side%20validation%20prevents%20unnecessary%20server%20requests.%0A%0AExample%3A%20Checks%20for%20empty%20fields%20or%20invalid%20email%20formats.%0A%0AServer%20Action%20generates%20the%20mailto%3A%20URL%20and%20handles%20edge%20cases.%0A%0AOn%20success%2C%20the%20client%20redirects%20the%20user%20to%20the%20generated%20mailto%3A%20URL"}
                  // LinkComponent={Link}
                  // target="_top"
                >
                  Send Message
                </Button>
              </Box>
            </form>
          </Grid> */}
          <Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
          <Typography variant="h6" sx={{py: 2}}>Get in Touch</Typography>

            <Stack
              direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
              // alignItems={{lg: "center", md: "center", sm: "start", xs: "flex-start"}}
              // justifyContent={{lg: "center", md: "center", sm: "start", xs: "flex-start"}}
              spacing={1}
              sx={{ width: "100%" }}
            >
              <Stack direction={"row"} spacing={1} sx={{ width: {lg: 'auto', md: "auto", sm: "100%", xs: "100%"} }}>
                <EmailIcon />
                <Typography>supakonnect@gmail.com</Typography>
              </Stack>
  
              <Stack direction={"row"} spacing={1}>
                <PhoneIcon />
                <Typography>+2347079925852</Typography>
              </Stack>
            </Stack>
            <Typography variant="h6" sx={{py: 2}}>Our Location</Typography>
            <Typography>Welfare Quarters, Makurdi, Benue State </Typography>
            <Typography variant="h6" sx={{py: 2}}>Follow Us On</Typography>
            <Box
            sx={{
              flexGrow: 2,
              // justifyContent: "center",
              display: "flex",
              gap: 2,
            }}
          >
            {social.map((item) => (
              <Tooltip title={item.name} key={item.name}>
              <IconButton
                LinkComponent={Link}
                href={item.url}
                target="_blank"
                size="small"
                sx={[
                  (theme) => ({
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 30,
                    width: 30,
                    borderRadius: "50%",
                    border: `1px solid ${theme.vars?.palette.common.white}`,
                    ['&:hover']: {
                      color: item.name === "Facebook" ? theme.vars?.palette?.info.dark : theme.vars?.palette.info.light,
                      border: `1px solid ${item.name === "Facebook" ? theme.vars?.palette?.info.dark : theme.vars?.palette.info.light}`,
                      transition: "color 1.2s ease-in-out"
                    }
                  }),
                ]}
              >
                {item.icon}
              </IconButton>
              </Tooltip>
            ))}
          </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
