import React from "react";
import { Container, Image, Text } from "@coconut-xr/koestlich";
import { assets } from "@/config/assets";
import { content } from "@/config/content";
import { appState } from "@/state/app-state";

export default function Home() {
  const language = appState((state) => state.language);

  const [clicked, setClicked] = React.useState(false);

  return (
    <Container
      width={1200}
      height={584}
      backgroundColor="#ffffff"
      backgroundOpacity={0.95}
      paddingX={70}
      paddingY={64}
      flexDirection="column"
      justifyContent="space-between"
    >
      <Text
        color="#000000"
        maxWidth={976}
        fontSize={60}
        wrapper="breakword"
        fontFamily="OptimisticDisplayBold"
        lineHeightMultiplier={1}
      >
        {content[language].homeTitle}
      </Text>
      <Container width="100%" flexDirection="row" gapColumn={40}>
        <Container flexGrow={1} maxWidth={484}>
          <Image url={assets.hero} width="100%" />
        </Container>
        <Container flexShrink={1}>
          <Text color="#000000" fontSize={20} wrapper="breakword" lineHeightMultiplier={1.4}>
            {content[language].homeDescription}
          </Text>
        </Container>
      </Container>
      <Container
        backgroundColor="#1877F2"
        positionType="absolute"
        onClick={() => setClicked((clicked) => !clicked)}
        positionBottom={0}
        positionRight={0}
        padding={18}
        minWidth={202}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Text color="#ffffff" fontFamily="OptimisticDisplayBold" fontSize={18}>
          BEGIN{clicked ? " (clicked)" : ""}
        </Text>
      </Container>
    </Container>
  );
}
