import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: 'white',
        background: 'black',
        fontSize: 'md',
      },
      a: {
        _hover: {
          textDecoration: 'underline',
          color: 'lime'
        }
      }
    },
    letterSpacings: {
      tight: '-0.005em',
      normal: '0',
      wide: '0.005em',
    },
    
    lineHeights: {
      none: 1,
      short: 1.2,
      base: 1.5,
    },

    fonts: {
      heading: `'SF Pro', 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
      body: `'SF Pro', 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
    }
  }
})