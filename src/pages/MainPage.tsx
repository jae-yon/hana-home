import Header from '@/shared/components/header';
import Footer from '@/shared/components/footer';

import Hero from '@/domains/home/hero';
import Insight from '@/domains/home/insight';

export default function MainPage() {
  return (
    <>
      <Header />
      {/* hero section */}
      <Hero />
      {/* insight section */}
      <Insight />

      {/* footer section */}
      <Footer />
    </>
  );
}