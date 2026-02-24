import Header from '@/shared/components/header';
import Footer from '@/shared/components/footer';

import Hero from '@/domains/home/hero';
import Insight from '@/domains/home/insight';
import Business from '@/domains/home/business';
import Portfolio from '@/domains/home/portfolio';
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
      {/* portfolio section */}
      <Portfolio />
      {/* footer section */}
      <Footer />
      {/* navbar anchor */}
      <FloatingActionButton />
    </>
  );
}