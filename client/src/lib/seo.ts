interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
}

/**
 * Set SEO meta tags dynamically
 */
export function setSEO({
  title,
  description,
  keywords = "",
  url = window.location.href,
  image = "/og-image.png",
}: SEOProps): void {
  // Set title
  document.title = title;

  // Set or update meta tags
  setMetaTag("description", description);
  setMetaTag("keywords", keywords);

  // Open Graph tags
  setMetaTag("og:title", title, "property");
  setMetaTag("og:description", description, "property");
  setMetaTag("og:url", url, "property");
  setMetaTag("og:image", image, "property");
  setMetaTag("og:type", "website", "property");

  // Twitter Card tags
  setMetaTag("twitter:card", "summary_large_image");
  setMetaTag("twitter:title", title);
  setMetaTag("twitter:description", description);
  setMetaTag("twitter:image", image);

  // Canonical URL
  setCanonicalURL(url);

  // Add structured data
  addStructuredData({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "toolsmith",
    description: description,
    url: url,
    applicationCategory: "UtilitiesApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  });
}

/**
 * Set or update a meta tag
 */
function setMetaTag(
  name: string,
  content: string,
  attribute: string = "name"
): void {
  let element = document.querySelector(
    `meta[${attribute}="${name}"]`
  ) as HTMLMetaElement;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

/**
 * Set canonical URL
 */
function setCanonicalURL(url: string): void {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
}

/**
 * Add structured data (JSON-LD)
 */
function addStructuredData(data: any): void {
  const existingScript = document.querySelector(
    'script[type="application/ld+json"]'
  );

  if (existingScript) {
    existingScript.textContent = JSON.stringify(data);
  } else {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }
}

/**
 * Generate sitemap data (for static generation)
 */
export function generateSitemapData(): Array<{
  url: string;
  changefreq: string;
  priority: number;
}> {
  const baseUrl = window.location.origin;

  return [
    {
      url: `${baseUrl}/`,
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools/loan-calculator`,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/json-formatter`,
      changefreq: "weekly",
      priority: 0.9,
    },
  ];
}
