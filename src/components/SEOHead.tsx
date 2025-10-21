import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  keywords, 
  image = '/developer-portfolio.jpg',
  url = 'https://your-portfolio.com' 
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Professional Developer" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#06B6D4" />
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Professional Developer",
          "jobTitle": "Flutter & Laravel Developer",
          "description": description,
          "url": url,
          "image": image,
          "sameAs": [
            "https://github.com/yourusername",
            "https://linkedin.com/in/yourprofile"
          ],
          "knowsAbout": [
            "Flutter Development",
            "Laravel Development", 
            "Mobile App Development",
            "Web Development",
            "Payment Gateway Integration",
            "ERP Development",
            "CRM Development"
          ],
          "offers": {
            "@type": "Service",
            "serviceType": "Software Development",
            "areaServed": "Worldwide"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;