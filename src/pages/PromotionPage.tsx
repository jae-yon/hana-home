import { useEffect } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';

import Promotion from '@/domains/promotion';

import Header from '@/shared/components/header';
import Footer from '@/shared/components/footer';
import SubHero from '@/shared/components/sub/SubHero';
import FloatingActionButton from '@/shared/components/fab';

export default function PromotionPage() {
  const { type } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  if (!type || !['social-contribution'].includes(type)) {
    return <Navigate to={`/promotion/social-contribution`} replace />;
  }

  return (
    <>
      <Header />
      <SubHero />
      <Promotion type={type as 'social-contribution'} />
      <Footer />
      <FloatingActionButton />
    </>
  );
}