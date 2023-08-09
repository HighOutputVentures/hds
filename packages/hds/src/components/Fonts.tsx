import { Global } from '@emotion/react';

/**
 * @deprecated use font from `next-js` whenever possible
 */
export function InterFont() {
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
  `;

  return <Global styles={styles} />;
}
