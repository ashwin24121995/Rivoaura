import Script from 'next/script';

export function Analytics() {
  const analyticsEndpoint = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;
  const websiteId = process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID;

  // Only render if both environment variables are set
  if (!analyticsEndpoint || !websiteId) {
    return null;
  }

  return (
    <Script
      defer
      src={`${analyticsEndpoint}/umami`}
      data-website-id={websiteId}
      strategy="afterInteractive"
    />
  );
}
