import { BREAKPOINTS } from '../styles/helpers';
import { ImageCard, TextCard } from '../components';
import { COLORS } from '../styles/theme';
import { Link } from '../icons';
import { TabCard } from '../components/tab-card';
import { generateCardWrapperProps, ICON_DEFAULT_PROPS } from '../utils/propHelpers';
import { CardWrapperProps } from '../components/card-wrapper/CardWrapper';
import { IconProps } from '../components/icon/Icon';

const SHARED_ICON_LINK_PROPS = {
  SvgImage: Link,
  position: {
    top: 5,
    right: 5,
  },
  target: "_blank",
};

const SHARED_LOGO_PROPS = {
  imageWidth: { [BREAKPOINTS.DEFAULT]: "150px" },
  imageHeight: { [BREAKPOINTS.DEFAULT]: "150px" },
  objectFit: "contain",
};

const BLOB_PULSE_ANIMATION = {
  color: `${COLORS.accent}ff`,
  spread: "10rem",
  animationOptions: { timing: 4000, options: "infinite" },
};

const MAIN_CONTENT_CARD_STYLING = {
  'primary': {
      ...generateCardWrapperProps('secondary', '20px', {
        blob: true,
        blobAnimations: {
          pulseBlob: true,
          growBlob: false,
          animateBlobPosition: false,
        },
        blobSize: 'large',
        blobPosition: {
          bottom: -15,
          left: -10,
        },
        startingBlobShape: 3,
        blobPulseOptions: BLOB_PULSE_ANIMATION,
      }) as CardWrapperProps,
  },
  'secondary': {
    ...generateCardWrapperProps("primary", "20px", {
      blob: true,
      blobAnimations: {
        pulseBlob: true,
        growBlob: false,
        animateBlobPosition: false
      },
      blobSize: 'large',
      blobPosition: {
        bottom: -15,
        left: -10,
      },
      blobPulseOptions: {
        color: `${COLORS.accent}ff`,
        spread: "10rem",
        animationOptions: { timing: 5000, options: "infinite" },
      }
    }) as CardWrapperProps
  }
};

const DETAILS_CARD_STYLING = {
  'primary': {
    underlineColor: `${COLORS.white} 0 0`,
    textColor: COLORS.white,
    technologyProps: {
      textColor: COLORS.white,
      backgroundColor: COLORS.primary,
      outlineColor: `linear-gradient(to right, ${COLORS.accent}, ${COLORS.primary})`,
      filterColor: `#ffffff24`,
    },
    cardWrapperProps: {
      ...generateCardWrapperProps("primary", "20px", {
        blob: true,
        blobAnimations: {
          pulseBlob: true,
          growBlob: false,
          animateBlobPosition: false
        },
        blobSize: 'medium',
        blobPosition: {
          top: -10,
          right: -10,
        },
        blobPulseOptions: BLOB_PULSE_ANIMATION,
      }),
    },
  },
  'secondary': {
    underlineColor: `${COLORS.primary} 0 0`,
    textColor: COLORS.primary,
    technologyProps: {
      textColor: COLORS.primary,
      backgroundColor: COLORS.quinary,
      outlineColor: `linear-gradient(to right, ${COLORS.accent}, ${COLORS.quinary})`,
      filterColor: "#ffffff24",
    },
    cardWrapperProps: {
      ...generateCardWrapperProps("secondary", "20px", {
        blob: true,
        blobAnimations: {
          pulseBlob: true,
          growBlob: false,
          animateBlobPosition: false
        },
        blobSize: 'medium',
        blobPosition: {
          top: -10,
          right: -10,
        },
        blobPulseOptions: BLOB_PULSE_ANIMATION,
      }),
    },
  },
}

function Experience() {
  const tabCardArgs = {
    tabButtonStyle: {
      containerColor: COLORS.primary,
      buttonColor: COLORS.primary,
      buttonHoverColor: COLORS.accent,
      buttonBoxShadow: `0px 2px 10px 0px ${COLORS.accent}`,
      textColor: COLORS.white,
    },
    tabs: [
      {
        logo: (
          <ImageCard
            cardWrapperProps={{
              ...generateCardWrapperProps('primary', '10px', {
                blob: false,
              }, true),
              centerContent: true,
              backgroundColor: COLORS.black,
              icon: {
                url: "https://www.konrad.com/",
                ...SHARED_ICON_LINK_PROPS,
                ...ICON_DEFAULT_PROPS['primary'],
              } as IconProps,
            } as CardWrapperProps}
            {...SHARED_LOGO_PROPS}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsMWeZbrriYlVchumRY7j0US0db1vTfJfYIg&s"
            alt="Mountains Image"
          />
        ),
        mainContent: (
          <TextCard
            cardWrapperProps={{...MAIN_CONTENT_CARD_STYLING['primary']}}
            useFlex={false}
            textProps={[
              {
                text: "What did I do?",
                types: ["h1"],
                tagName: "h2",
                fade: true,
                margin: "0",
                color: COLORS.primary,
              },
              {
                content: {
                  text: `As a developer intern at Konrad Group for 16 months, I did a whole lot of neat stuff. Here's the highlights: `,
                  types: ["p"],
                  tagName: "p",
                  fade: true,
                  color: COLORS.primary,
                  nestedText: [
                    {
                      content: {
                        text: "",
                        tagName: "ol",
                        nestedText: [
                          {
                            content: {
                              text: "This is a test",
                              tagName: "li",
                              types: ["p"],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ]}
          />
        ),
        details: {
          companyName: "Konrad Group",
          position: "Associate Software Developer Intern",
          description: "I developed AI models and large scale websites 🤖",
          positionLength: '16 Months',
          technologies: ["React", "AEM", "TypeScript"],
          ...DETAILS_CARD_STYLING['primary'],
        },
        buttonText: "Konrad Group",
      },
      {
        logo: (
          <ImageCard
            cardWrapperProps={{
              ...generateCardWrapperProps('primary', '10px', {
                blob: false,
              }, true),
              centerContent: true,
              backgroundColor: COLORS.white,
              icon: {
                url: "https://www.konrad.com/",
                ...SHARED_ICON_LINK_PROPS,
                ...ICON_DEFAULT_PROPS['primary'],
              } as IconProps,
            } as CardWrapperProps}
            {...SHARED_LOGO_PROPS}
            src="https://mms.businesswire.com/media/20240108824720/en/1990341/5/Rocscience_DETAIL.jpg"
            alt="Mountains Image"
          />
        ),
        mainContent: (
          <TextCard
            cardWrapperProps={{...MAIN_CONTENT_CARD_STYLING['secondary']}}
            useFlex={false}
            textProps={[
              {
                text: "What did I do?",
                types: ["h1"],
                tagName: "h2",
                fade: true,
                margin: "0",
                color: COLORS.white,
              },
              {
                content: {
                  text: `As a developer intern at Konrad Group for 16 months, I did a whole lot of neat stuff. Here's the highlights: `,
                  types: ["p"],
                  tagName: "p",
                  fade: true,
                  color: COLORS.white,
                  nestedText: [
                    {
                      content: {
                        text: "",
                        tagName: "ol",
                        nestedText: [
                          {
                            content: {
                              text: "This is a test",
                              tagName: "li",
                              types: ["p"],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ]}
          />
        ),
        details: {
          companyName: "Konrad Group",
          position: "Associate Software Developer Intern",
          description: "I developed AI models and large scale websites 🤖",
          technologies: ["React", "AEM", "TypeScript"],
          positionLength: '16 Months',
          ...DETAILS_CARD_STYLING['secondary'],
        },
        buttonText: "Konrad Group",
      },
    ],
  };

  return <TabCard {...tabCardArgs} />
}

export default Experience;
