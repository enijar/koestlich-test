import React from "react";
import { Container, Image, noAnimation, Text } from "@coconut-xr/koestlich";
import { assets } from "@/config/assets";

export default function Home() {
  const [clicked, setClicked] = React.useState(false);

  return (
    <Container
      width={1200}
      height={584}
      backgroundColor="#ffffff"
      animation={noAnimation}
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
        animation={noAnimation}
        wrapper="breakword"
        fontFamily="OptimisticDisplayBold"
        lineHeightMultiplier={1}
      >
        Building trust with a new advertiser
      </Text>
      <Container width="100%" flexDirection="row" gapColumn={40} animation={noAnimation}>
        <Container flexGrow={1} maxWidth={484} animation={noAnimation}>
          <Image url={assets.hero} width="100%" animation={noAnimation} />
        </Container>
        <Container flexShrink={1} animation={noAnimation}>
          <Text color="#000000" fontSize={20} animation={noAnimation} wrapper="breakword" lineHeightMultiplier={1.4}>
            This is the first call with Imani, owner of retail “Lucky Shrub.” Imani scheduled a meeting with a Marketing
            Pro after a cold outreach email. Here, the Marketing Pro will demonstrate selling the value of working with
            a Marketing Pro, discover important business information and goals, and help the advertiser set up the
            pitched solution.
          </Text>
        </Container>
      </Container>
      <Container
        backgroundColor="#1877F2"
        positionType="absolute"
        onClick={() => setClicked((clicked) => !clicked)}
        positionBottom={0}
        positionRight={0}
        animation={noAnimation}
        padding={18}
        minWidth={202}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Text color="#ffffff" fontFamily="OptimisticDisplayBold" fontSize={18} animation={noAnimation}>
          BEGIN{clicked ? " (clicked)" : ""}
        </Text>
      </Container>
    </Container>
  );
}
