export * from './NbIcon';

export const ICON_SIZE = {
  sm: 16,
  md: 24,
  lg: 32,
};
export interface NbIconProps {
  name: string;
  size: 'sm' | 'md' | 'lg';
  onPress?: () => void;
  color?: string; // TODO pendiente por definir colores
}
