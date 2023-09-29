import {useState} from 'react';
import {Animated, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

interface useListHiddingHeaderParams {
  topSpaceAfterHeaderIsHidden?: number;
  initialThreshold: number;
  topTranslation: number;
}

/**
 * Hook that returns params for hiding header when scrolling down a list
 * @param topSpaceAfterHeaderIsHidden - if you want to add some space after header is hidden. This is useful if you need to show another header after this one is hidden
 * @param initialThreshold - initial threshold
 * @param topTranslation - how much header should be translated when hidden
 * @returns {onScroll, translateYAnim, isHeaderHidden}
 */
export const useListHiddingHeader = ({
  topSpaceAfterHeaderIsHidden = 0,
  initialThreshold,
  topTranslation,
}: useListHiddingHeaderParams) => {
  const [isHeaderHidden, setHeaderHidden] = useState(false);
  const [threshold, setThreshold] = useState(initialThreshold);

  const translateYAnim = new Animated.Value(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    const shouldHide = offsetY > threshold && !isHeaderHidden;
    const shouldShow = offsetY <= threshold && isHeaderHidden;

    if (shouldHide) {
      Animated.timing(translateYAnim, {
        toValue: topTranslation,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setHeaderHidden(true);
        setThreshold(topSpaceAfterHeaderIsHidden);
      });
    } else if (shouldShow) {
      Animated.timing(translateYAnim, {
        toValue: topTranslation * -1,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setHeaderHidden(false);
        setThreshold(initialThreshold);
      });
    }
  };

  return {
    onScroll,
    translateYAnim,
    isHeaderHidden,
  };
};
