import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
}

export default function SEO({
  title,
  description,
  keywords = 'fantasy cricket, free fantasy cricket, cricket game, fantasy sports, RIVOAURA, cricket contest',
  ogImage = 'https://rivoauralive.com/og-image.jpg',
  ogType = 'website',
  canonical,
  noindex = false,
}: SEOProps) {
  const fullTitle = `${title} | RIVOAURA - Free Fantasy Cricket`;
  const siteUrl = 'https://rivoauralive.com';
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : siteUrl);

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');
    updateMetaTag('googlebot', noindex ? 'noindex, nofollow' : 'index, follow');
    updateMetaTag('author', 'RIVOAURA');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:site_name', 'RIVOAURA', true);
    updateMetaTag('og:locale', 'en_IN', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Alternate for mobile
    let alternateLink = document.querySelector('link[rel="alternate"][media]') as HTMLLinkElement;
    if (!alternateLink) {
      alternateLink = document.createElement('link');
      alternateLink.setAttribute('rel', 'alternate');
      alternateLink.setAttribute('media', 'only screen and (max-width: 640px)');
      document.head.appendChild(alternateLink);
    }
    alternateLink.setAttribute('href', canonicalUrl);

  }, [fullTitle, description, keywords, ogImage, ogType, canonicalUrl, noindex]);

  return null;
}
