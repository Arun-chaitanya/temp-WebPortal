import clsx from "clsx";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";

import styles from "./Carousel.module.scss";
import useBreakpoint from "@hooks/useBreakpoint";
import LeftCarouselArrow from "@icons/LeftCarouselArrow";
import RightCarouselArrow from "@icons/RightCarouselArrow";

const Carousel: React.FC<CarouselProps> = ({ components, className, removeNavigators, classes, ...props }) => {
  const isMobile = useBreakpoint({ max: "md" });
  return (
    <div className={clsx(className, styles.root)}>
      <Swiper
        spaceBetween={40}
        modules={[Autoplay, Navigation, Pagination]}
        navigation={{ prevEl: "#prevEl", nextEl: "#nextEl" }}
        pagination={isMobile ? { clickable: true } : false}
        loop
        {...props}
      >
        {components.map((component, index) => (
          <SwiperSlide key={index}>{component}</SwiperSlide>
        ))}
      </Swiper>
      {!removeNavigators && !isMobile && (
        <>
          <div id="prevEl" className={clsx(styles.navButton, styles.prev, classes?.leftNav)}>
            <LeftCarouselArrow />
          </div>
          <div id="nextEl" className={clsx(styles.navButton, styles.next, classes?.rightNav)}>
            <RightCarouselArrow />
          </div>
        </>
      )}
    </div>
  );
};

type CarouselProps = SwiperProps & {
  components: any[];
  className?: string;
  classes?: { leftNav?: string; rightNav?: string };
  removeNavigators?: boolean;
};

export default Carousel;
