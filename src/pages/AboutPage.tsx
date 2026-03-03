import { useEffect } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';

import Header from '@/shared/components/header';
import Footer from '@/shared/components/footer';
import SubHero from '@/shared/components/sub/SubHero';
import FloatingActionButton from '@/shared/components/fab';

import About from '@/domains/about';

export default function AboutPage() {
  const { type } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  if (!type || !['introduction', 'location'].includes(type)) {
    return <Navigate to={`/about/introduction`} replace />;
  }

  return (
    <>
      <Header />
      <SubHero />
      <About type={type as 'introduction' | 'location'} />
      <Footer />
      <FloatingActionButton />
    </>
  );
}