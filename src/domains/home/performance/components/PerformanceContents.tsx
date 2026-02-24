import { Box } from '@chakra-ui/react';

import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { PerformanceCard } from './PerformanceCard';
import { Impactor } from '@/shared/components/common/Impactor';

interface PerformanceContentsProps {
  items: any[];
}

export function PerformanceContents(props: PerformanceContentsProps) {
  const { items } = props;
  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,      
    centerMode: false,
    speed: 5000,         
    slidesToShow: 3,     
    slidesToScroll: 1,   
    autoplaySpeed: 3000, 
    autoplay: true,      
    vertical: true,
  };

  return (
    <Impactor direction="left" once>
      <Box w="100%" h="100%">
        <Slider {...settings}>
          {items.map((item) => (
            <PerformanceCard key={item.id} {...item} />
          ))}
        </Slider>
      </Box>
    </Impactor>
  );
}