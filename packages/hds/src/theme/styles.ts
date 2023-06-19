import { Styles } from '@chakra-ui/theme-tools';

export const styles: Styles = {
  global() {
    return {
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        minH: '100vh',
        color: 'neutral.900',
        bgColor: 'white',
      },
    };
  },
};
