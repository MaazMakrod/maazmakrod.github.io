import { BREAKPOINTS } from "../styles/helpers";
import { ImageCard, TextCard } from "../components";
import { COLORS } from "../styles/theme";
import { Link } from "../icons";
import { TabCard } from "../components/tab-card";
import {
  generateCardWrapperProps,
  ICON_DEFAULT_PROPS,
} from "../utils/propHelpers";
import { CardWrapperProps } from "../components/card-wrapper/CardWrapper";
import { IconProps } from "../components/icon/Icon";
import { TabCardProps } from "../components/tab-card/TabCard";
import { TextObject, TextProps } from "../components/text/Text";
import { DetailsProps } from "../components/tab-card/DetailsCards";
import konrad from "../assets/konrad.png";
import rocscience from "../assets/rocscience.jpg";
import labonweb from "../assets/LabOnWeb.png";
import csf from "../assets/canadianSheepFederation.png";

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
  lazyLoad: true,
};

const BLOB_PULSE_ANIMATION = {
  color: `${COLORS.accent}ff`,
  spread: "10rem",
  animationOptions: { timing: 4000, options: "infinite" },
};

const MAIN_CONTENT_CARD_STYLING = {
  primary: {
    ...(generateCardWrapperProps("secondary", "20px", {
      blob: true,
      blobAnimations: {
        pulseBlob: true,
        growBlob: false,
        animateBlobPosition: false,
      },
      blobSize: "large",
      blobPosition: {
        bottom: -15,
        left: -10,
      },
      startingBlobShape: 3,
      blobPulseOptions: BLOB_PULSE_ANIMATION,
    }) as CardWrapperProps),
  },
  secondary: {
    ...(generateCardWrapperProps("primary", "20px", {
      blob: true,
      blobAnimations: {
        pulseBlob: true,
        growBlob: false,
        animateBlobPosition: false,
      },
      blobSize: "large",
      blobPosition: {
        bottom: -15,
        left: -10,
      },
      startingBlobShape: 3,
      blobPulseOptions: BLOB_PULSE_ANIMATION,
    }) as CardWrapperProps),
  },
};

const DETAILS_CARD_STYLING = {
  primary: {
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
          animateBlobPosition: false,
        },
        blobSize: "medium",
        blobPosition: {
          top: -10,
          right: -10,
        },
        blobPulseOptions: BLOB_PULSE_ANIMATION,
      }),
    },
  },
  secondary: {
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
          animateBlobPosition: false,
        },
        blobSize: "medium",
        blobPosition: {
          top: -10,
          right: -10,
        },
        blobPulseOptions: BLOB_PULSE_ANIMATION,
      }),
    },
  },
};

const COMMON_LIST_PROPS = {
  tagName: "li",
  types: ["p"],
  margin: "0 0 10px 0",
};

type TabsProps = Array<{
  mainContentText: Array<TextProps | TextObject>;
  detailsProps: Partial<DetailsProps> & { technologies: Array<string> };
  tabTheme: "primary" | "secondary";
  logoUrl: string;
  logoAlt: string;
  logoBackgroundColor: string;
  logoLink: string;
  buttonText: string;
}>;

function Experience() {
  const generateTabs = (tabs: TabsProps) => {
    return tabs.map((tab) => {
      return {
        logo: (
          <ImageCard
            cardWrapperProps={
              {
                ...generateCardWrapperProps(
                  "primary",
                  "10px",
                  {
                    blob: false,
                  },
                  true,
                ),
                centerContent: true,
                backgroundColor: tab.logoBackgroundColor,
                icon: {
                  url: tab.logoLink,
                  ...SHARED_ICON_LINK_PROPS,
                  ...ICON_DEFAULT_PROPS["primary"],
                } as IconProps,
              } as CardWrapperProps
            }
            {...SHARED_LOGO_PROPS}
            src={tab.logoUrl}
            alt={tab.logoAlt}
          />
        ),
        mainContent: (
          <TextCard
            cardWrapperProps={{ ...MAIN_CONTENT_CARD_STYLING[tab.tabTheme] }}
            useFlex={false}
            textProps={tab.mainContentText}
          />
        ),
        details: {
          ...tab.detailsProps,
          ...DETAILS_CARD_STYLING[tab.tabTheme],
        },
        buttonText: tab.buttonText,
      };
    });
  };

  const tabArgs: TabsProps = [
    {
      tabTheme: "primary",
      logoAlt: "Konrad Group Logo",
      logoBackgroundColor: COLORS.black,
      logoLink: "https://www.konrad.com/",
      logoUrl: konrad,
      mainContentText: [
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
            text: `As a developer intern at Konrad Group for 16 months, I worked with a lot of different tech stacks to do some pretty cool stuff. Here's a recap of what I did: `,
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
                        text: "Developed a backend server for a client from scratch so that they can reduce the dependency of their system on third party services. This involved setting up the infrastructure using Terraform and creating a server using Express and tRPC.",
                        ...COMMON_LIST_PROPS,
                      },
                    },
                    {
                      content: {
                        text: "Coded a script to migrate 10s of thousands of assets from a client's CMS space to a DAM so that they can reduce costs and have a single source of truth for asset storage. This solution had to be backwards compatible so that the client's system would not break when migrating content.",
                        ...COMMON_LIST_PROPS,
                      },
                    },
                    {
                      content: {
                        text: "Identified and resolved an issue where a client's system made 100s of extra calls to a third party service. This was due to a concurrency issue between AWS lambda functions.",
                        ...COMMON_LIST_PROPS,
                      },
                    },
                    {
                      content: {
                        text: "Identified and resolved a critical production bug which caused a client system to go down. A short term fix was produced within 2 hours of site breakage and a long term fix was produced within a week.",
                        ...COMMON_LIST_PROPS,
                      },
                    },
                    {
                      content: {
                        text: "Created an internal video processing pipeline that web optimizes videos as well as creates a table of contents summary and timestamps of important topics using OpenAI's API. This saved hours monthly when it came to uploading these videos for internal use.",
                        ...COMMON_LIST_PROPS,
                      },
                    },
                    {
                      content: {
                        text: "Worked in a team of 4 developers to produce a multi-class AI classification model for a client. We additionally created a data processing pipeline so that the client could compare the efficacy of different models as well as a backend server to route calls to the AI model.",
                        ...COMMON_LIST_PROPS,
                      },
                    },
                    {
                      content: {
                        text: "Worked in a team of 3 to enhance an internal toolkit that speeds up developer time when working with AEM. This is done by allowing developers to code their frontend in React rather than the native HTL language that AEM uses.",
                        ...COMMON_LIST_PROPS,
                      },
                    },
                    {
                      content: {
                        text: "Led smaller initiatives to produce websites in tight timelines. This would normally involve the rapid creation of a static web page for clients.",
                        ...COMMON_LIST_PROPS,
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
      detailsProps: {
        companyName: "Konrad Group",
        position: "Associate Software Developer Intern",
        description: "I developed AI models and large scale websites 🤖",
        positionLength: "16 Months",
        technologies: [
          "React",
          "TypeScript",
          "NextJS",
          "Contentful",
          "Node",
          "Express",
          "AWS",
          "Azure",
          "Terraform",
          "Python",
          "Databricks",
          "AEM",
        ],
      },
      buttonText: "Konrad Group",
    },
    {
      tabTheme: "secondary",
      logoAlt: "Rocscience Inc. Logo",
      logoBackgroundColor: COLORS.white,
      logoLink: "https://www.rocscience.com/",
      logoUrl: rocscience,
      mainContentText: [
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
            text: `Although I only spent 4 months at Rocscience, the challenging and fast-paced atmosphere resulted in me producing many new features and optimizations for their web application RSLog. Here's what I did:`,
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
                        text: "Worked on an application that allows users to create 2D and 3D models of boreholes in their excavation sites using D3.js and Three.js. This allows 1000s of users worldwide to interact with their excavation sites on the web.",
                        ...COMMON_LIST_PROPS,
                      },
                    },
                    {
                      content: {
                        text: "Utilized Mapbox and Google Map Tiles APIs to render tiles of terrains so that users could view their site in its actual location. This involved a heavy use of geometry to position the model in the correct location relative to the terrain as well as ensure that the terrain fit into the modeling coordinate system.",
                        ...COMMON_LIST_PROPS,
                      },
                    },
                    {
                      content: {
                        text: "Created solutions to export the models to various different formats like DXF (AutoCAD) and KMZ (Google Earth). This allows users to use other software to view their models.",
                        ...COMMON_LIST_PROPS,
                      },
                    },
                    {
                      content: {
                        text: "Identified and resolved redundancies in the model export files resulting in a reduction of file sizes by 67%.",
                        ...COMMON_LIST_PROPS,
                      },
                    },
                    {
                      content: {
                        text: "Utilized OOP to implement an image loader tool so that users could load in images (png/jpg/svg) files into their 3D model terrain and view them along with their site.",
                        ...COMMON_LIST_PROPS,
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
      detailsProps: {
        companyName: "Rocscience",
        position: "Software Engineer Intern",
        description: "I created 2D & 3D modeling software 🏗️",
        positionLength: "4 Months",
        technologies: [
          "JavaScript",
          "TypeScript",
          "Three.js",
          "D3.js",
          "Mapbox",
          "Google Tiles",
        ],
      },
      buttonText: "Rocscience",
    },
    {
      tabTheme: "primary",
      logoAlt: "LabOnWeb Logo",
      logoBackgroundColor: COLORS.white,
      logoLink: "https://labonweb.org/",
      logoUrl: labonweb,
      mainContentText: [
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
            text: `At LabOnWeb I relied heavily on my physics and mathematical knowledge to develop a physics simulation web application. Here's the highlights of my time there:`,
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
                        text: "Worked on an application that allows students to simulate physics experiments on the web rather than in person. This makes it easier to illustrate concepts to students no matter where they are.",
                        ...COMMON_LIST_PROPS,
                      },
                    },
                    {
                      content: {
                        text: "Expanded the capabilities of the physics computation engine to solve other equations. One example of this is the Navier-Stokes equations which allows one to use partial differential equations to solve for the flow velocity of viscous fluids.",
                        ...COMMON_LIST_PROPS,
                      },
                    },
                    {
                      content: {
                        text: "Utilized OOP to add in drag and drop sensors to the GUI so that students could measure things like temperature, velocity, and pressure in different parts of the experiment simultaneously.",
                        ...COMMON_LIST_PROPS,
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
      detailsProps: {
        companyName: "LabOnWeb",
        position: "Software Engineer",
        description: "I developed physics simulation modeling software 🔬",
        positionLength: "8 Months",
        technologies: ["JavaScript", "React", "Java"],
      },
      buttonText: "LabOnWeb",
    },
    {
      tabTheme: "secondary",
      logoAlt: "Canadian Sheep Federation Logo",
      logoBackgroundColor: COLORS.white,
      logoLink: "https://agroledger.ca/",
      logoUrl: csf,
      mainContentText: [
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
            text: `The Canadian Sheep Federation was my first experience as a professional software engineer! As an intern in a startup environment, I learned a lot and thrived which resulted in me being given more responsibilities throughout my internship. I started out as a QA Auditor, then was tasked as being the QA lead amongst the interns, and finally moved onto the dev team to create software. Here's a look at what I did:`,
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
                        text: "Created an application to monitor the transportation of sheep all across Canada. The goal of this is to eliminate the paper trail of where sheep are in the country and give farmers and inspectors access to a system so that they know where their sheep are all the time.",
                        ...COMMON_LIST_PROPS,
                      },
                    },
                    {
                      content: {
                        text: "Designed schemas for data storage in MongoDB and performed advanced queries of the system data to generate sheep traceability reports. This improved the traceability algorithm performance by 15%.",
                        ...COMMON_LIST_PROPS,
                      },
                    },
                    {
                      content: {
                        text: "Created pages that allow users to update user and sheep data so that our system can remain as up to date as possible.",
                        ...COMMON_LIST_PROPS,
                      },
                    },
                    {
                      content: {
                        text: "Led a team of 3 in the testing of the webapp, generation of requirement reports, and designing of new components.",
                        ...COMMON_LIST_PROPS,
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
      detailsProps: {
        companyName: "Canadian Sheep Federation",
        position: "Software Engineer Intern and QA Auditor",
        description: "I worked on nationwide sheep traceability software 🐑",
        positionLength: "3 Months",
        technologies: ["MongoDB", "Express", "React", "Node"],
      },
      buttonText: "Canadian Sheep Federation",
    },
  ];

  const tabCardArgs = {
    tabButtonStyle: {
      containerColor: COLORS.primary,
      buttonColor: COLORS.primary,
      buttonHoverColor: COLORS.accent,
      buttonBoxShadow: `0px 2px 10px 0px ${COLORS.accent}`,
      textColor: COLORS.white,
    },
    tabs: generateTabs(tabArgs),
  };

  return <TabCard {...(tabCardArgs as TabCardProps)} />;
}

export default Experience;
