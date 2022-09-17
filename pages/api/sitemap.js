const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  // An array with your links
  const links = [
    { url: "/index", changefreq: "daily", priority: 0.3 },
    { url: "/turning", changefreq: "daily", priority: 0.3 },
    { url: "/milling", changefreq: "daily", priority: 0.3 },
    { url: "/design", changefreq: "daily", priority: 0.3 },
    { url: "/general", changefreq: "daily", priority: 0.3 },
    { url: "/calculator", changefreq: "daily", priority: 0.3 },
    { url: "/capabilities", changefreq: "daily", priority: 0.3 },
    { url: "/career", changefreq: "daily", priority: 0.3 },
    { url: "/contacts", changefreq: "daily", priority: 0.3 },
    { url: "/gallery", changefreq: "daily", priority: 0.3 },
    { url: "/privacy", changefreq: "daily", priority: 0.3 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
