import React from "react";
import { isXrModeSupported } from "@/utils";
import { VRButton, XR } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import App from "@/components/app";

export default function Root() {
  const [xrSupported, setXrSupported] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    isXrModeSupported("immersive-vr").then(setXrSupported);
  }, []);

  if (xrSupported === undefined) {
    return <></>;
  }

  if (xrSupported) {
    return <VRButton>Enter XR</VRButton>;
  }

  return (
    <Canvas gl={{ localClippingEnabled: true }}>
      <XR>
        <React.Suspense>
          <App />
        </React.Suspense>
      </XR>
    </Canvas>
  );
}
