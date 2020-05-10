const headerHeight = "9rem";
const desktopHeaderHeight = "13rem";


const pale = "#f0f0ee";
const clay = "#bb764b";
const wine = "#a34430";
const saffron = "#cca74e";
const darksaffron = "#9e862e";
const tumeric = "#e3c090";
const coal = "#2a2825";
const cloud = "#848880";
const mole = "#503a2d";
const sand = "#cebfa8";
const lightgray = "#d2d4d1";


module.exports = {
  theme: {
    colors: {
      light: pale,
      dark: coal,
      accent1: clay,
      accent2: saffron,
      accent2dark: darksaffron,
      accent3: wine,
      accent4: mole,
      accent5: sand,
      transparent: "transparent",
      gray: cloud,
      lightgray: lightgray 
    },
    fontFamily: {
      title: ["Gotu", "Helvetica", "san serif"],
      body: ["Roboto", "Helvetica", "san serif"],
    },
    extend: {
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
      },
      inset: {
        headerHeight: headerHeight,
      },
      maxHeight: {
        half: "50vh",
      },
      opacity: {
        "80": ".8",
        "90": ".9",
      },
      spacing: {
        "almost-full": "90vh",
        header: headerHeight,
        "desktop-header": desktopHeaderHeight,
      },
      transitionProperty: {
        height: "height",
        transform: "transform",
        opacity: "opacity",
      },
    },
  },
  variants: {
    height: ["group-hover", "hover", "responsive"],
    margin: ["first"],
    opacity: ["group-hover"],
    padding: ["first", "last", "responsive"],
    borderStyle: ["last", "responsive"],
  },
};
