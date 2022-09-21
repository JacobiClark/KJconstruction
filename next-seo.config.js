/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Jensen Wood Works",
  titleTemplate: "%s | Jensen Wood Works",
  defaultTitle: "Jensen Wood Works",
  description: "Next.js + chakra-ui + TypeScript template",
  canonical: "https://Jensen Wood Works.sznm.dev",
  openGraph: {
    url: "https://Jensen Wood Works.sznm.dev",
    title: "Jensen Wood Works",
    description: "Next.js + chakra-ui + TypeScript template",
    images: [
      {
        url: "https://og-image.sznm.dev/**Jensen Wood Works**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "Jensen Wood Works.sznm.dev og-image",
      },
    ],
    site_name: "Jensen Wood Works",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
