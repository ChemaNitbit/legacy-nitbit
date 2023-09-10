export * from './NbInteractionPost';

export interface NbInteractionPostProps {
  onPressLike: () => void;
  liked: boolean;
  countLike: number;
  onPressComment: () => void;
  countComment: number;
  onPressShare: () => void;
  countShare: number;
}
