import { CardGrid } from "../components/card-grid";
import { CardGridProps } from "../components/card-grid/CardGrid";
import { BREAKPOINTS } from "../styles/helpers";
import { CONTENT_WIDTH } from "../styles/theme";

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
  };

  return <CardGrid {...(projectsArgs as CardGridProps)} />;
}

export default Projects;
