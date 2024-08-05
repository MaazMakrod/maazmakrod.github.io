import { BREAKPOINTS } from "../styles/helpers";
import { ImageCard, TextCard } from "../components";
import { CardGrid } from "../components/card-grid";
import maazMakrod from "../assets/Maaz_Makrod.png";
import file from "../assets/file.svg";
import mail from "../assets/mail.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import resume from "../assets/Maaz_Makrod_Resume.pdf";
import { COLORS, CONTENT_HEIGHT, CONTENT_WIDTH } from "../styles/theme";
import { Link } from "../icons";
import {
  generateCardWrapperProps,
  ICON_DEFAULT_PROPS,
} from "../utils/propHelpers";
import { CardWrapperProps } from "../components/card-wrapper/CardWrapper";
import { IconProps } from "../components/icon/Icon";
import { CardGridProps } from "../components/card-grid/CardGrid";
import { APP_BASE } from "../utils/constants";

function Home() {
  const homePageArgs = {
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
      [BREAKPOINTS.DEFAULT]: "2",
      [BREAKPOINTS.MEDIUM]: "5",
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
          <ImageCard
            src={maazMakrod}
            alt="A picture of me, Maaz Makrod"
            aspectRatio="4/3"
            imageWidth={{ [BREAKPOINTS.DEFAULT]: "100%" }}
            imageHeight={{ [BREAKPOINTS.DEFAULT]: "100%" }}
            objectFit="cover"
            lazyLoad
            cardWrapperProps={
              generateCardWrapperProps(
                "secondary",
                "0px",
                {
                  blob: false,
                },
                true,
              ) as CardWrapperProps
            }
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
          <TextCard
            useFlex
            horizontalPosition="left"
            verticalPosition="top"
            textProps={[
              {
                content: {
                  text: `Hi there, I'm Maaz! Currently, I study Computer Engineering at the Univeristy of Toronto`,
                  color: COLORS.white,
                  tagName: "h1",
                  types: ["pLarge"],
                  fade: true,
                },
              },
            ]}
            cardWrapperProps={{
              ...(generateCardWrapperProps(
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
              ) as CardWrapperProps),
              icon: {
                ...ICON_DEFAULT_PROPS["primary"],
                SvgImage: Link,
                url: `${APP_BASE}about`,
                position: {
                  bottom: 5,
                  right: 10,
                },
              } as IconProps,
            }}
          />
        ),
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [2, 1],
        },
        endCoordinate: {
          [BREAKPOINTS.DEFAULT]: [2, 2],
          [BREAKPOINTS.MEDIUM]: [3, 2],
        },
        component: (
          <TextCard
            useFlex
            horizontalPosition="left"
            verticalPosition="bottom"
            textProps={[
              {
                content: {
                  text: `Over the past few years, I've developed some pretty cool stuff. From modeling software, to computation engines, to AI models, and large scale websites`,
                  color: COLORS.primary,
                  tagName: "h1",
                  types: ["pLarge"],
                  fade: true,
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
                  blobSize: "large",
                  blobPosition: {
                    right: 0,
                    top: 5,
                  },
                  startingBlobShape: 1,
                  blobMovementOptions: 0,
                },
                true,
              ) as CardWrapperProps),
              icon: {
                ...ICON_DEFAULT_PROPS["primary"],
                SvgImage: Link,
                url: `${APP_BASE}experience`,
                position: {
                  top: 5,
                  left: 5,
                },
              } as IconProps,
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
                  url: resume,
                  position: {
                    bottom: 10,
                    left: 10,
                  },
                  target: "_blank",
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
                          text: `Take a look at my `,
                          color: COLORS.white,
                          tagName: "p",
                          types: ["pLarge", "bold"],
                          fade: true,
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
        display: {
          [BREAKPOINTS.DEFAULT]: "none",
          [BREAKPOINTS.MEDIUM]: "unset",
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
          [BREAKPOINTS.DEFAULT]: [4, 1],
        },
        display: {
          [BREAKPOINTS.DEFAULT]: "none",
          [BREAKPOINTS.MEDIUM]: "unset",
        },
        component: (
          <ImageCard
            src={linkedin}
            alt="Take a look at my LinkedIn"
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
                overlayBackgroundColor: COLORS.quinary,
                icon: {
                  SvgImage: Link,
                  url: "https://www.linkedin.com/in/maaz-makrod/",
                  position: {
                    bottom: 10,
                    right: 10,
                  },
                  target: "_blank",
                  ...ICON_DEFAULT_PROPS["primary"],
                } as IconProps,
                overlay: (
                  <TextCard
                    useFlex
                    horizontalPosition="left"
                    verticalPosition="top"
                    textProps={[
                      {
                        content: {
                          text: `Take a look at my `,
                          color: COLORS.white,
                          tagName: "p",
                          types: ["pLarge", "bold"],
                          fade: true,
                          nestedText: [
                            {
                              content: {
                                text: `LinkedIn`,
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
                        startingBlobShape: 1,
                        blobPosition: {
                          bottom: 10,
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
          [BREAKPOINTS.DEFAULT]: [5, 1],
        },
        display: {
          [BREAKPOINTS.DEFAULT]: "none",
          [BREAKPOINTS.MEDIUM]: "unset",
        },
        component: (
          <ImageCard
            src={github}
            alt="Check out my Github"
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
                  url: "https://github.com/maazmakrod",
                  position: {
                    top: 10,
                    right: 10,
                  },
                  target: "_blank",
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
                          text: `Check out my `,
                          color: COLORS.primary,
                          tagName: "p",
                          types: ["pLarge", "bold"],
                          fade: true,
                          nestedText: [
                            {
                              content: {
                                text: `Github`,
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
                        startingBlobShape: 0,
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
          [BREAKPOINTS.DEFAULT]: [5, 3],
        },
        display: {
          [BREAKPOINTS.DEFAULT]: "none",
          [BREAKPOINTS.MEDIUM]: "unset",
        },
        component: (
          <TextCard
            cardWrapperProps={{
              ...(generateCardWrapperProps(
                "primary",
                "10px",
                {
                  blob: true,
                  blobAnimations: {
                    growBlob: true,
                    pulseBlob: true,
                    animateBlobPosition: true,
                  },
                  blobSize: "large",
                  blobPosition: {
                    top: 0,
                    left: 20,
                  },
                  blobMovementOptions: 1,
                },
                true,
              ) as CardWrapperProps),
              icon: {
                ...ICON_DEFAULT_PROPS["primary"],
                SvgImage: Link,
                url: `${APP_BASE}projects`,
                position: {
                  bottom: 5,
                  right: 5,
                },
              } as IconProps,
            }}
            textProps={[
              {
                content: {
                  text: `At school and on the side I have coded some interesting projects. From peer to peer messaging systems, to fullstack web applications, I have coded applications in both low level and high level programming languages`,
                  color: COLORS.white,
                  tagName: "h1",
                  types: ["pLarge"],
                  fade: true,
                },
              },
            ]}
            horizontalPosition="left"
            verticalPosition="top"
          />
        ),
      },
    ],
  };

  return <CardGrid {...(homePageArgs as CardGridProps)} />;
}

export default Home;
