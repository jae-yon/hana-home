import { useEffect } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';

import Header from '@/shared/components/header';
import Footer from '@/shared/components/footer';
import SubHero from '@/shared/components/sub/SubHero';
import FloatingActionButton from '@/shared/components/fab';

import Business from '@/domains/business';

export default function BusinessPage() {
  const { type } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  if (!type || !['re-powering', 'profit-calculator'].includes(type)) {
    return <Navigate to={`/business/re-powering`} replace />;
  }

  return (
    <>
      <Header />
      <SubHero />
      <Business type={type as 're-powering' | 'profit-calculator'} />
      <Footer />
      <FloatingActionButton />
    </>
  );
}