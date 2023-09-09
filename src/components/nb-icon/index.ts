export * from './NbIcon';

export const SIZES_ICON = {
  sm: 16,
  md: 24,
  lg: 32,
};
export interface NbIconProps {
  name: string;
  size: 'sm' | 'md' | 'lg';
  onPress?: () => void;
  color?: 'black' | 'white'; // TODO pendiente por definir colores
}
