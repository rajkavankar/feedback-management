import React from "react"
import { Box } from "@mui/material"

const Flex = ({ children, justify, align, direction }) => {
  return (
    <Box
      sx={{
        my: 1,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: `${
          direction === "row" ? "row" : direction === "column" && "column"
        }`,
        justifyContent: `${
          justify === "center"
            ? "center"
            : justify === "between"
            ? "space-between"
            : justify === "start"
            ? "flex-start"
            : justify === "end"
            ? "flex-end"
            : justify === "around" && "space-around"
        } `,
        alignItems: `${
          align === "center"
            ? "center"
            : align === "start"
            ? "flex-start"
            : align === "end" && "flex-end"
        }`,
      }}>
      {children}
    </Box>
  )
}

Flex.defaultProps = {
  justify: "center",
  align: "center",
  direction: "row",
}

export default Flex
