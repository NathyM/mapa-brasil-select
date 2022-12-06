export interface IDistrictInfo {
  key: string;
  title: string;
  path: string;
  path_aux?: string;
  transform: string;
  selected: boolean;
}

export interface IMapSelectProps {
  multiselect?: boolean;
  width?: string;
  height?: string;
  backgroundColor?: string;
  activeBackgroundColor?: string;
  labelColor?: string;
  strokeColor?: string;
  onChange?: (value: IDistrictInfo[]) => void;
}

export interface IStyledDistrictProps {
  hint: string;
  selected: boolean;
  backgroundColor?: string;
  activeBackgroundColor?: string;
  labelColor?: string;
  strokeColor?: string;
}
