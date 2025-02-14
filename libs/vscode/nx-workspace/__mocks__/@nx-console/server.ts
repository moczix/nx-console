const cacheJson = jest.fn();

const fileExists = jest.fn();

const getOutputChannel = jest.fn(() => ({
  appendLine: jest.fn(),
  show: jest.fn(),
}));

const getTelemetry = jest.fn(() => ({
  exception: jest.fn(),
}));

const toWorkspaceFormat = jest.fn();

export {
  cacheJson,
  fileExists,
  getOutputChannel,
  getTelemetry,
  toWorkspaceFormat,
};
