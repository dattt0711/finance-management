type Anchor = "top" | "left" | "bottom" | "right";

interface IAnchorState {
  top: boolean;
  left: boolean;
  right: boolean;
  bottom: boolean;
}

export interface IDrawer {
  anchor: Anchor;
  anchorState: IAnchorState;
}

export type {
  Anchor,
}
