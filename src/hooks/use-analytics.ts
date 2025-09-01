import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    trackPageView: (pageTitle: string, pagePath: string) => void;
    trackFormSubmission: (formData: any) => void;
    trackFileUpload: (fileCount: number, totalSize: number) => void;
  }
}

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when location changes
    if (typeof window !== 'undefined' && window.gtag) {
      const pageTitle = getPageTitle(location.pathname);
      const pagePath = location.pathname;
      
      // Track page view
      window.gtag('event', 'page_view', {
        page_title: pageTitle,
        page_location: window.location.href,
        page_path: pagePath
      });

      // Also use custom tracking function if available
      if (window.trackPageView) {
        window.trackPageView(pageTitle, pagePath);
      }
    }
  }, [location]);

  return {
    trackEvent: (eventName: string, parameters: Record<string, any> = {}) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, parameters);
      }
    },
    trackFormSubmission: (formData: any) => {
      if (typeof window !== 'undefined' && window.trackFormSubmission) {
        window.trackFormSubmission(formData);
      }
    },
    trackFileUpload: (fileCount: number, totalSize: number) => {
      if (typeof window !== 'undefined' && window.trackFileUpload) {
        window.trackFileUpload(fileCount, totalSize);
      }
    }
  };
};

// Helper function to get page titles
const getPageTitle = (pathname: string): string => {
  const titles: Record<string, string> = {
    '/': 'Feroz Energy - Home',
    '/rate-optimization': 'Rate Optimization - Feroz Energy',
    '/bill-management': 'Bill Management - Feroz Energy',
    '/benchmarking': 'Benchmarking - Feroz Energy',
    '/carbon-accounting': 'Carbon Accounting - Feroz Energy',
    '/learn-more': 'Our Process - Feroz Energy',
    '/faq': 'FAQ - Feroz Energy',
    '/blog/utility-tariffs': 'Utility Tariffs Blog - Feroz Energy',
    '/blog/supply-distribution': 'Supply vs Distribution Blog - Feroz Energy',
    '/form-confirmation': 'Form Confirmation - Feroz Energy'
  };
  
  return titles[pathname] || 'Feroz Energy';
};
