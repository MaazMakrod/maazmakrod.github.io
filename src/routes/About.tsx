import {
  BREAKPOINTS,
  mapCssToBreakpoints,
  mapStylesValuesToBreakpoints,
} from "../styles/helpers";
import { ImageCard, TextCard } from "../components";
import { CarouselCard } from "../components/carousel-card";
import { CardGrid } from "../components/card-grid";
import maazMakrod from "../assets/Maaz_Makrod.png";
import file from "../assets/file.svg";
import mail from "../assets/mail.svg";
import {
  COLORS,
  CONTENT_HEIGHT,
  CONTENT_WIDTH,
  FONT,
  FONT_TYPES,
} from "../styles/theme";
import { Link } from "../icons";
import {
  CAROUSEL_DEFAULT_PROPS,
  generateCardWrapperProps,
  ICON_DEFAULT_PROPS,
} from "../utils/propHelpers";
import CardWrapper, {
  CardWrapperProps,
} from "../components/card-wrapper/CardWrapper";
import { IconProps } from "../components/icon/Icon";
import { CardGridProps } from "../components/card-grid/CardGrid";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import { TypesOptions } from "../components/text/Text";

const StyledTypeWriterWrapper = styled.span<{
  types: TypesOptions[];
  color: string;
}>`
  ${(props) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let styles: any = {};
    for (const type of props.types) {
      styles = mapStylesValuesToBreakpoints(FONT_TYPES[type], styles);
    }

    styles[BREAKPOINTS.DEFAULT] = {
      ...styles[BREAKPOINTS.DEFAULT],
      color: props.color,
      "font-family": FONT,
    };

    return [...mapCssToBreakpoints(styles)];
  }}
`;

function About() {
  const aboutPageArgs = {
    width: {
      [BREAKPOINTS.DEFAULT]: CONTENT_WIDTH,
    },
    height: {
      [BREAKPOINTS.DEFAULT]: CONTENT_HEIGHT,
    },
    numberRows: {
      [BREAKPOINTS.DEFAULT]: "3",
    },
    numberCols: {
      [BREAKPOINTS.DEFAULT]: "4",
    },
    gap: {
      [BREAKPOINTS.DEFAULT]: "1rem",
    },
    childComponents: [
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [1, 1],
        },
        component: (
          <TextCard
            useFlex
            horizontalPosition="middle"
            verticalPosition="middle"
            textProps={[
              {
                content: {
                  text: `Hi! 👋`,
                  color: COLORS.primary,
                  tagName: "p",
                  types: ["h1", "bold"],
                  fade: true,
                  margin: "1rem 0",
                },
              },
            ]}
            cardWrapperProps={{
              ...(generateCardWrapperProps(
                "secondary",
                "10px",
                {
                  blob: true,
                  blobAnimations: {
                    animateBlobPosition: true,
                    pulseBlob: true,
                    growBlob: true,
                  },
                  blobSize: "small",
                  blobPosition: {
                    right: 0,
                    top: 5,
                  },
                  startingBlobShape: 1,
                  blobMovementOptions: 0,
                },
                true,
              ) as CardWrapperProps),
            }}
          />
        ),
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [2, 1],
        },
        component: (
          <ImageCard
            src={maazMakrod}
            alt="A picture of me, Maaz Makrod"
            aspectRatio="4/3"
            imageWidth={{ [BREAKPOINTS.DEFAULT]: "100%" }}
            imageHeight={{ [BREAKPOINTS.DEFAULT]: "100%" }}
            objectFit="cover"
            lazyLoad
            cardWrapperProps={{
              ...(generateCardWrapperProps(
                "primary",
                "0px",
                {
                  blob: false,
                },
                true,
              ) as CardWrapperProps),
              centerContent: true,
            }}
          />
        ),
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [3, 1],
        },
        endCoordinate: {
          [BREAKPOINTS.DEFAULT]: [4, 1],
        },
        component: (
          <CarouselCard
            slides={[
              <TextCard
                cardWrapperProps={{
                  ...(generateCardWrapperProps("primary", "10px", {
                    blob: true,
                    blobAnimations: {
                      growBlob: false,
                      pulseBlob: false,
                      animateBlobPosition: false,
                    },
                    blobSize: "large",
                  }) as CardWrapperProps),
                  borderRadius: {
                    [BREAKPOINTS.DEFAULT]: "0px",
                  },
                }}
                textProps={[
                  {
                    content: {
                      text: `My current tech interests?`,
                      color: COLORS.white,
                      tagName: "p",
                      types: ["h1", "bold"],
                      fade: true,
                      margin: "1rem 0",
                    },
                  },
                ]}
              />,
              <TextCard
                cardWrapperProps={{
                  ...(generateCardWrapperProps("secondary", "10px", {
                    blob: true,
                    blobAnimations: {
                      growBlob: false,
                      pulseBlob: false,
                      animateBlobPosition: false,
                    },
                    blobSize: "large",
                    startingBlobShape: 2,
                  }) as CardWrapperProps),
                  borderRadius: {
                    [BREAKPOINTS.DEFAULT]: "0px",
                  },
                }}
                textProps={[
                  {
                    content: {
                      text: `Network Protocol Simulators - `,
                      color: COLORS.primary,
                      tagName: "p",
                      types: ["pLarge", "bold"],
                      fade: true,
                      margin: "1rem 0",
                      nestedText: [
                        {
                          content: {
                            text: ` During my fourth year capstone course I will be working in a team under `,
                            tagName: "span",
                            types: ["p", "bold"],
                            fade: true,
                          },
                        },
                        {
                          content: {
                            text: `Professor JJ Garcia-Luna-Aceves`,
                            tagName: "a",
                            color: COLORS.primary,
                            types: ["p", "bold"],
                            fade: true,
                            underline: true,
                            underlineColor: `${COLORS.primary} 0 0`,
                            underlineSize: {
                              [BREAKPOINTS.DEFAULT]: "2px",
                            },
                            url: "https://www.ece.utoronto.ca/people/garcia-luna-aceves-j-j/",
                            target: "_blank",
                          },
                        },
                        {
                          content: {
                            text: ` to develop the next generation of network protocol simulators`,
                            tagName: "span",
                            types: ["p", "bold"],
                            fade: true,
                          },
                        },
                      ],
                    },
                  },
                ]}
              />,
              <TextCard
                cardWrapperProps={{
                  ...(generateCardWrapperProps("primary", "10px", {
                    blob: true,
                    blobAnimations: {
                      growBlob: false,
                      pulseBlob: false,
                      animateBlobPosition: false,
                    },
                    blobSize: "large",
                    startingBlobShape: 1,
                  }) as CardWrapperProps),
                  borderRadius: {
                    [BREAKPOINTS.DEFAULT]: "0px",
                  },
                }}
                textProps={[
                  {
                    content: {
                      text: `Infrastructure as Code (IaC) - `,
                      color: COLORS.white,
                      tagName: "p",
                      types: ["pLarge", "bold"],
                      fade: true,
                      margin: "1rem 0",
                      nestedText: [
                        {
                          content: {
                            text: `As part of my internship at `,
                            tagName: "span",
                            types: ["p", "bold"],
                            fade: true,
                            margin: "1rem 0",
                          },
                        },
                        {
                          content: {
                            text: `Konrad Group,`,
                            tagName: "a",
                            types: ["p", "bold"],
                            fade: true,
                            margin: "1rem 0",
                            underline: true,
                            color: COLORS.white,
                            underlineColor: `${COLORS.white} 0 0`,
                            underlineSize: {
                              [BREAKPOINTS.DEFAULT]: "2px",
                            },
                            url: "/experience",
                          },
                        },
                        {
                          content: {
                            text: ` I worked on developing a client's infrastructure using Terraform, sparking my interest in IaC.`,
                            tagName: "a",
                            types: ["p", "bold"],
                            fade: true,
                          },
                        },
                      ],
                    },
                  },
                ]}
              />,
              <TextCard
                cardWrapperProps={{
                  ...(generateCardWrapperProps("secondary", "10px", {
                    blob: true,
                    blobAnimations: {
                      growBlob: false,
                      pulseBlob: false,
                      animateBlobPosition: false,
                    },
                    blobSize: "large",
                    startingBlobShape: 3,
                  }) as CardWrapperProps),
                  borderRadius: {
                    [BREAKPOINTS.DEFAULT]: "0px",
                  },
                }}
                textProps={[
                  {
                    content: {
                      text: `Data Structures and Algorithms - `,
                      color: COLORS.primary,
                      tagName: "p",
                      types: ["pLarge", "bold"],
                      fade: true,
                      margin: "1rem 0",
                      nestedText: [
                        {
                          content: {
                            text: `Although my education at UofT built a strong fundamentals for this, I have found an enjoyment in tackling LeetCode problems to continually improve my understanding of them.`,
                            tagName: "span",
                            types: ["p", "bold"],
                            fade: true,
                            margin: "1rem 0",
                          },
                        },
                      ],
                    },
                  },
                ]}
              />,
            ]}
            autoplay
            autoplaySpeed={5000}
            {...CAROUSEL_DEFAULT_PROPS}
          />
        ),
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [1, 2],
        },
        endCoordinate: {
          [BREAKPOINTS.DEFAULT]: [1, 3],
        },
        component: (
          <CardWrapper
            {...(generateCardWrapperProps(
              "primary",
              "10px",
              {
                blob: true,
                blobAnimations: {
                  animateBlobPosition: true,
                  pulseBlob: true,
                  growBlob: true,
                },
                blobSize: "medium",
                blobPosition: {
                  bottom: -30,
                  left: 0,
                },
                startingBlobShape: 0,
              },
              true,
            ) as CardWrapperProps)}
          >
            <StyledTypeWriterWrapper
              types={["h2", "bold"]}
              color={COLORS.white}
            >
              I'm a
              <Typewriter
                options={{
                  strings: [
                    "Computer Engineering Student",
                    "Software Developer",
                    "problem solver",
                    "avid book reader",
                    "soccer & ice hockey player",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </StyledTypeWriterWrapper>
          </CardWrapper>
        ),
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [2, 2],
        },
        endCoordinate: {
          [BREAKPOINTS.DEFAULT]: [3, 2],
        },
        component: (
          <TextCard
            useFlex
            horizontalPosition="middle"
            verticalPosition="middle"
            flexDir="column"
            textProps={[
              {
                content: {
                  text: `I started coding when I was 16 and never stopped enjoying it! As a student, I have amassed 2 years of professional software engineering `,
                  color: COLORS.primary,
                  tagName: "p",
                  types: ["p", "bold"],
                  fade: true,
                  margin: "0 0 10px 0",
                  nestedText: [
                    {
                      content: {
                        text: `experience.`,
                        color: COLORS.primary,
                        tagName: "a",
                        fade: true,
                        margin: "0",
                        types: ["p"],
                        underline: true,
                        underlineColor: `${COLORS.primary} 0 0`,
                        underlineSize: {
                          [BREAKPOINTS.DEFAULT]: "2px",
                        },
                        url: "/experience",
                      },
                    },
                  ],
                },
              },
              {
                content: {
                  text: `That being said, I believe that coding outside of work and school is also very important. So you can often find me working on a side project.`,
                  color: COLORS.primary,
                  tagName: "p",
                  fade: true,
                  margin: "0",
                  types: ["p", "bold"],
                },
              },
            ]}
            cardWrapperProps={{
              ...(generateCardWrapperProps(
                "secondary",
                "10px",
                {
                  blob: true,
                  blobAnimations: {
                    animateBlobPosition: true,
                    pulseBlob: true,
                    growBlob: true,
                  },
                  blobSize: "medium",
                  blobPosition: {
                    right: 0,
                    top: 5,
                  },
                  startingBlobShape: 1,
                  blobMovementOptions: 0,
                },
                true,
              ) as CardWrapperProps),
            }}
          />
        ),
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [2, 3],
        },
        component: (
          <ImageCard
            src={file}
            alt="My resume"
            aspectRatio="4/3"
            imageWidth={{ [BREAKPOINTS.DEFAULT]: "100%" }}
            imageHeight={{ [BREAKPOINTS.DEFAULT]: "100%" }}
            objectFit="fill"
            lazyLoad
            cardWrapperProps={
              {
                ...generateCardWrapperProps(
                  "secondary",
                  "0px",
                  {
                    blob: false,
                  },
                  true,
                  {
                    overlay: true,
                    slideUpOverlay: true,
                  },
                ),
                icon: {
                  SvgImage: Link,
                  url: "mailto:maaz.makrod@gmail.com",
                  position: {
                    bottom: 10,
                    left: 10,
                  },
                  ...ICON_DEFAULT_PROPS["primary"],
                } as IconProps,
                overlay: (
                  <TextCard
                    useFlex
                    horizontalPosition="right"
                    verticalPosition="top"
                    textProps={[
                      {
                        content: {
                          text: `Check out my `,
                          color: COLORS.white,
                          tagName: "p",
                          types: ["pLarge", "bold"],
                          fade: true,
                          margin: "0",
                          nestedText: [
                            {
                              content: {
                                text: `resume`,
                                color: COLORS.white,
                                tagName: "span",
                                types: ["pLarge"],
                                margin: "0",
                                fade: true,
                                underline: true,
                                underlineColor: `${COLORS.white} 0 0`,
                                underlineSize: {
                                  [BREAKPOINTS.DEFAULT]: "2px",
                                },
                              },
                            },
                          ],
                        },
                      },
                    ]}
                    cardWrapperProps={
                      generateCardWrapperProps("primary", "10px", {
                        blob: true,
                        blobAnimations: {
                          animateBlobPosition: false,
                          pulseBlob: false,
                          growBlob: false,
                        },
                        blobSize: "small",
                        startingBlobShape: 2,
                        blobPosition: {
                          top: 35,
                          left: 40,
                        },
                      }) as CardWrapperProps
                    }
                  />
                ),
              } as CardWrapperProps
            }
          />
        ),
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [3, 3],
        },
        component: (
          <ImageCard
            src={mail}
            alt="Send me an email"
            aspectRatio="4/3"
            imageWidth={{ [BREAKPOINTS.DEFAULT]: "100%" }}
            imageHeight={{ [BREAKPOINTS.DEFAULT]: "100%" }}
            objectFit="fill"
            lazyLoad
            cardWrapperProps={
              {
                ...generateCardWrapperProps(
                  "primary",
                  "0px",
                  {
                    blob: false,
                  },
                  true,
                  {
                    overlay: true,
                    slideUpOverlay: true,
                  },
                ),
                overlayBackgroundColor: COLORS.primary,
                icon: {
                  SvgImage: Link,
                  url: "mailto:maaz.makrod@gmail.com",
                  position: {
                    top: 10,
                    right: 10,
                  },
                  ...ICON_DEFAULT_PROPS["primary"],
                } as IconProps,
                overlay: (
                  <TextCard
                    useFlex
                    horizontalPosition="left"
                    verticalPosition="bottom"
                    textProps={[
                      {
                        content: {
                          text: `Send me an `,
                          color: COLORS.primary,
                          tagName: "p",
                          types: ["pLarge", "bold"],
                          fade: true,
                          margin: "0",
                          nestedText: [
                            {
                              content: {
                                text: `email`,
                                color: COLORS.primary,
                                tagName: "span",
                                types: ["pLarge"],
                                margin: "0",
                                fade: true,
                                underline: true,
                                underlineColor: `${COLORS.primary} 0 0`,
                                underlineSize: {
                                  [BREAKPOINTS.DEFAULT]: "2px",
                                },
                              },
                            },
                          ],
                        },
                      },
                    ]}
                    cardWrapperProps={
                      generateCardWrapperProps("secondary", "10px", {
                        blob: true,
                        blobAnimations: {
                          animateBlobPosition: false,
                          pulseBlob: false,
                          growBlob: false,
                        },
                        blobSize: "small",
                        startingBlobShape: 3,
                        blobPosition: {
                          top: 10,
                          left: 15,
                        },
                      }) as CardWrapperProps
                    }
                  />
                ),
              } as CardWrapperProps
            }
          />
        ),
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [4, 2],
        },
        endCoordinate: {
          [BREAKPOINTS.DEFAULT]: [4, 3],
        },
        component: (
          <TextCard
            useFlex
            horizontalPosition="middle"
            verticalPosition="middle"
            flexDir="column"
            textProps={[
              {
                content: {
                  text: `Life can't be all about work, during my downtime I enjoy reading a good book and going to the gym. When I was younger I played hockey and soccer at competitive levels, although its hard for me to play hockey often, you can still find me kicking around a soccer ball.`,
                  color: COLORS.primary,
                  tagName: "p",
                  types: ["p", "bold"],
                  fade: true,
                  margin: "0 0 10px 0",
                },
              },
            ]}
            cardWrapperProps={{
              ...(generateCardWrapperProps(
                "secondary",
                "10px",
                {
                  blob: true,
                  blobAnimations: {
                    animateBlobPosition: true,
                    pulseBlob: true,
                    growBlob: true,
                  },
                  blobSize: "medium",
                  blobPosition: {
                    right: 0,
                    top: 5,
                  },
                  startingBlobShape: 3,
                  blobMovementOptions: 1,
                },
                true,
              ) as CardWrapperProps),
            }}
          />
        ),
      },
    ],
  };

  return <CardGrid {...(aboutPageArgs as CardGridProps)} />;
}

export default About;
