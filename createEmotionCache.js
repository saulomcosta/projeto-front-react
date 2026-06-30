import createCache from '@emotion/cache';

// A função createEmotionCache é um helper padrão para configurar o cache do Emotion
// para Server-Side Rendering (SSR) em aplicações Next.js.
export default function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}
