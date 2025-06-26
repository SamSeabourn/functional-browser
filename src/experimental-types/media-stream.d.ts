declare interface MediaStreamTrackGeneratorInit {
  kind: 'audio' | 'video';
}

declare class MediaStreamTrackGenerator<
  T extends WritableStreamDefaultWriter<any> = any,
> extends MediaStreamTrack {
  readonly writable: WritableStream<T>;
  constructor(init: MediaStreamTrackGeneratorInit);
}

declare class MediaStreamTrackProcessor<T extends MediaStreamTrack = MediaStreamTrack> {
  readonly readable: ReadableStream<any>;
  readonly track: T;
  constructor(init: MediaStreamTrackProcessorInit<T>);
}

declare interface MediaStreamTrackProcessorInit<T extends MediaStreamTrack = MediaStreamTrack> {
  track: T;
}
