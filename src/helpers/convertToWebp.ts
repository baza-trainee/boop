export function replaceExtensionWithWebp(url: string): string {
  return url.replace(/\.[^/.]+$/, '.webp');
}
