export * from './NbInteractionPost';

export interface NbInteractionPostProps {
  onLike: () => void;
  liked: boolean;
  countLike: number;
  onComment: () => void;
  countComment: number;
  onShare: () => void;
  countShare: number;
}
