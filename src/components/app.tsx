import React from "react";
import { useThree } from "@react-three/fiber";
import { CameraControls, PerspectiveCamera } from "@react-three/drei";
import { DefaultStyleProvider, FontFamilyProvider, noAnimation, RootContainer, Text } from "@coconut-xr/koestlich";
import { loadYoga } from "@coconut-xr/flex";
import { Controllers } from "@react-three/xr";
import Home from "@/pages/home";

export default function App() {
  const viewport = useThree((state) => state.viewport);

  return (
    <>
      <ambientLight />
      <PerspectiveCamera makeDefault position={[0, 0, 3]} />
      <CameraControls makeDefault truckSpeed={0} dollySpeed={0} />
      <Controllers />
      <FontFamilyProvider
        fontFamilies={{
          OptimisticDisplayMedium: ["./assets/fonts/optimistic-display-medium/", "optimistic-display-medium.json"],
          OptimisticDisplayBold: ["./assets/fonts/optimistic-display-bold/", "optimistic-display-bold.json"],
        }}
        defaultFontFamily="OptimisticDisplayMedium"
      >
        <DefaultStyleProvider animation={noAnimation}>
          <RootContainer
            sizeX={viewport.width}
            sizeY={viewport.height}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            loadYoga={loadYoga}
          >
            <React.Suspense>
              <Home />
            </React.Suspense>
          </RootContainer>
        </DefaultStyleProvider>
      </FontFamilyProvider>
    </>
  );
}
