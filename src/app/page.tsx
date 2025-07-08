import PageClient from "./PageClient";

export const metadata = {
  title: "Supakonnect Advanced Technology Ltd",
  description: "Your Number One Digital Partner",
  openGraph: {
    title: "Supakonnect Advanced Technology Ltd",
    description: "Your Number One Digital Partner",
    url: "https://www.supakonnect.com",
    siteName: "Supakonnect Advanced Technology Ltd",
    images: [
      {
        url: "https://www.supakonnect.com/og-image.png",
        width: 1024,
        height: 1024,
        alt: "Supakonnect Advanced Technology Ltd",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supakonnect Advanced Technology Ltd",
    description: "Your Number One Digital Partner",
    siteId: '38972892020893dj902',
    creator: `Supakonnect`,
    creatorId: "4902idk",
    site: `Supakonnect Advanced Technology Ltd`,
    images: ["https://www.supakonnect.com/og-image.png"],
  },
};

export default function Home() {
  return (<PageClient />);
}
