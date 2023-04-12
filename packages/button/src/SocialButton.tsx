import { Button, ButtonProps, IconButton } from "@chakra-ui/react";
import {
  AppleIcon,
  DribbleIcon,
  FacebookIcon,
  FigmaIcon,
  GoogleIcon,
  TwitterIcon,
} from "@highoutput/hds-icons";
import * as React from "react";
import { Prettify } from "./types";

/* prettier-ignore */
type Picked = Omit<
  ButtonProps,
  | "sx"
  | "size"
  | "variant"
  | "children"
  | "leftIcon"
  | "rightIcon"
  | "colorScheme"
>;

type Icon = "google" | "dribble" | "twitter" | "figma" | "facebook" | "apple";

type Variant = "outline" | "solid";

type Base = {
  icon: Icon;
  label?: string;
  variant?: Variant;
  __iconTestId?: string;
  __buttonTestId?: string;
};

export type SocialButtonProps = Prettify<Picked & Base>;

export default React.forwardRef<HTMLButtonElement, SocialButtonProps>(
  function SocialButton(props, ref) {
    const {
      icon,
      label,
      variant = "outline",
      __iconTestId = "hds.social-button.icon",
      __buttonTestId = "hds.social-button.group",
      ...others
    } = props;

    const styles = useStyles({ variant });

    const getSocialIcon = React.useCallback(() => {
      switch (icon) {
        case "apple":
          return (
            <AppleIcon
              isDisabled={others.isDisabled}
              variant={variant}
              data-testid={__iconTestId}
            />
          );
        case "dribble":
          return (
            <DribbleIcon
              isDisabled={others.isDisabled}
              variant={variant}
              data-testid={__iconTestId}
            />
          );
        case "facebook":
          return (
            <FacebookIcon
              isDisabled={others.isDisabled}
              variant={variant}
              data-testid={__iconTestId}
            />
          );
        case "figma":
          return <FigmaIcon isDisabled={others.isDisabled} data-testid={__iconTestId} />;
        case "google":
          return <GoogleIcon isDisabled={others.isDisabled} data-testid={__iconTestId} />;
        case "twitter":
          return (
            <TwitterIcon
              isDisabled={others.isDisabled}
              variant={variant}
              data-testid={__iconTestId}
            />
          );
      }
    }, [
      //
      icon,
      variant,
      others.isDisabled,
    ]);

    if (!label) {
      return (
        <IconButton
          ref={ref}
          aria-label=""
          icon={getSocialIcon()}
          height="44px"
          paddingY="10px"
          paddingX="16px"
          sx={styles[icon]}
        />
      );
    }

    return (
      <Button
        ref={ref}
        height="44px"
        paddingY="10px"
        paddingX="16px"
        leftIcon={getSocialIcon()}
        sx={styles[icon]}
        data-testid={__buttonTestId}
        {...props}
      >
        {label}
      </Button>
    );
  },
);

function useStyles({ variant }: { variant?: Variant }) {
  const isOutlineVariant = variant === "outline";

  const styles = React.useMemo(
    () => ({
      google: {
        border: "1px solid #D0D5DD",
        bgColor: isOutlineVariant ? "white" : "white",
        color: "black",
        borderRadius: "4px",
        fontSize: "18px",
        fontWeight: 500,
        fontFamily: "Inter",
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        _hover: {
          bgColor: isOutlineVariant ? "white" : "#F9FAFB",
          boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
          _disabled: {
            bgColor: "none",
            boxShadow: "none",
          },
        },
        _active: {
          bgColor: isOutlineVariant ? "white" : "white",
          border: "1px solid #D0D5DD",
          boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7",
        },
      },
      facebook: {
        border: "1px solid #D0D5DD",
        bgColor: isOutlineVariant ? "white" : "#1877F2",
        color: isOutlineVariant ? "black" : "white",
        borderRadius: "4px",
        fontSize: "18px",
        fontWeight: 500,
        fontFamily: "Inter",
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        _hover: {
          bgColor: isOutlineVariant ? "white" : "#0C63D4",
          boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
          _disabled: {
            bgColor: "none",
            boxShadow: "none",
          },
        },
        _active: {
          bgColor: isOutlineVariant ? "white" : "#1877F2",
          border: "1px solid #D0D5DD",
          boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7",
        },
      },
      figma: {
        border: "1px solid #D0D5DD",
        bgColor: isOutlineVariant ? "white" : "#000000",
        color: isOutlineVariant ? "black" : "white",
        borderRadius: "4px",
        fontSize: "18px",
        fontWeight: 500,
        fontFamily: "Inter",
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        _hover: {
          bgColor: isOutlineVariant ? "white" : "#000000",
          boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
          _disabled: {
            bgColor: "none",
            boxShadow: "none",
          },
        },
        _active: {
          bgColor: isOutlineVariant ? "white" : "#000000",
          border: "1px solid #D0D5DD",
          boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7",
          _disabled: {
            bgColor: "none",
            boxShadow: "none",
          },
        },
      },
      apple: {
        border: "1px solid #D0D5DD",
        bgColor: isOutlineVariant ? "white" : "#000000",
        color: isOutlineVariant ? "black" : "white",
        borderRadius: "4px",
        fontSize: "18px",
        fontWeight: 500,
        fontFamily: "Inter",
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        _hover: {
          bgColor: isOutlineVariant ? "white" : "#000000",
          boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
          _disabled: {
            bgColor: "none",
            boxShadow: "none",
          },
        },
        _active: {
          bgColor: isOutlineVariant ? "white" : "#000000",
          border: "1px solid #D0D5DD",
          boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7",
        },
      },
      dribble: {
        border: "1px solid #D0D5DD",
        bgColor: isOutlineVariant ? "white" : "#EA4C89",
        color: isOutlineVariant ? "black" : "white",
        borderRadius: "4px",
        fontSize: "18px",
        fontWeight: 500,
        fontFamily: "Inter",
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        _hover: {
          bgColor: isOutlineVariant ? "white" : "#EA4C89",
          boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
          _disabled: {
            bgColor: "none",
            boxShadow: "none",
          },
        },
        _active: {
          bgColor: isOutlineVariant ? "white" : "#E62872",
          border: "1px solid #D0D5DD",
          boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7",
        },
      },
      twitter: {
        border: "1px solid #D0D5DD",
        bgColor: isOutlineVariant ? "white" : "#1DA1F2",
        color: isOutlineVariant ? "black" : "white",
        borderRadius: "4px",
        fontSize: "18px",
        fontWeight: 500,
        fontFamily: "Inter",
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        _hover: {
          bgColor: isOutlineVariant ? "white" : "#0C63D4",
          boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
          _disabled: {
            bgColor: "none",
            boxShadow: "none",
          },
        },
        _active: {
          bgColor: isOutlineVariant ? "white" : "#0C8BD9",
          boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7",
        },
      },
    }),
    [variant],
  );

  return styles;
}
