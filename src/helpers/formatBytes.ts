export const formatBytes = (bytes: number) => {
  if (bytes < 1024) {
    return bytes + ' B';
  } else if (bytes < 1024 * 1024) {
    return (bytes / 1024).toFixed(0) + 'Kb';
  } else if (bytes < 1024 * 1024 * 1024) {
    return (bytes / (1024 * 1024)).toFixed(0) + 'Mb';
  } else {
    return (bytes / (1024 * 1024 * 1024)).toFixed(0) + 'Gb';
  }
};
