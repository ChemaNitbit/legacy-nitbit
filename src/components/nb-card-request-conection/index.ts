export * from './NbCardRequestConection';

export interface NbCardRequestConectionProps {
  url: string;
  name: string;
  description: string;
  onCancel: () => void;
  onBlock: () => void;
  onAccept: () => void;
}
