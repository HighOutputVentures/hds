import extendTheme from './extendTheme';

jest.mock('@chakra-ui/react', () => {
  return {
    extendTheme(...themes: Record<string, any>[]) {
      return themes[0];
    },
  };
});

jest.mock('../theme', () => {
  return {};
});

describe('extendTheme util', () => {
  it('Should merge themes deeply and accurately', () => {
    const theme_0 = {
      Button: {
        baseStyle: {
          bgColor: 'blue.400',
        },
      },
    };

    const theme_1 = {
      Button: {
        baseStyle: {
          _hover: {
            bgColor: 'blue.300',
          },
        },
      },
      Input: {
        baseStyle: {
          field: {},
        },
      },
    };

    const theme_2 = {
      Input: {
        baseStyle: {
          field: {
            borderColor: 'gray.300',
          },
        },
      },
    };

    expect(extendTheme(theme_0, theme_1, theme_2)).toEqual({
      Button: {
        baseStyle: {
          _hover: {
            bgColor: 'blue.300',
          },
          bgColor: 'blue.400',
        },
      },
      Input: {
        baseStyle: {
          field: {
            borderColor: 'gray.300',
          },
        },
      },
    });
  });
});
