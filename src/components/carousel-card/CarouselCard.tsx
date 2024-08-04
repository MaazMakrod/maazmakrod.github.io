import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import {
  BREAKPOINTS,
  mapCssToBreakpoints,
  mapStylesValuesToBreakpoints,
  Position,
  StylesValue,
} from "../../styles/helpers";
import buildStyles, { buildSlideStyles } from "./styles";
import { Play, Pause } from "../../icons";
import { Icon } from "../icon";
import { HoverOptions } from "../icon/styles";

type PlayPauseBtnProps = {
  width: StylesValue;
  height: StylesValue;
  color?: string;
  position: Position;
  hoverOptions?: HoverOptions;
};

type PaginationBulletOptions = {
  size: number;
  backgroundColor: string;
  color: string;
  hoverOptions?: HoverOptions;
};

export type CarouselCardProps = {
  slides: Array<ReactNode>;
  width: StylesValue;
  height: StylesValue;
  display?: StylesValue;
  borderRadius?: StylesValue;
  autoplay?: boolean;
  playBtn?: boolean;
  playBtnProps?: PlayPauseBtnProps;
  paginationBullets?: boolean;
  paginationBulletOptions?: PaginationBulletOptions;
  autoplaySpeed?: number;
};

type PaginationBulletProps = {
  size: number;
};

const PaginationBullet: React.FC<PaginationBulletProps> = ({ size }) => {
  return (
    <svg width={size} height={size * 2}>
      <circle className="shape" r={size / 2} cx={size / 2} cy={size / 2} />
    </svg>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-types
const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

const CarouselCard: React.FC<CarouselCardProps> = ({
  slides,
  width,
  display,
  height,
  borderRadius,
  autoplay,
  playBtn,
  playBtnProps,
  paginationBullets,
  paginationBulletOptions,
  autoplaySpeed = 2000,
}) => {
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const timer = useRef<undefined | NodeJS.Timeout>(undefined);
  const currentSlideIndex = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [playing, setPlaying] = useState(autoplay);
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  useEffect(() => {
    slideRefs.current = slideRefs.current.slice(0, slides.length);
  }, [slides]);

  const scrollNextCardIntoView = useCallback(() => {
    currentSlideIndex.current = (currentSlideIndex.current + 1) % slides.length;
    setActiveSlideIdx(currentSlideIndex.current);
    slideRefs.current[currentSlideIndex.current]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [currentSlideIndex, slides.length]);

  useMemo(() => {
    if (playing && timer.current === undefined) {
      timer.current = setInterval(() => {
        scrollNextCardIntoView();
      }, autoplaySpeed);
    } else if (!playing) {
      clearInterval(timer.current);
      timer.current = undefined;
    }
  }, [timer, scrollNextCardIntoView, playing]);

  const handleContainerScroll = () => {
    if (!playing && slideRefs?.current?.[0] && containerRef?.current) {
      const currentScrolledSlideId = Math.round(
        containerRef.current.scrollLeft / slideRefs.current[0].offsetWidth,
      );
      currentSlideIndex.current = currentScrolledSlideId;
      setActiveSlideIdx(currentScrolledSlideId);
    }
  };
  const debouncedHandleContainerScroll = debounce(handleContainerScroll);

  return (
    <StyledCarouselWrapper display={display}>
      {playBtn && playBtnProps && (
        <Icon
          SvgImage={playing ? Pause : Play}
          tag="button"
          onClick={() => setPlaying(!playing)}
          zIndex={1}
          {...playBtnProps}
        />
      )}

      <StyledCarouselContainer
        width={width}
        height={height}
        borderRadius={borderRadius}
        autoplay={playing}
        ref={containerRef}
        onScroll={debouncedHandleContainerScroll}
      >
        {slides.map((slide, i) => (
          <StyledCarouselSlide
            width={width}
            height={height}
            key={`carousel-slide-${i}`}
            ref={(el) => (slideRefs.current[i] = el)}
          >
            {slide}
          </StyledCarouselSlide>
        ))}
      </StyledCarouselContainer>

      {paginationBullets && paginationBulletOptions && (
        <StyledPaginationWrapper size={paginationBulletOptions.size}>
          <StyledPaginationBulletContainer
            size={paginationBulletOptions.size}
            backgroundColor={paginationBulletOptions.backgroundColor}
          >
            {slides.map((_, i) => (
              <Icon
                SvgImage={PaginationBullet}
                tag="button"
                width={{
                  [BREAKPOINTS.DEFAULT]: `${paginationBulletOptions.size}px`,
                }}
                height={{
                  [BREAKPOINTS.DEFAULT]: `${paginationBulletOptions.size}px`,
                }}
                color={paginationBulletOptions.color}
                svgProps={{
                  size: paginationBulletOptions.size,
                }}
                key={`pagination-bullet-${i}`}
                onClick={() => {
                  slideRefs.current[i]?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center",
                  });
                  currentSlideIndex.current = i;
                  setActiveSlideIdx(i);
                }}
                hoverOptions={paginationBulletOptions.hoverOptions}
                parentHover={i === activeSlideIdx}
              />
            ))}
          </StyledPaginationBulletContainer>
        </StyledPaginationWrapper>
      )}
    </StyledCarouselWrapper>
  );
};

const StyledCarouselWrapper = styled.div<{ display?: StylesValue }>`
  position: relative;
  isolation: isolate;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  ${(props) =>
    mapCssToBreakpoints(
      mapStylesValuesToBreakpoints({
        display: props.display,
      }),
    )}
`;

const StyledCarouselSlide = styled.div<
  Pick<CarouselCardProps, "width" | "height">
>`
  box-sizing: border-box;
  ${(props) => buildSlideStyles(props.width, props.height)}
`;

const StyledCarouselContainer = styled.div<
  Pick<CarouselCardProps, "width" | "height" | "borderRadius" | "autoplay">
>`
  box-sizing: border-box;
  ${(props) =>
    buildStyles(props.width, props.height, props.borderRadius, props.autoplay)}
`;

const StyledPaginationBulletContainer = styled.div<
  Pick<PaginationBulletOptions, "size" | "backgroundColor">
>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  border-radius: ${(props) => props.size * 2}px;
  background-color: ${(props) => props.backgroundColor};
  padding: ${(props) => props.size}px;
  width: fit-content;
  margin: auto;
`;

const StyledPaginationWrapper = styled.div<
  Pick<PaginationBulletOptions, "size">
>`
  box-sizing: border-box;
  position: absolute;
  bottom: ${(props) => props.size * 2}px;
  z-index: 1;
  width: 100%;
`;

export default CarouselCard;
