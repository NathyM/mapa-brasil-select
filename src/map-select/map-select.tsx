import { FC, useState } from "react";
import { IMapSelectProps, IDistrictInfo } from "./types";
import mapInfo from "../assets/brMap.json";
import * as S from "./styles";

const initialMap = mapInfo.map((district) => ({
  ...district,
  selected: false,
})) as Array<IDistrictInfo>;

export const MapSelect:FC<IMapSelectProps> = (props) => {
  const [districts, setDistricts] = useState(initialMap);

  async function handleClick(key: string) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const itemToUpdate = districts.find((district) => district.key === key)!;
    itemToUpdate.selected = !itemToUpdate.selected;
    props.onChange?.(districts.filter((district) => district.selected));
    setDistricts(districts);
  }

  return (
    <S.Map viewBox="0 0 449 461" height={props.height} width={props.width}>
      {districts.map((district) => (
        <S.District
          activeBackgroundColor={props.activeBackgroundColor}
          backgroundColor={props.backgroundColor}
          labelColor={props.labelColor}
          strokeColor={props.strokeColor}
          selected={district.selected}
          key={district.key}
          onClick={() => handleClick(district.key)}
          hint={district.title}
        >
          <path d={district.path} />
          {district.path_aux && <path d={district.path_aux} />}
          <text transform={district.transform}>{district.key}</text>
        </S.District>
      ))}
    </S.Map>
  );
}
