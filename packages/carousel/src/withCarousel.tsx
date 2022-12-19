import { MultiStyleConfig } from "@chakra-ui/react";

export default function withCarousel() {
  const Carousel: MultiStyleConfig = {
    parts: ["container", "arrow", "dots", "dot"],
    variants: {
      //
      // 💡💡
      // Legend
      //
      // ✅ __size: used to control buttons, icons and box sizes and spacing
      // ✅ __variant: used to control the type of dots aka. indicator container
      // ✅ __wrapped: used to control whether to hide indicator container
      //

      hds(context) {
        return {
          container: {
            position: "relative",
          },
          dots: {
            bgColor: context.__wrapped ? "#7070DD" : "transparent",
            margin: "0 0 16px 0",
            height: "unset",
            width: "fit-content",
            left: "50%",
            transform: "translateX(-50%)",
            rounded: "full",
            padding: context.__wrapped ? (context.__size === "lg" ? "12px" : "8px") : 0,
            display: "flex",
            gap: context.__size === "lg" ? "12px" : "8px",
          },
          dot: {
            bgColor: context.__wrapped ? "#4A3880" : "#F0F0F0",
            width: context.__variant === "dash" ? "40px" : "8px",
            height: "8px",
            minWidth: "unset",
            minHeight: "unset",
            rounded: "full",
            transition: "background-color 300ms ease-in-out",
            '&[data-selected="true"]': {
              bgColor: context.__wrapped ? "#FFFFFF" : "#4A3880",
            },
          },
          arrow: {
            position: "absolute",
            zIndex: 9,
            top: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            rounded: "full",
            bgColor: "#8A68EF",
            width: context.__size === "lg" ? "44px" : "36px",
            height: context.__size === "lg" ? "44px" : "36px",
            minWidth: "unset",
            minHeight: "unset",
            transform: "translateY(-50%)",
            '&[aria-label^="previous"]': {
              left: 4,
            },
            '&[aria-label^="next"]': {
              right: 4,
            },
            "& svg": {
              color: "#FFFFFF",
              width: context.__size === "lg" ? 6 : 5,
              height: context.__size === "lg" ? 6 : 5,
            },
          },
        };
      },
    },
  };

  return { components: { Carousel } };
}
