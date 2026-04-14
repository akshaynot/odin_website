// Utility function to update meta tags dynamically for each page
export const updateMetaTags = (config: {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}) => {
  // Update title
  document.title = config.title;
  updateMetaTag('name', 'title', config.title);
  updateMetaTag('property', 'og:title', config.title);
  updateMetaTag('property', 'twitter:title', config.title);

  // Update description
  updateMetaTag('name', 'description', config.description);
  updateMetaTag('property', 'og:description', config.description);
  updateMetaTag('property', 'twitter:description', config.description);

  // Update canonical if provided
  if (config.canonical) {
    updateCanonicalLink(config.canonical);
  }

  // Update OG image if provided
  if (config.ogImage) {
    updateMetaTag('property', 'og:image', config.ogImage);
    updateMetaTag('property', 'twitter:image', config.ogImage);
  }
};

const updateMetaTag = (type: 'name' | 'property', name: string, content: string) => {
  let tag = document.querySelector(`meta[${type}="${name}"]`) as HTMLMetaElement | null;
  
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(type, name);
    document.head.appendChild(tag);
  }
  
  tag.content = content;
};

const updateCanonicalLink = (url: string) => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  
  link.href = url;
};
