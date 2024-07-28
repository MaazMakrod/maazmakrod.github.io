import styled from "styled-components";
import { TextCard } from "../components";
import { generateRandomPosition } from "../components/card-wrapper/styles";
import { BREAKPOINTS } from "../styles/helpers";
import { COLORS, CONTENT_HEIGHT, CONTENT_WIDTH } from "../styles/theme";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/');
    }, 3000);

    return (
        <StyledContainer>
            <TextCard
                useFlex
                flexDir="column"
                horizontalPosition='middle'
                verticalPosition='middle'
                textProps={[
                    {
                        content: {
                            text: `Looks like this page doesn't exist 😅`,
                            color: COLORS.white,
                            tagName: 'h1',
                            types: ['h1'],
                            fade: true,
                            underline: true,
                            underlineColor: `${COLORS.white} 0 0`,
                            underlineSize: { [BREAKPOINTS.DEFAULT]: "5px" },
                        }
                    },
                    {
                        content: {
                            text: `you will be redirected in a moment`,
                            color: COLORS.white,
                            tagName: 'h1',
                            types: ['h1'],
                            fade: true,
                            underline: true,
                            underlineColor: `${COLORS.white} 0 0`,
                            underlineSize: { [BREAKPOINTS.DEFAULT]: "5px" },
                        },
                    }
                ]}
                cardWrapperProps={{
                backgroundColor: COLORS.primary,
                width: { [BREAKPOINTS.DEFAULT]: CONTENT_WIDTH },
                height: { [BREAKPOINTS.DEFAULT]: CONTENT_HEIGHT },
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
                        blobStartPosition: generateRandomPosition(),
                        pulseOptions: {
                            color: `${COLORS.accent}af`,
                            spread: "20rem",
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
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    margin: auto;
    height: 100vh;
    display: flex;
    align-items: center;
`;

export default NotFound;