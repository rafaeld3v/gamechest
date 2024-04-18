import React, { ReactNode } from "react";

import { BackgroundContainer } from "./styles";

interface BackgroundProps {
  children: ReactNode;
}

export function Background({ children }: BackgroundProps) {
  return <BackgroundContainer>{children}</BackgroundContainer>;
}
