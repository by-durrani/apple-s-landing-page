// react imports
import { useRef } from "react";

// ThreeJS
import {
  PresentationControls,
  type PresentationControlProps,
} from "@react-three/drei";
import type { Group, Object3DEventMap } from "three";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// components
import MacbookModel16 from "../models/Macbook-16";
import MacbookModel14 from "../models/Macbook-14";

type ModelSwitcher = {
  isMobile: boolean;
  scale: number;
};

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;
const SCALE_LARGE_DESKTOP = 0.08;
const SCALE_LARGE_MOBILE = 0.05;

const fadeMeshes = (group: Group | null, opacity: number) => {
  if (!group) return;

  group.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
    }
  });
};

const moveGroup = (group: Group | null, x: number) => {
  if (!group) return;

  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

const ModelSwitcher = ({ isMobile, scale }: ModelSwitcher) => {
  const smallMacbookRef = useRef<Group<Object3DEventMap>>(null);
  const largeMacbookRef = useRef<Group<Object3DEventMap>>(null);

  const showLargeMacbook =
    scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

  useGSAP(() => {
    if (showLargeMacbook) {
      moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacbookRef.current, 0);

      fadeMeshes(smallMacbookRef.current, 0);
      fadeMeshes(largeMacbookRef.current, 1);
    } else {
      moveGroup(smallMacbookRef.current, 0);
      moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

      fadeMeshes(smallMacbookRef.current, 1);
      fadeMeshes(largeMacbookRef.current, 0);
    }
  }, [scale]);

  const controlsConfig: PresentationControlProps = {
    snap: true,
    speed: 1,
    zoom: 1,
    polar: [-Math.PI, Math.PI],
    azimuth: [-Infinity, Infinity],
    // we can apply physics in this more but later on that
  };

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
