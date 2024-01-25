const listItemStyle={
    color: "inherit",
    "&.active": { backgroundColor: "rgba(255, 255, 255, 0.1)", color: "#ffff",
    "& .myIconClass, & .MuiTypography-root": {
      color: "#ffff"
    } }
  }
const buttonStyle={
  "&:hover": {
    color: "#dedede",
    "& .myIconClass, & .MuiTypography-root": {
      color: "#dedede"
    }
  }
}

export {
    listItemStyle,buttonStyle
}