import { ImageCard, TextCard } from "../components";
import { CardGrid } from "../components/card-grid";
import { CardGridProps } from "../components/card-grid/CardGrid";
import { BREAKPOINTS } from "../styles/helpers";
import { COLORS, CONTENT_WIDTH } from "../styles/theme";
import file from "../assets/file.svg";
import { generateCardWrapperProps, ICON_DEFAULT_PROPS } from "../utils/propHelpers";
import { Link } from "../icons";
import { IconProps } from "../components/icon/Icon";
import { CardWrapperProps } from "../components/card-wrapper/CardWrapper";

/**
 * Projects to Discuss:
 * Full stack blogging application
 * Caching Web server (operating systems)
 * Messaging Application (networks)
 * Camera Thing (ECE342)
 * AI Model for Emotion Analysis (APS360)
 * Mapping Application
 * Forest Life Simulation
 */

function Projects() {
  const projectsArgs = {
    width: {
      [BREAKPOINTS.DEFAULT]: CONTENT_WIDTH,
    },
    height: {
      [BREAKPOINTS.DEFAULT]: "fit-content",
    },
    numberRows: {
      [BREAKPOINTS.DEFAULT]: "7",
      [BREAKPOINTS.MEDIUM]: "4",
      [BREAKPOINTS.LARGE]: "3",
    },
    numberCols: {
      [BREAKPOINTS.DEFAULT]: "1",
      [BREAKPOINTS.MEDIUM]: "2",
      [BREAKPOINTS.LARGE]: "3",
    },
    gap: {
      [BREAKPOINTS.DEFAULT]: "1rem",
    },
    childComponents: [
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [1, 1],
          [BREAKPOINTS.MEDIUM]: [1, 1],
          [BREAKPOINTS.LARGE]: [1, 1],
        },
        component: (
          <ImageCard
            src={file}
            alt="My resume"
            aspectRatio="4/3"
            imageWidth={{ [BREAKPOINTS.DEFAULT]: "100%" }}
            imageHeight={{ [BREAKPOINTS.DEFAULT]: "400px" }}
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
                height: {
                  [BREAKPOINTS.DEFAULT]: '400px'
                },
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
                    cardWrapperProps={{
                      ...generateCardWrapperProps("primary", "10px", {
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
                      }) as CardWrapperProps,
                      height: {
                        [BREAKPOINTS.DEFAULT]: '400px',
                      }
                    }}
                  />
                ),
              } as CardWrapperProps
            }
          />
        ),
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [1, 2],
          [BREAKPOINTS.MEDIUM]: [2, 1],
          [BREAKPOINTS.LARGE]: [2, 1],
        },
        component: (
          <ImageCard
            src={file}
            alt="My resume"
            aspectRatio="4/3"
            imageWidth={{ [BREAKPOINTS.DEFAULT]: "100%" }}
            imageHeight={{ [BREAKPOINTS.DEFAULT]: "400px" }}
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
                height: {
                  [BREAKPOINTS.DEFAULT]: '400px'
                },
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
                    cardWrapperProps={{
                      ...generateCardWrapperProps("primary", "10px", {
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
                      }) as CardWrapperProps,
                      height: {
                        [BREAKPOINTS.DEFAULT]: '400px',
                      }
                    }}
                  />
                ),
              } as CardWrapperProps
            }
          />
        ),
      },
      {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [1, 3],
          [BREAKPOINTS.MEDIUM]: [1, 2],
          [BREAKPOINTS.LARGE]: [3, 1],
        },
        component: (
          <ImageCard
            src={file}
            alt="My resume"
            aspectRatio="4/3"
            imageWidth={{ [BREAKPOINTS.DEFAULT]: "100%" }}
            imageHeight={{ [BREAKPOINTS.DEFAULT]: "400px" }}
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
                height: {
                  [BREAKPOINTS.DEFAULT]: '400px'
                },
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
                    cardWrapperProps={{
                      ...generateCardWrapperProps("primary", "10px", {
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
                      }) as CardWrapperProps,
                      height: {
                        [BREAKPOINTS.DEFAULT]: '400px',
                      }
                    }}
                  />
                ),
              } as CardWrapperProps
            }
          />
        ),
      },
    ]
  };

  return <CardGrid {...(projectsArgs as CardGridProps)} />;
}

export default Projects;
