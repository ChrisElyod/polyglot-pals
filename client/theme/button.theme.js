export const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: 12,
    mx: 4,
    transition: '300ms'
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "14px",
      px: 4,
      py: 3,
    },
    md: {
      fontSize: "18px",
      px: 6,
      py: 4,
    },
    lg: {
      fontSize: "22px",
      px: 8,
      py: 5,
    }
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "#655feb",
      color: "#655feb",
    },
    solid: {
      bg: "linear-gradient(to right top, #8c8db9, #8588bd, #7e82c2, #767dc6, #6e78ca, #6184d3, #5390da, #469bdf, #5cb5e0, #87cddf, #b7e1e3, #e6f4f1);",
      color: "white",
      _hover: {
        bottom: '.25em',
        shadow: 'lg',
        bg: "linear-gradient(to right top, #8c8db9, #8588bd, #7e82c2, #767dc6, #6e78ca, #6184d3, #5390da, #469bdf, #5cb5e0, #87cddf, #b7e1e3, #e6f4f1);",
      },
      _active: {
        bg: "linear-gradient(to right top, #8c8db9, #8588bd, #7e82c2, #767dc6, #6e78ca, #6184d3, #5390da, #469bdf, #5cb5e0, #87cddf, #b7e1e3, #e6f4f1);",
      }
    },
    nav: {
      bg: "transparent",
      color: 'black',
      padding: 0,
      borderRadius: '0px',
    },
    navMenu: {
      bg: "transparent",
      color: 'black',
      boxShadow: '6px 0 2px -2px inset #8c8db9',
      py: 0,
      px: 1,
      borderRadius: '0px',
    },
  },
  colorScheme: {
    
  },
  // The default size and variant values
  defaultProps: {
    size: "sm",
    variant: "solid",
  },
}