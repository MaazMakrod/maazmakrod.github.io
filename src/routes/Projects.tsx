import { TextCard } from "../components";
import { CardGrid } from "../components/card-grid";
import { CardGridProps } from "../components/card-grid/CardGrid";
import { BREAKPOINTS } from "../styles/helpers";
import { COLORS, CONTENT_WIDTH } from "../styles/theme";
import {
  generateCardWrapperProps,
  ICON_DEFAULT_PROPS,
} from "../utils/propHelpers";
import { HandCursor } from "../icons";
import { CardWrapperProps } from "../components/card-wrapper/CardWrapper";
import { TextObject, TextProps } from "../components/text/Text";

type ChildComponentGeneration = Array<{
  textPropsOverlay: Array<TextProps | TextObject>;
  textPropsContent: Array<TextProps | TextObject>;
  cardTheme: "primary" | "secondary";
}>;

function Projects() {
  const generateChildComponent = (textArgs: ChildComponentGeneration) => {
    return textArgs.map((args, index) => {
      const xDefault = 1;
      const xMedium = (index % 2) + 1;
      const xLarge = (index % 3) + 1;
      const yDefault = index + 1;
      const yMedium = Math.floor(index / 2) + 1;
      const yLarge = Math.floor(index / 3) + 1;
      const contentTheme =
        args.cardTheme == "primary" ? "secondary" : "primary";

      return {
        startCoordinate: {
          [BREAKPOINTS.DEFAULT]: [xDefault, yDefault],
          [BREAKPOINTS.MEDIUM]: [xMedium, yMedium],
          [BREAKPOINTS.LARGE]: [xLarge, yLarge],
        },
        component: (
          <TextCard
            key={`project-card-${index}`}
            useFlex
            horizontalPosition="left"
            verticalPosition="top"
            flexDir="column"
            textProps={args.textPropsContent}
            cardWrapperProps={
              {
                ...generateCardWrapperProps(
                  contentTheme,
                  "0px",
                  {
                    blob: true,
                    blobAnimations: {
                      animateBlobPosition: true,
                      pulseBlob: true,
                      growBlob: false,
                    },
                    blobSize: "medium",
                    startingBlobShape: index % 4,
                    blobMovementOptions:
                      Math.random() * 3 === 0 ? undefined : index % 2,
                  },
                  true,
                  {
                    overlay: true,
                    slideUpOverlay: true,
                  },
                ),
                height: {
                  [BREAKPOINTS.DEFAULT]: "400px",
                },
                icon: {
                  SvgImage: HandCursor,
                  ...ICON_DEFAULT_PROPS["primary"],
                  tag: "div",
                  svgProps: {
                    width: "inherit",
                    height: "inherit",
                  },
                  position: {
                    bottom: 5,
                    right: 5,
                  },
                },
                overlay: (
                  <TextCard
                    useFlex
                    horizontalPosition="middle"
                    verticalPosition="middle"
                    flexDir="column"
                    textProps={args.textPropsOverlay}
                    cardWrapperProps={{
                      ...(generateCardWrapperProps(args.cardTheme, "10px", {
                        blob: true,
                        blobAnimations: {
                          animateBlobPosition: false,
                          pulseBlob: false,
                          growBlob: false,
                        },
                        blobSize: "medium",
                        startingBlobShape: index % 4,
                      }) as CardWrapperProps),
                      height: {
                        [BREAKPOINTS.DEFAULT]: "400px",
                      },
                    }}
                  />
                ),
              } as CardWrapperProps
            }
          />
        ),
      };
    });
  };

  const cardText = [
    {
      textPropsContent: [
        {
          content: {
            text: "A fullstack blogging application that allows users to comment on, like, edit, and create blogs. This application was created using React and Material UI for the frontend and Node, Express, and MongoDB for the backend. To manage the state I employed Redux principles.",
            color: COLORS.primary,
            fade: true,
            tagName: "p",
            types: ["p", "bold"],
            margin: "10px 20px",
          },
        },
        {
          content: {
            text: "I am particularly fond of this project because it is my first fullstack application. All the other web projects that I have built have been either purely frontend or purely backend, however, this was the first time that I put all of my knowledge together to develop an application!",
            color: COLORS.primary,
            fade: true,
            tagName: "p",
            types: ["p", "bold"],
            margin: "10px 20px",
          },
        },
        {
          content: {
            text: "Check out the code",
            color: COLORS.primary,
            fade: true,
            tagName: "a",
            types: ["p", "bold"],
            margin: "10px 20px",
            underline: true,
            underlineColor: `${COLORS.primary} 0 0`,
            underlineSize: { [BREAKPOINTS.DEFAULT]: "2px" },
            url: "https://github.com/MaazMakrod/Blog-Application",
            target: "_blank",
          },
        },
      ],
      textPropsOverlay: [
        {
          content: {
            text: "Fullstack Blogging Application",
            color: COLORS.white,
            fade: true,
            tagName: "h2",
            types: ["h3"],
          },
        },
        {
          content: {
            text: "MongoDB, Express, React, Node, Redux, MaterialUI",
            color: COLORS.white,
            fade: true,
            tagName: "p",
            types: ["pLarge", "bold"],
          },
        },
      ],
      cardTheme: "primary",
    },
    {
      textPropsContent: [
        {
          content: {
            text: "This is a multithreaded caching web server made in C. The idea is that multiple concurrent requests are made to the server either to request binary data. In my server, I determine whether I can retrieve the data from my cache or need to make an additional request to get it.",
            color: COLORS.white,
            fade: true,
            tagName: "p",
            types: ["p", "bold"],
            margin: "10px 20px",
          },
        },
        {
          content: {
            text: "When a request is made, I look the data in my hash table, if it is present I return it, if not I make a request to get the data. Then, based on LRU principles I add the data to my cache and return it to the user as well.",
            color: COLORS.white,
            fade: true,
            tagName: "p",
            types: ["p", "bold"],
            margin: "10px 20px",
          },
        },
        {
          content: {
            text: "Check out the code",
            color: COLORS.white,
            fade: true,
            tagName: "a",
            types: ["p", "bold"],
            margin: "10px 20px",
            underline: true,
            underlineColor: `${COLORS.white} 0 0`,
            underlineSize: { [BREAKPOINTS.DEFAULT]: "2px" },
            url: "https://github.com/MaazMakrod/Blog-Application",
            target: "_blank",
          },
        },
      ],
      textPropsOverlay: [
        {
          content: {
            text: "Caching Web Server",
            color: COLORS.primary,
            fade: true,
            tagName: "h2",
            types: ["h3"],
          },
        },
        {
          content: {
            text: "C, LRU Cache, Linked Lists, Hash Tables",
            color: COLORS.primary,
            fade: true,
            tagName: "p",
            types: ["pLarge", "bold"],
          },
        },
      ],
      cardTheme: "secondary",
    },
    {
      textPropsContent: [
        {
          content: {
            text: "The multithreaded messaging application was made in C++ and allows users to establish a connection to a server using either TCP or UDP. Then users are able to join group chats and send messages to other users. These messages can be subject to packet loss, so a acknowledgements are used to ensure no packet loss.",
            color: COLORS.primary,
            fade: true,
            tagName: "p",
            types: ["p", "bold"],
            margin: "10px 20px",
          },
        },
        {
          content: {
            text: "To manage receiving and broadcasting messages to other users, for each group chat created, the server spawns a new thread to listen for incoming messages and broadcasting them. The client application spawns 2 threads, one to listen to user input so that it can be sent and one to listen for messages coming from the server.",
            color: COLORS.primary,
            fade: true,
            tagName: "p",
            types: ["p", "bold"],
            margin: "10px 20px",
          },
        },
        {
          content: {
            text: "Check out the code",
            color: COLORS.primary,
            fade: true,
            tagName: "a",
            types: ["p", "bold"],
            margin: "10px 20px",
            underline: true,
            underlineColor: `${COLORS.primary} 0 0`,
            underlineSize: { [BREAKPOINTS.DEFAULT]: "2px" },
            url: "https://github.com/MaazMakrod/Blog-Application",
            target: "_blank",
          },
        },
      ],
      textPropsOverlay: [
        {
          content: {
            text: "Multithreaded Messaging Application",
            color: COLORS.white,
            fade: true,
            tagName: "h2",
            types: ["h3"],
          },
        },
        {
          content: {
            text: "C++, TCP/UDP/FTP",
            color: COLORS.white,
            fade: true,
            tagName: "p",
            types: ["pLarge", "bold"],
          },
        },
      ],
      cardTheme: "primary",
    },
    {
      textPropsContent: [
        {
          content: {
            text: "As part of this project I connected the STM32 Nucleo Board to an OV7670 Camera Module to feed pixel data back to my laptop. This pixel data was then processed and displayed on a serial monitor.",
            color: COLORS.white,
            fade: true,
            tagName: "p",
            types: ["p", "bold"],
            margin: "10px 20px",
          },
        },
        {
          content: {
            text: "To speed up the frame rate at which the data was sent from the camera module, to the board, and then displayed by the monitor, various compression algorithms were used to process the data quicker. A few examples of the algorithms implemented are run length encoding and data truncation.",
            color: COLORS.white,
            fade: true,
            tagName: "p",
            types: ["p", "bold"],
            margin: "10px 20px",
          },
        },
        {
          content: {
            text: "Check out the code",
            color: COLORS.white,
            fade: true,
            tagName: "a",
            types: ["p", "bold"],
            margin: "10px 20px",
            underline: true,
            underlineColor: `${COLORS.white} 0 0`,
            underlineSize: { [BREAKPOINTS.DEFAULT]: "2px" },
            url: "https://github.com/MaazMakrod/Blog-Application",
            target: "_blank",
          },
        },
      ],
      textPropsOverlay: [
        {
          content: {
            text: "Serial Monitor Camera Display",
            color: COLORS.primary,
            fade: true,
            tagName: "h2",
            types: ["h3"],
          },
        },
        {
          content: {
            text: "C, STM32 Nucleo Board",
            color: COLORS.primary,
            fade: true,
            tagName: "p",
            types: ["pLarge", "bold"],
          },
        },
      ],
      cardTheme: "secondary",
    },
    {
      textPropsContent: [
        {
          content: {
            text: "In this project I led a team of 4 in developing an AI Model to identify the emotion that someone is speaking with in an audio clip.",
            color: COLORS.primary,
            fade: true,
            tagName: "p",
            types: ["p", "bold"],
            margin: "10px 20px",
          },
        },
        {
          content: {
            text: "To do so, we developed a data processing pipeline to convert the audio to spectrograms. We then fed this data into a custom CNN neural networks and several open source networks to determine which network performed best.",
            color: COLORS.primary,
            fade: true,
            tagName: "p",
            types: ["p", "bold"],
            margin: "10px 20px",
          },
        },
        {
          content: {
            text: "Check out the code",
            color: COLORS.primary,
            fade: true,
            tagName: "a",
            types: ["p", "bold"],
            margin: "10px 20px",
            underline: true,
            underlineColor: `${COLORS.primary} 0 0`,
            underlineSize: { [BREAKPOINTS.DEFAULT]: "2px" },
            url: "https://github.com/MaazMakrod/Blog-Application",
            target: "_blank",
          },
        },
        {
          content: {
            text: "Video demo",
            color: COLORS.primary,
            fade: true,
            tagName: "a",
            types: ["p", "bold"],
            margin: "10px 20px",
            underline: true,
            underlineColor: `${COLORS.primary} 0 0`,
            underlineSize: { [BREAKPOINTS.DEFAULT]: "2px" },
            url: "https://github.com/MaazMakrod/Blog-Application",
            target: "_blank",
          },
        },
      ],
      textPropsOverlay: [
        {
          content: {
            text: "Speech Emotion Recognition AI Model",
            color: COLORS.white,
            fade: true,
            tagName: "h2",
            types: ["h3"],
          },
        },
        {
          content: {
            text: "Python, Numpy, Pytorch, Jupyter Notebooks",
            color: COLORS.white,
            fade: true,
            tagName: "p",
            types: ["pLarge", "bold"],
          },
        },
      ],
      cardTheme: "primary",
    },
    {
      textPropsContent: [
        {
          content: {
            text: "In this project I led a team of 3 in developing a mapping application using C++ for the backend and GTK/Glade for the frontend. The map data was sourced from OpenStreetMap.",
            color: COLORS.white,
            fade: true,
            tagName: "p",
            types: ["p", "bold"],
            margin: "10px 20px",
          },
        },
        {
          content: {
            text: "The frontend allowed users to enter locations/addresses as source and destination, then we used the A* algorithm to route users and provide directions. Additionally, we provided a solution to the traveling salesman problem placing in the top 25% of submissions.",
            color: COLORS.white,
            fade: true,
            tagName: "p",
            types: ["p", "bold"],
            margin: "10px 20px",
          },
        },
        {
          content: {
            text: "Check out the code",
            color: COLORS.white,
            fade: true,
            tagName: "a",
            types: ["p", "bold"],
            margin: "10px 20px",
            underline: true,
            underlineColor: `${COLORS.white} 0 0`,
            underlineSize: { [BREAKPOINTS.DEFAULT]: "2px" },
            url: "https://github.com/MaazMakrod/Blog-Application",
            target: "_blank",
          },
        },
        {
          content: {
            text: "Video demo",
            color: COLORS.white,
            fade: true,
            tagName: "a",
            types: ["p", "bold"],
            margin: "10px 20px",
            underline: true,
            underlineColor: `${COLORS.white} 0 0`,
            underlineSize: { [BREAKPOINTS.DEFAULT]: "2px" },
            url: "https://github.com/MaazMakrod/Blog-Application",
            target: "_blank",
          },
        },
      ],
      textPropsOverlay: [
        {
          content: {
            text: "Mapping Application",
            color: COLORS.primary,
            fade: true,
            tagName: "h2",
            types: ["h3"],
          },
        },
        {
          content: {
            text: "C++, GTK, Glade",
            color: COLORS.primary,
            fade: true,
            tagName: "p",
            types: ["pLarge", "bold"],
          },
        },
      ],
      cardTheme: "secondary",
    },
    {
      textPropsContent: [
        {
          content: {
            text: "A Java application that simulates forest life by managing interactions between lifeforms. This was creates using Object Oriented Programming, concepts like polymorphism, interfaces, and classes, and data structures like arrays and arraylists.",
            color: COLORS.primary,
            fade: true,
            tagName: "p",
            types: ["p", "bold"],
            margin: "10px 20px",
          },
        },
        {
          content: {
            text: "This was the first major program which I built that allows a user to interact with a visual interface, so it will always be memorable. One of my most favorite parts of building this project was watching lifeforms of the same species cluster together. This made me feel that the simulation algorithm implemented was realistic!",
            color: COLORS.primary,
            fade: true,
            tagName: "p",
            types: ["p", "bold"],
            margin: "10px 20px",
          },
        },
        {
          content: {
            text: "Check out the code",
            color: COLORS.primary,
            fade: true,
            tagName: "a",
            types: ["p", "bold"],
            margin: "10px 20px",
            underline: true,
            underlineColor: `${COLORS.primary} 0 0`,
            underlineSize: { [BREAKPOINTS.DEFAULT]: "2px" },
            url: "https://github.com/MaazMakrod/Blog-Application",
            target: "_blank",
          },
        },
        {
          content: {
            text: "Video demo",
            color: COLORS.primary,
            fade: true,
            tagName: "a",
            types: ["p", "bold"],
            margin: "10px 20px",
            underline: true,
            underlineColor: `${COLORS.primary} 0 0`,
            underlineSize: { [BREAKPOINTS.DEFAULT]: "2px" },
            url: "https://github.com/MaazMakrod/Blog-Application",
            target: "_blank",
          },
        },
      ],
      textPropsOverlay: [
        {
          content: {
            text: "Forest Life Simulation GUI",
            color: COLORS.white,
            fade: true,
            tagName: "h2",
            types: ["h3"],
          },
        },
        {
          content: {
            text: "Java",
            color: COLORS.white,
            fade: true,
            tagName: "p",
            types: ["pLarge", "bold"],
          },
        },
      ],
      cardTheme: "primary",
    },
  ];

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
    childComponents: generateChildComponent(
      cardText as ChildComponentGeneration,
    ),
  };

  return <CardGrid {...(projectsArgs as CardGridProps)} />;
}

export default Projects;
