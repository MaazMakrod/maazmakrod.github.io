import { BREAKPOINTS } from './styles/helpers';
import { ImageCard, TextCard } from './components';
import { CarouselCard } from './components/carousel-card';
import { CardGrid } from './components/card-grid';
import maazMakrod from './assets/Maaz_Makrod.png'
import file from './assets/file.svg';
import mail from './assets/mail.svg';
import { COLORS } from './styles/theme';
import { Link } from './icons';
import { Navigation } from './components/navigation';

function App() {
  const homePageArgs = {
    width: {
      [BREAKPOINTS.DEFAULT]: "min(95vw, 1600px)",
    },
    height: {
      [BREAKPOINTS.DEFAULT]: "80vh",
    },
    numberRows: {
      [BREAKPOINTS.DEFAULT]: "3",
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
        component: <ImageCard
            src={maazMakrod}
            alt='A picture of me, Maaz Makrod'
            aspectRatio='4/3'
            imageWidth={{ [BREAKPOINTS.DEFAULT]: '100%'}}
            imageHeight={{ [BREAKPOINTS.DEFAULT]: '100%'}}
            objectFit='cover'
            cardWrapperProps={{
              backgroundColor: COLORS.quinary,
              width: { [BREAKPOINTS.DEFAULT]: "auto" },
              height: { [BREAKPOINTS.DEFAULT]: "auto" },
              borderRadius: { [BREAKPOINTS.DEFAULT]: "20px" },
              cardWrapperStyles: {
                animateCardHover: true,
                cardAnimationOptions: {
                  boxShadow: `0 10px 20px ${COLORS.accent}, 0 0 5px rgba(0, 0, 0, 0.1)`,
                },
              },
            }}
          />,
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [1, 2]
        },
        endCoordinate: {
          [BREAKPOINTS.DEFAULT]: [1, 3]
        },
        component: <TextCard 
            useFlex
            horizontalPosition='left'
            verticalPosition='top'
            textProps={[
              {
                content: {
                  text: `Hi there, I'm Maaz! Currently, I study Computer Engineering at the Univeristy of Toronto`,
                  color: COLORS.white,
                  tagName: 'h1',
                  types: ['pLarge'],
                  fade: true,
                }
              }
            ]}
            cardWrapperProps={{
              backgroundColor: COLORS.primary,
              width: { [BREAKPOINTS.DEFAULT]: "100%" },
              height: { [BREAKPOINTS.DEFAULT]: "100%" },
              borderRadius: { [BREAKPOINTS.DEFAULT]: "20px" },
              padding: { [BREAKPOINTS.DEFAULT]: "10px" },
              cardWrapperStyles: {
                blob: true,
                blobOptions: {
                  animateBlobPosition: true,
                  pulseBlob: true,
                  growBlob: true,
                  color: `${COLORS.secondary}24`,
                  border: `${COLORS.tertiary} 10px solid`,
                  outline: `${COLORS.accent} 10px solid`,
                  width: {
                    [BREAKPOINTS.DEFAULT]: "150px",
                    [BREAKPOINTS.SMALL]: "200px",
                    [BREAKPOINTS.MEDIUM]: "250px",
                    [BREAKPOINTS.LARGE]: "350px",
                  },
                  height: {
                    [BREAKPOINTS.DEFAULT]: "150px",
                    [BREAKPOINTS.SMALL]: "200px",
                    [BREAKPOINTS.MEDIUM]: "250px",
                    [BREAKPOINTS.LARGE]: "350px",
                  },
                  [BREAKPOINTS.DEFAULT]: {
                    "border-radius": "60% 40% 30% 70% / 100% 85% 92% 74%",
                    "filter": `drop-shadow(2px 5px 10px ${COLORS.accent})`,
                  },
                  blobStartPosition: {
                    bottom: -30,
                    left: 0,
                  },
                  pulseOptions: {
                    color: `${COLORS.accent}ff`,
                    spread: "5rem",
                    animationOptions: { timing: 2000, options: "infinite" },
                  },
                  blobMovementOptions: {
                    animationOptions: {
                      timing: 10000,
                      options:
                        "cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate forwards",
                    },
                  },
                },
                animateCardHover: true,
                cardAnimationOptions: {
                  boxShadow: `0 10px 20px ${COLORS.accent}, 0 0 5px rgba(0, 0, 0, 0.1)`,
                },
              }
            }}
          />
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [2,1]
        },
        endCoordinate: {
          [BREAKPOINTS.DEFAULT]: [3,2]
        },
        component: <TextCard 
            useFlex
            horizontalPosition='left'
            verticalPosition='bottom'
            textProps={[
              {
                content: {
                  text: `Over the past few years, I've developed some pretty cool stuff. From modeling software, to computation engines, to AI models, and large scale websites`,
                  color: COLORS.primary,
                  tagName: 'h1',
                  types: ['pLarge'],
                  fade: true,
                }
              }
            ]}
            cardWrapperProps={{
              backgroundColor: COLORS.quinary,
              width: { [BREAKPOINTS.DEFAULT]: "100%" },
              height: { [BREAKPOINTS.DEFAULT]: "100%" },
              borderRadius: { [BREAKPOINTS.DEFAULT]: "20px" },
              padding: { [BREAKPOINTS.DEFAULT]: "10px" },
              cardWrapperStyles: {
                blob: true,
                blobOptions: {
                  animateBlobPosition: true,
                  pulseBlob: true,
                  growBlob: true,
                  color: `${COLORS.primary}45`,
                  border: `${COLORS.quaternary} 10px solid`,
                  outline: `${COLORS.accent} 10px solid`,
                  width: {
                    [BREAKPOINTS.DEFAULT]: "150px",
                    [BREAKPOINTS.SMALL]: "200px",
                    [BREAKPOINTS.MEDIUM]: "250px",
                    [BREAKPOINTS.LARGE]: "350px",
                  },
                  height: {
                    [BREAKPOINTS.DEFAULT]: "150px",
                    [BREAKPOINTS.SMALL]: "200px",
                    [BREAKPOINTS.MEDIUM]: "250px",
                    [BREAKPOINTS.LARGE]: "350px",
                  },
                  [BREAKPOINTS.DEFAULT]: {
                    "border-radius": "75% 25% 73% 27% / 28% 70% 30% 72%",
                    "filter": `drop-shadow(2px 5px 10px ${COLORS.accent})`,
                  },
                  blobMovementOptions: {
                    20: {
                      translate: "20% -35%",
                      "border-radius": "75% 25% 73% 27% / 28% 70% 30% 72%",
                    },
                    50: {
                      translate: "13% 0%",
                      "border-radius": "24% 76% 33% 67% / 28% 70% 30% 72%",
                      rotate: "-41deg",
                    },
                    100: {
                      translate: "-10% 30%",
                      "border-radius": "42% 58% 57% 43% / 53% 28% 72% 47%",
                      rotate: "60deg",
                    },
                    customAnimationName: 'secondary-blob-movement',
                    animationOptions: {
                      timing: 10000,
                      options:
                        "cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate forwards",
                    },
                  },
                  blobStartPosition: {
                    right: 0,
                    top: 5,
                  },
                  pulseOptions: {
                    color: `${COLORS.accent}ff`,
                    spread: "5rem",
                    animationOptions: { timing: 2000, options: "infinite" },
                  },
                },
                animateCardHover: true,
                cardAnimationOptions: {
                  boxShadow: `0 10px 20px ${COLORS.accent}, 0 0 5px rgba(0, 0, 0, 0.1)`,
                },
              }
            }}
          />
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [2, 3],
        },
        component: <ImageCard
            src={file}
            alt='My resume'
            aspectRatio='4/3'
            imageWidth={{ [BREAKPOINTS.DEFAULT]: '100%'}}
            imageHeight={{ [BREAKPOINTS.DEFAULT]: '100%'}}
            objectFit='fill'
            cardWrapperProps={{
              backgroundColor: COLORS.quinary,
              width: { [BREAKPOINTS.DEFAULT]: "100%" },
              height: { [BREAKPOINTS.DEFAULT]: "auto" },
              borderRadius: { [BREAKPOINTS.DEFAULT]: "20px" },
              cardWrapperStyles: {
                animateCardHover: true,
                cardAnimationOptions: {
                  boxShadow: `0 10px 20px ${COLORS.accent}, 0 0 5px rgba(0, 0, 0, 0.1)`,
                },
                overlay: true,
                overlayOptions: {
                  slideUpOverlay: true,
                },
              },
              icon: {
                SvgImage: Link,
                width: {
                  [BREAKPOINTS.DEFAULT]: '20px'
                },
                height: {
                  [BREAKPOINTS.DEFAULT]: '20px'
                },
                url: 'mailto:maaz.makrod@gmail.com',
                color: COLORS.quaternary,
                position: {
                  bottom: 10,
                  left: 10,
                },
                hoverOptions: {
                  color: COLORS.accent,
                  timing: 100,
                  easingFunction: 'ease-in-out',
                  filter: `drop-shadow(2px 5px 10px ${COLORS.accent})`,
                },
                tag: 'a',
                zIndex: 10
              },
              overlay:<TextCard 
                  useFlex
                  horizontalPosition='right'
                  verticalPosition='top'
                  textProps={[
                    {
                      content: {
                        text: `Take a look at my `,
                        color: COLORS.white,
                        tagName: 'p',
                        types: ['pLarge', 'bold'],
                        fade: true,
                        nestedText: [
                          {
                            content:{
                              text: `resume`,
                              color: COLORS.white,
                              tagName: 'span',
                              types: ['pLarge'],
                              margin: '0',
                              fade: true,
                              underline: true,
                              underlineColor: `${COLORS.white} 0 0`,
                              underlineSize: {
                                [BREAKPOINTS.DEFAULT]: '2px',
                              },
                            }
                          }
                        ]
                      }
                    }
                  ]}
                  cardWrapperProps={{
                    backgroundColor: COLORS.primary,
                    width: { [BREAKPOINTS.DEFAULT]: "100%" },
                    height: { [BREAKPOINTS.DEFAULT]: "100%" },
                    borderRadius: { [BREAKPOINTS.DEFAULT]: "20px" },
                    padding: { [BREAKPOINTS.DEFAULT]: "10px" },
                    cardWrapperStyles: {
                      blob: true,
                      blobOptions: {
                        animateBlobPosition: false,
                        pulseBlob: false,
                        growBlob: false,
                        color: `${COLORS.secondary}24`,
                        border: `${COLORS.tertiary} 10px solid`,
                        outline: `${COLORS.accent} 10px solid`,
                        width: {
                          [BREAKPOINTS.DEFAULT]: "100px",
                        },
                        height: {
                          [BREAKPOINTS.DEFAULT]: "100px",
                        },
                        [BREAKPOINTS.DEFAULT]: {
                          "border-radius": "21% 79% 66% 34% / 58% 48% 52% 42% ",
                          "filter": `drop-shadow(2px 5px 10px ${COLORS.accent})`,
                        },
                        blobStartPosition: {
                          top: 35,
                          left: 40,
                        },
                      },
                    }
                  }}
                />,
            }}
          />,
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [3, 3],
        },
        component: <ImageCard
            src={mail}
            alt='Send me an email'
            aspectRatio='4/3'
            imageWidth={{ [BREAKPOINTS.DEFAULT]: '100%'}}
            imageHeight={{ [BREAKPOINTS.DEFAULT]: '100%'}}
            objectFit='fill'
            cardWrapperProps={{
              backgroundColor: COLORS.primary,
              width: { [BREAKPOINTS.DEFAULT]: "100%" },
              height: { [BREAKPOINTS.DEFAULT]: "auto" },
              borderRadius: { [BREAKPOINTS.DEFAULT]: "20px" },
              cardWrapperStyles: {
                animateCardHover: true,
                cardAnimationOptions: {
                  boxShadow: `0 10px 20px ${COLORS.accent}, 0 0 5px rgba(0, 0, 0, 0.1)`,
                },
                overlay: true,
                overlayOptions: {
                  slideUpOverlay: true,
                },
              },
              overlayBackgroundColor: COLORS.primary,
              icon: {
                SvgImage: Link,
                width: {
                  [BREAKPOINTS.DEFAULT]: '20px'
                },
                height: {
                  [BREAKPOINTS.DEFAULT]: '20px'
                },
                url: 'mailto:maaz.makrod@gmail.com',
                color: COLORS.quaternary,
                position: {
                  top: 10,
                  right: 10,
                },
                hoverOptions: {
                  color: COLORS.accent,
                  timing: 100,
                  easingFunction: 'ease-in-out',
                  filter: `drop-shadow(2px 5px 10px ${COLORS.accent})`,
                },
                tag: 'a',
                zIndex: 10
              },
              overlay:<TextCard 
                  useFlex
                  horizontalPosition='left'
                  verticalPosition='bottom'
                  textProps={[
                    {
                      content: {
                        text: `Send me an `,
                        color: COLORS.primary,
                        tagName: 'p',
                        types: ['pLarge', 'bold'],
                        fade: true,
                        nestedText: [
                          {
                            content:{
                              text: `email`,
                              color: COLORS.primary,
                              tagName: 'span',
                              types: ['pLarge'],
                              margin: '0',
                              fade: true,
                              underline: true,
                              underlineColor: `${COLORS.primary} 0 0`,
                              underlineSize: {
                                [BREAKPOINTS.DEFAULT]: '2px',
                              },
                            }
                          }
                        ]
                      }
                    }
                  ]}
                  cardWrapperProps={{
                    backgroundColor: COLORS.quinary,
                    width: { [BREAKPOINTS.DEFAULT]: "100%" },
                    height: { [BREAKPOINTS.DEFAULT]: "100%" },
                    borderRadius: { [BREAKPOINTS.DEFAULT]: "20px" },
                    padding: { [BREAKPOINTS.DEFAULT]: "10px" },
                    cardWrapperStyles: {
                      blob: true,
                      blobOptions: {
                        animateBlobPosition: false,
                        pulseBlob: false,
                        growBlob: false,
                        color: `${COLORS.primary}45`,
                        border: `${COLORS.quaternary} 10px solid`,
                        outline: `${COLORS.accent} 10px solid`,
                        width: {
                          [BREAKPOINTS.DEFAULT]: "100px",
                        },
                        height: {
                          [BREAKPOINTS.DEFAULT]: "100px",
                        },
                        [BREAKPOINTS.DEFAULT]: {
                          "border-radius": "50% 40% 30% 50% / 40% 85% 22% 14%",
                          "filter": `drop-shadow(2px 5px 10px ${COLORS.accent})`,
                        },
                        blobStartPosition: {
                          top: 10,
                          left: 15,
                        },
                      },
                    }
                  }}
                />,
            }}
          />,
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [4, 1],
        },
        endCoordinate: {
          [BREAKPOINTS.DEFAULT]: [5, 3],
        },
        component: <CarouselCard
          width = {{ [BREAKPOINTS.DEFAULT]: "100%" }}
          height = {{ [BREAKPOINTS.DEFAULT]: "100%" }}
          slides = {[
            <TextCard
              cardWrapperProps={{
                width: { [BREAKPOINTS.DEFAULT]: "100%" },
                height: { [BREAKPOINTS.DEFAULT]: "100%" },
                backgroundColor: COLORS.primary,
                borderRadius: { [BREAKPOINTS.DEFAULT]: "20px" },
                cardWrapperStyles: {
                  blob: true,
                  blobOptions: {
                    animateBlobPosition: true,
                    pulseBlob: true,
                    growBlob: true,
                    color: `${COLORS.secondary}24`,
                    border: `${COLORS.tertiary} 10px solid`,
                    outline: `${COLORS.accent} 10px solid`,
                    width: {
                      default: "150px",
                      small: "200px",
                      medium: "250px",
                      large: "350px",
                    },
                    height: {
                      default: "150px",
                      small: "200px",
                      medium: "250px",
                      large: "350px",
                    },
                    [BREAKPOINTS.DEFAULT]: {
                      "border-radius": "60% 40% 30% 70% / 100% 85% 92% 74%",
                      "filter": `drop-shadow(2px 5px 10px ${COLORS.accent})`,
                    },
                    blobStartPosition: {
                      top: 0,
                      left: 20,
                    },
                    pulseOptions: {
                      color: `${COLORS.accent}ff`,
                      spread: "5rem",
                      animationOptions: { timing: 2000, options: "infinite" },
                    },
                    blobMovementOptions: {
                      20: {
                        translate: "-50% -55%",
                        "border-radius": "75% 25% 30% 70% / 50% 33% 67% 50%",
                      },
                      40: {
                        translate: "10% 50%",
                        "border-radius": "39% 61% 57% 43% / 28% 33% 67% 72%",
                        rotate: "-41deg",
                      },
                      70: {
                        translate: "-30% 30%",
                        "border-radius": "39% 61% 80% 20% / 60% 62% 38% 40% ",
                        rotate: "60deg",
                      },
                      100: {
                        translate: "30% 55%",
                        "border-radius": "42% 58% 57% 43% / 53% 28% 72% 47%",
                        rotate: "60deg",
                      },
                      customAnimationName: 'tertiary-blob-movement',
                      animationOptions: {
                        timing: 10000,
                        options:
                          "cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate forwards",
                      },
                    }
                  },
                  animateCardHover: true,
                  cardAnimationOptions: {
                    boxShadow: `0 10px 20px ${COLORS.accent}, 0 0 5px rgba(0, 0, 0, 0.1)`,
                  },
                },
              }}
              textProps={[
                {
                  content: {
                    text: `Projects`,
                    color: COLORS.white,
                    tagName: 'p',
                    types: ['h1', 'bold'],
                    fade: true,
                    underline: true,
                    underlineColor: `${COLORS.white} 0 0`,
                    underlineSize: {
                      [BREAKPOINTS.DEFAULT]: '5px',
                    },
                  }
                }
              ]}
            />,
          ]}
          borderRadius ={{
            [BREAKPOINTS.DEFAULT]: "20px",
          }}
          autoplay={false}
          playBtn
          playBtnProps= {{
            position: {
              top: 5,
              right: 5,
            },
            width: { [BREAKPOINTS.DEFAULT]: "50px" },
            height: { [BREAKPOINTS.DEFAULT]: "50px" },
            color: COLORS.quaternary,
            hoverOptions: {
              color: COLORS.accent,
              timing: 1000,
              easingFunction: "ease-in-out",
              filter: `drop-shadow(2px 5px 10px ${COLORS.accent})`,
            },
          }}
          paginationBullets
          paginationBulletOptions = {{
            backgroundColor: `${COLORS.quaternary}61`,
            size: 10,
            color: COLORS.quinary,
            hoverOptions: {
              color: COLORS.accent,
              timing: 500,
            },
          }}
        />,
      },
    ],
  };

  return (
    <>
      <Navigation links={[
        {
          text: 'Home',
          url: '/',
        },
        {
          text: 'Experience',
          url: '/',
        },
        {
          text: 'Projects',
          url: '/',
        },
        {
          text: 'About',
          url: '/',
        }
      ]}/>
      <CardGrid {...homePageArgs} />
    </>
  )
}

export default App
