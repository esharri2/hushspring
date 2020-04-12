const headerHeight = "5rem";

const pale = "#f0f0ee";
const clay = "#bb764b";
const wine = "#a34430";
const saffron = "#cca74e";
const tumeric = "#e3c090";
const coal = "#2a2825";
const cloud = "#848880";
const mole = "#503a2d";
const sand = "#cebfa8"


module.exports = {
  theme: {
    colors: {
      light: pale,
      dark: coal,
      accent1: clay,
      accent2: saffron,
      accent3: wine,
      accent4: mole,
      accent5: sand,
      transparent: "transparent",
      gray: cloud
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
        lg: "40rem",
      },
      opacity: {
        "80": ".8",
        "90": ".9",
      },
      spacing: {
        "almost-full": "90vh",
        header: headerHeight,
      },
      transitionProperty: {
        height: "height",
        transform: "transform",
        opacity: "opacity",
      },
    },
  },
  variants: {
    height: ["group-hover", "hover"],
    margin: ["first"],
    opacity: ["group-hover"],
    padding: ["first", "last", "responsive"],
    borderStyle: ["last", "responsive"]
  },
};
