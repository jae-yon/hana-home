import { useEffect } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';

import Header from '@/shared/components/header';
import Footer from '@/shared/components/footer';
import SubHero from '@/shared/components/sub/SubHero';
import FloatingActionButton from '@/shared/components/fab';

import Support from '@/domains/support';

export default function PortfolioPage() {
  const { type } = useParams();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  if (!type || !['faq', 'notice', 'inquiry'].includes(type)) {
    return <Navigate to={`/support/faq`} replace />;  
  }
    
  return (
    <>
      <Header />
      <SubHero />
      <Support type={type as 'faq' | 'notice' | 'inquiry'} />
      <Footer />
      <FloatingActionButton />
    </>
  );
}