export interface ISelectValue {
  value: string;
  label: string;
  select?: boolean;
}

export interface INavItem {
  label: string;
  subLabel?: string;
  children?: Array<INavItem>;
  href?: string;
}
