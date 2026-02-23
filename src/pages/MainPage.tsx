import Header from '@/shared/components/header';
import Footer from '@/shared/components/footer';

import Hero from '@/domains/home/hero';
import Insight from '@/domains/home/insight';
import Business from '@/domains/home/business';
import Performance from '@/domains/home/performance';
import FloatingActionButton from '@/shared/components/fab';

export default function MainPage() {
  return (
    <>
      <Header />
      {/* hero section */}
      <Hero />
      {/* insight section */}
      <Insight />
      {/* business section */}
      <Business />
      {/* performance section */}
      <Performance />
      {/* footer section */}
      <Footer />
      {/* navbar anchor */}
      <FloatingActionButton />
    </>
  );
}