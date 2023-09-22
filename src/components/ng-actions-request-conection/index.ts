export * from './NbActionsRequestConection';

export interface NbActionsRequestConectionPops {
  onCancel: () => void;
  onBlock: () => void;
  onAccept: () => void;
}
