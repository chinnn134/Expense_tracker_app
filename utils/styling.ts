import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
<<<<<<< HEAD

=======
>>>>>>> 6163a122ef3268511a8c254e7e4007d395cfd283
const [shortDimension, longDimension] =
  SCREEN_WIDTH < SCREEN_HEIGHT
    ? [SCREEN_WIDTH, SCREEN_HEIGHT]
    : [SCREEN_HEIGHT, SCREEN_WIDTH];
<<<<<<< HEAD

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size: number) =>
  Math.round(
    PixelRatio.roundToNearestPixel(
      (shortDimension / guidelineBaseWidth) * (size as number)
    )
  );

export const verticalScale = (size: number) =>
  Math.round(
    PixelRatio.roundToNearestPixel(
      (longDimension / guidelineBaseHeight) * (size as number)
    )
  );
=======
    const guidelineBaseWidth = 375;
    const guidelineBaseHeight = 812;
    export const scale = (size: number) =>
        Math.round(
          PixelRatio.roundToNearestPixel(
            (shortDimension / guidelineBaseWidth) * (size as number)
          )
        );
    export const verticalScale = (size: number) =>
        Math.round(
            PixelRatio.roundToNearestPixel(
            (longDimension / guidelineBaseHeight) * (size as number)
            )
        );
        
>>>>>>> 6163a122ef3268511a8c254e7e4007d395cfd283
