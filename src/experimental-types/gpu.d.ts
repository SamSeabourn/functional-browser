declare class GPUValidationError extends Error {
  readonly message: string;
  readonly name: 'ValidationError';
}

declare class GPUPipelineError extends Error {
  readonly message: string;
  readonly name: 'PipelineError';
  readonly reason: GPUPipelineErrorReason;
}

type GPUPipelineErrorReason = 'validation' | 'internal';
