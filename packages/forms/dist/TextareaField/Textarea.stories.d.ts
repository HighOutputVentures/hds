import React from 'react';
declare const _default: import("@storybook/csf").ComponentAnnotations<import("@storybook/react").ReactFramework, Pick<import("./TextareaField").TextAreaFieldProps, "onChange" | "onBlur" | "name" | "min" | "max" | "maxLength" | "minLength" | "pattern" | "required" | "disabled" | "id" | "size" | "form" | "label" | "p" | "slot" | "style" | "title" | "clipPath" | "filter" | "m" | "margin" | "mt" | "marginBlockStart" | "marginTop" | "mr" | "marginInlineEnd" | "marginEnd" | "me" | "marginRight" | "mb" | "marginBlockEnd" | "marginBottom" | "ml" | "marginInlineStart" | "marginStart" | "ms" | "marginLeft" | "mx" | "marginInline" | "marginX" | "my" | "marginBlock" | "marginY" | "padding" | "pt" | "paddingBlockStart" | "paddingTop" | "pr" | "paddingInlineEnd" | "paddingEnd" | "pe" | "paddingRight" | "pb" | "paddingBlockEnd" | "paddingBottom" | "pl" | "paddingInlineStart" | "paddingStart" | "ps" | "paddingLeft" | "px" | "paddingInline" | "paddingX" | "py" | "paddingBlock" | "paddingY" | "textColor" | "color" | "fill" | "stroke" | "transition" | "transitionProperty" | "transitionTimingFunction" | "transitionDuration" | "transitionDelay" | "animation" | "willChange" | "fontWeight" | "lineHeight" | "letterSpacing" | "fontSize" | "fontFamily" | "textAlign" | "fontStyle" | "wordBreak" | "overflowWrap" | "textOverflow" | "textTransform" | "whiteSpace" | "noOfLines" | "alignItems" | "alignContent" | "justifyItems" | "justifyContent" | "flexWrap" | "flexFlow" | "flexBasis" | "flexDirection" | "flexDir" | "flex" | "gap" | "rowGap" | "columnGap" | "justifySelf" | "alignSelf" | "order" | "flexGrow" | "flexShrink" | "placeItems" | "placeContent" | "placeSelf" | "experimental_spaceX" | "experimental_spaceY" | "transform" | "transformOrigin" | "translateX" | "translateY" | "rotate" | "skewX" | "skewY" | "scaleX" | "scaleY" | "scale" | "gridGap" | "gridColumnGap" | "gridRowGap" | "gridColumnStart" | "gridRowStart" | "gridRowEnd" | "gridTemplate" | "gridColumnEnd" | "gridColumn" | "gridRow" | "gridAutoFlow" | "gridAutoColumns" | "gridAutoRows" | "gridTemplateColumns" | "gridTemplateRows" | "gridTemplateAreas" | "gridArea" | "blur" | "brightness" | "contrast" | "hueRotate" | "invert" | "saturate" | "dropShadow" | "backdropFilter" | "backdropBlur" | "backdropBrightness" | "backdropContrast" | "backdropHueRotate" | "backdropInvert" | "backdropSaturate" | "display" | "width" | "w" | "inlineSize" | "boxSize" | "maxWidth" | "maxW" | "maxInlineSize" | "minWidth" | "minW" | "minInlineSize" | "height" | "h" | "blockSize" | "maxHeight" | "maxH" | "maxBlockSize" | "minHeight" | "minH" | "minBlockSize" | "verticalAlign" | "overflow" | "overflowX" | "overflowY" | "boxSizing" | "boxDecorationBreak" | "float" | "objectFit" | "objectPosition" | "overscrollBehavior" | "overscroll" | "overscrollBehaviorX" | "overscrollX" | "overscrollBehaviorY" | "overscrollY" | "visibility" | "isolation" | "border" | "borderWidth" | "borderStyle" | "borderColor" | "borderRadius" | "rounded" | "borderTop" | "borderBlockStart" | "borderTopWidth" | "borderBlockStartWidth" | "borderBottomWidth" | "borderBlockEndWidth" | "borderLeftWidth" | "borderStartWidth" | "borderInlineStartWidth" | "borderRightWidth" | "borderEndWidth" | "borderInlineEndWidth" | "borderTopStyle" | "borderBlockStartStyle" | "borderBottomStyle" | "borderBlockEndStyle" | "borderLeftStyle" | "borderStartStyle" | "borderInlineStartStyle" | "borderRightStyle" | "borderEndStyle" | "borderInlineEndStyle" | "borderTopColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBlockEndColor" | "borderLeftColor" | "borderStartColor" | "borderInlineStartColor" | "borderRightColor" | "borderEndColor" | "borderInlineEndColor" | "borderRight" | "borderEnd" | "borderInlineEnd" | "borderBottom" | "borderBlockEnd" | "borderLeft" | "borderStart" | "borderInlineStart" | "borderTopRadius" | "roundedTop" | "borderRightRadius" | "roundedRight" | "roundedEnd" | "borderInlineEndRadius" | "borderEndRadius" | "borderBottomRadius" | "roundedBottom" | "borderLeftRadius" | "roundedLeft" | "roundedStart" | "borderInlineStartRadius" | "borderStartRadius" | "borderTopLeftRadius" | "borderTopStartRadius" | "borderStartStartRadius" | "roundedTopLeft" | "roundedTopStart" | "borderTopRightRadius" | "borderTopEndRadius" | "borderStartEndRadius" | "roundedTopRight" | "roundedTopEnd" | "borderBottomLeftRadius" | "borderBottomStartRadius" | "borderEndStartRadius" | "roundedBottomLeft" | "roundedBottomStart" | "borderBottomRightRadius" | "borderBottomEndRadius" | "borderEndEndRadius" | "roundedBottomRight" | "roundedBottomEnd" | "borderX" | "borderInline" | "borderY" | "borderBlock" | "boxShadow" | "shadow" | "mixBlendMode" | "blendMode" | "backgroundBlendMode" | "bgBlendMode" | "opacity" | "bg" | "bgClip" | "backgroundClip" | "background" | "bgColor" | "backgroundColor" | "backgroundImage" | "bgGradient" | "backgroundSize" | "bgPos" | "backgroundPosition" | "bgImage" | "bgImg" | "bgRepeat" | "backgroundRepeat" | "bgSize" | "bgAttachment" | "backgroundAttachment" | "bgPosition" | "listStyleType" | "listStylePosition" | "listStylePos" | "listStyleImage" | "listStyleImg" | "zIndex" | "top" | "insetBlockStart" | "right" | "insetInlineEnd" | "insetEnd" | "bottom" | "insetBlockEnd" | "left" | "insetInlineStart" | "insetStart" | "inset" | "insetX" | "insetY" | "pos" | "position" | "insetInline" | "insetBlock" | "ring" | "ringColor" | "ringOffset" | "ringOffsetColor" | "ringInset" | "scrollBehavior" | "scrollSnapAlign" | "scrollSnapStop" | "scrollSnapType" | "scrollMargin" | "scrollMarginTop" | "scrollMarginBottom" | "scrollMarginLeft" | "scrollMarginRight" | "scrollMarginX" | "scrollMarginY" | "scrollPadding" | "scrollPaddingTop" | "scrollPaddingBottom" | "scrollPaddingLeft" | "scrollPaddingRight" | "scrollPaddingX" | "scrollPaddingY" | "appearance" | "userSelect" | "pointerEvents" | "resize" | "cursor" | "outline" | "outlineOffset" | "outlineColor" | "textDecoration" | "textDecor" | "textDecorationColor" | "textDecorationThickness" | "textDecorationStyle" | "textDecorationLine" | "textUnderlineOffset" | "textShadow" | "srOnly" | "layerStyle" | "textStyle" | "apply" | "as" | "key" | "autoComplete" | "autoFocus" | "cols" | "dirName" | "placeholder" | "rows" | "value" | "wrap" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "lang" | "nonce" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "_hover" | "_active" | "_focus" | "_highlighted" | "_focusWithin" | "_focusVisible" | "_disabled" | "_readOnly" | "_before" | "_after" | "_empty" | "_expanded" | "_checked" | "_grabbed" | "_pressed" | "_invalid" | "_valid" | "_loading" | "_selected" | "_hidden" | "_autofill" | "_even" | "_odd" | "_first" | "_last" | "_notFirst" | "_notLast" | "_visited" | "_activeLink" | "_activeStep" | "_indeterminate" | "_groupHover" | "_peerHover" | "_groupFocus" | "_peerFocus" | "_groupFocusVisible" | "_peerFocusVisible" | "_groupActive" | "_peerActive" | "_groupDisabled" | "_peerDisabled" | "_groupInvalid" | "_peerInvalid" | "_groupChecked" | "_peerChecked" | "_groupFocusWithin" | "_peerFocusWithin" | "_peerPlaceholderShown" | "_placeholder" | "_placeholderShown" | "_fullScreen" | "_selection" | "_rtl" | "_ltr" | "_mediaDark" | "_mediaReduceMotion" | "_dark" | "_light" | "colorScheme" | "__css" | "sx" | "css" | "focusBorderColor" | "errorBorderColor" | "isRequired" | "isDisabled" | "isInvalid" | "isReadOnly" | "variant" | "orientation" | "styleConfig" | "type" | "leftIcon" | "rightIcon" | "limit" | "labelColor" | "errorMsg" | "helperMsg" | "partProps"> & React.RefAttributes<HTMLTextAreaElement>>;
export default _default;
export declare const Default: any;
