export * from './NbInteractionPost';

export interface NbInteractionPostProps {
  onLike: () => void;
  liked: boolean;
  countLike: number;
  onComment: () => void;
  commented: boolean;
  countComment: number;
  onShare: () => void;
  shared: boolean;
  countShare: number;
}
