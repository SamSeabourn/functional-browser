declare class XRRigidTransform {
  readonly inverse: XRRigidTransform;
  readonly matrix: Float32Array;
  readonly orientation: DOMPointReadOnly;
  readonly position: DOMPointReadOnly;
  constructor(position?: DOMPointInit, orientation?: DOMPointInit);
}

declare class XRRay {
  readonly direction: DOMPointReadOnly;
  readonly matrix: Float32Array;
  readonly origin: DOMPointReadOnly;
  constructor(origin?: DOMPointInit, direction?: DOMPointInit, matrix?: Float32Array);
}

declare class XRInputSourceEvent extends Event {
  readonly frame: XRFrame;
  readonly inputSource: XRInputSource;
  constructor(type: string, eventInitDict: XRInputSourceEventInit);
}

interface XRInputSourceEventInit extends EventInit {
  frame: XRFrame;
  inputSource: XRInputSource;
}

declare class XRWebGLLayer {
  readonly antialias: boolean;
  readonly framebuffer: WebGLFramebuffer | null;
  readonly framebufferHeight: number;
  readonly framebufferWidth: number;
  constructor(
    session: XRSession,
    context: WebGLRenderingContext | WebGL2RenderingContext,
    layerInit?: XRWebGLLayerInit
  );
  static getNativeFramebufferScaleFactor(session: XRSession): number;
  getViewport(view: XRView): XRViewport;
}

declare class XRWebGLBinding {
  constructor(session: XRSession, context: WebGLRenderingContext | WebGL2RenderingContext);
  createLayer(layerInit?: XRWebGLLayerInit): XRWebGLLayer;
  getCameraImage(camera: XRCamera): WebGLTexture;
  getDepthInformation(view: XRView): XRCPUDepthInformation | XRWebGLDepthInformation;
}

interface XRWebGLLayerInit {
  antialias?: boolean;
  depth?: boolean;
  stencil?: boolean;
  alpha?: boolean;
  ignoreDepthValues?: boolean;
  framebufferScaleFactor?: number;
}

interface XRViewport {
  x: number;
  y: number;
  width: number;
  height: number;
}

// Placeholder stubs to avoid errors (expand if needed)
type XRView = object;
type XRFrame = object;
type XRInputSource = object;
type XRSession = object;
type XRCamera = object;
type XRCPUDepthInformation = object;
type XRWebGLDepthInformation = object;
