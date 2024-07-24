import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MOCK_CARD_WRAPPER_PROPS, MOCK_CAROUSEL_PROPS, MOCK_IMAGE_CARD_PROPS, MOCK_TEXT_PROPS } from './styles/mocks';
import { BREAKPOINTS } from './styles/helpers';
import { ImageCard, TextCard } from './components';
import { CarouselCard } from './components/carousel-card';
import { CardGrid } from './components/card-grid';

function App() {
  const imageCardArgs = {
    ...MOCK_IMAGE_CARD_PROPS(),
    cardWrapperProps: {
      width: { [BREAKPOINTS.DEFAULT]: "100%" },
      height: { [BREAKPOINTS.DEFAULT]: "100%" },
      borderRadius: { [BREAKPOINTS.DEFAULT]: "20px" },
      cardWrapperStyles: {
        animateCardHover: true,
        cardAnimationOptions: {
          boxShadow: "0 15px 20px rgb(184 209 223), 0 0 5px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  };
  
  const textCardProps = {
    cardWrapperProps: {
      ...MOCK_CARD_WRAPPER_PROPS(),
      width: { [BREAKPOINTS.DEFAULT]: "100%" },
      height: { [BREAKPOINTS.DEFAULT]: "100%" },
    },
    textProps: MOCK_TEXT_PROPS(),
  };
  
  const carouselCardArgs = {
    ...MOCK_CAROUSEL_PROPS(true),
    width: { [BREAKPOINTS.DEFAULT]: "100%" },
    height: { [BREAKPOINTS.DEFAULT]: "100%" },
  };
  
  const cardGridArgs = {
    width: {
      [BREAKPOINTS.DEFAULT]: "90vw",
    },
    height: {
      [BREAKPOINTS.DEFAULT]: "80vh",
    },
    numberRows: {
      [BREAKPOINTS.DEFAULT]: "5",
    },
    numberCols: {
      [BREAKPOINTS.DEFAULT]: "5",
    },
    gap: {
      [BREAKPOINTS.DEFAULT]: "1rem",
    },
    childComponents: [
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [1, 1],
        },
        endCoordinate: {
          [BREAKPOINTS.DEFAULT]: [2, 2],
        },
        component: <ImageCard {...imageCardArgs} />,
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [3, 1],
        },
        endCoordinate: {
          [BREAKPOINTS.DEFAULT]: [5, 5],
        },
        component: <CarouselCard {...carouselCardArgs} />,
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [1, 3],
        },
        endCoordinate: {
          [BREAKPOINTS.DEFAULT]: [2, 5],
        },
        component: <TextCard {...textCardProps} />,
      },
    ],
  };

  return (
    <>
     <CardGrid {...cardGridArgs} />
    </>
  )
}

export default App
