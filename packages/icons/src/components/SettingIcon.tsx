import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const SettingIcon: FC<Omit<IconProps, 'children' | 'css'>> = (props) => (
  <Icon width="16px" height="16px" viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M7.99992 10C9.10449 10 9.99992 9.10461 9.99992 8.00004C9.99992 6.89547 9.10449 6.00004 7.99992 6.00004C6.89535 6.00004 5.99992 6.89547 5.99992 8.00004C5.99992 9.10461 6.89535 10 7.99992 10Z"
      stroke="#344054"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.4848 9.81822C12.4041 10.001 12.38 10.2038 12.4157 10.4004C12.4513 10.597 12.545 10.7784 12.6848 10.9213L12.7211 10.9576C12.8338 11.0702 12.9232 11.2039 12.9842 11.351C13.0452 11.4982 13.0766 11.6559 13.0766 11.8152C13.0766 11.9745 13.0452 12.1322 12.9842 12.2794C12.9232 12.4265 12.8338 12.5602 12.7211 12.6728C12.6086 12.7855 12.4749 12.8749 12.3277 12.9359C12.1806 12.9969 12.0228 13.0283 11.8636 13.0283C11.7043 13.0283 11.5465 12.9969 11.3994 12.9359C11.2522 12.8749 11.1186 12.7855 11.006 12.6728L10.9696 12.6364C10.8268 12.4967 10.6454 12.403 10.4488 12.3673C10.2522 12.3317 10.0494 12.3557 9.86659 12.4364C9.68733 12.5132 9.53445 12.6408 9.42677 12.8034C9.31909 12.966 9.2613 13.1565 9.26052 13.3516V13.4546C9.26052 13.7761 9.13282 14.0844 8.9055 14.3117C8.67819 14.539 8.36988 14.6667 8.0484 14.6667C7.72693 14.6667 7.41862 14.539 7.1913 14.3117C6.96399 14.0844 6.83628 13.7761 6.83628 13.4546V13.4C6.83159 13.1994 6.76666 13.0049 6.64993 12.8417C6.53319 12.6785 6.37006 12.5542 6.18174 12.4849C5.99894 12.4042 5.79617 12.3801 5.59956 12.4158C5.40296 12.4514 5.22154 12.5452 5.07871 12.6849L5.04234 12.7213C4.92977 12.834 4.79609 12.9234 4.64894 12.9844C4.50179 13.0454 4.34406 13.0768 4.18477 13.0768C4.02548 13.0768 3.86775 13.0454 3.7206 12.9844C3.57345 12.9234 3.43976 12.834 3.32719 12.7213C3.21449 12.6087 3.12509 12.475 3.06409 12.3278C3.00309 12.1807 2.97169 12.023 2.97169 11.8637C2.97169 11.7044 3.00309 11.5467 3.06409 11.3995C3.12509 11.2524 3.21449 11.1187 3.32719 11.0061L3.36356 10.9697C3.50327 10.8269 3.597 10.6455 3.63265 10.4489C3.6683 10.2523 3.64423 10.0495 3.56355 9.86671C3.48673 9.68745 3.35916 9.53458 3.19656 9.42689C3.03396 9.31921 2.84343 9.26142 2.6484 9.26065H2.54537C2.2239 9.26065 1.91559 9.13294 1.68827 8.90562C1.46096 8.67831 1.33325 8.37 1.33325 8.04853C1.33325 7.72705 1.46096 7.41874 1.68827 7.19143C1.91559 6.96411 2.2239 6.8364 2.54537 6.8364H2.59992C2.80052 6.83171 2.99507 6.76678 3.15828 6.65005C3.32149 6.53332 3.44581 6.37018 3.51507 6.18186C3.59575 5.99906 3.61981 5.79629 3.58416 5.59968C3.54852 5.40308 3.45479 5.22166 3.31507 5.07883L3.27871 5.04247C3.16601 4.92989 3.0766 4.79621 3.0156 4.64906C2.9546 4.50191 2.92321 4.34418 2.92321 4.18489C2.92321 4.0256 2.9546 3.86787 3.0156 3.72072C3.0766 3.57357 3.16601 3.43989 3.27871 3.32731C3.39128 3.21461 3.52496 3.12521 3.67211 3.06421C3.81926 3.00321 3.97699 2.97181 4.13628 2.97181C4.29557 2.97181 4.4533 3.00321 4.60045 3.06421C4.7476 3.12521 4.88128 3.21461 4.99386 3.32731L5.03022 3.36368C5.17306 3.5034 5.35447 3.59712 5.55108 3.63277C5.74768 3.66842 5.95045 3.64435 6.13325 3.56368H6.18174C6.36099 3.48685 6.51387 3.35929 6.62155 3.19669C6.72923 3.03409 6.78702 2.84355 6.7878 2.64853V2.5455C6.7878 2.22402 6.9155 1.91571 7.14282 1.6884C7.37014 1.46108 7.67844 1.33337 7.99992 1.33337C8.32139 1.33337 8.6297 1.46108 8.85702 1.6884C9.08433 1.91571 9.21204 2.22402 9.21204 2.5455V2.60004C9.21282 2.79506 9.27061 2.9856 9.37829 3.1482C9.48597 3.3108 9.63885 3.43837 9.8181 3.51519C10.0009 3.59587 10.2037 3.61993 10.4003 3.58429C10.5969 3.54864 10.7783 3.45491 10.9211 3.31519L10.9575 3.27883C11.0701 3.16613 11.2038 3.07673 11.3509 3.01573C11.4981 2.95473 11.6558 2.92333 11.8151 2.92333C11.9744 2.92333 12.1321 2.95473 12.2792 3.01573C12.4264 3.07673 12.5601 3.16613 12.6726 3.27883C12.7853 3.3914 12.8748 3.52509 12.9357 3.67223C12.9967 3.81938 13.0281 3.97711 13.0281 4.1364C13.0281 4.2957 12.9967 4.45343 12.9357 4.60057C12.8748 4.74772 12.7853 4.88141 12.6726 4.99398L12.6363 5.03034C12.4966 5.17318 12.4028 5.3546 12.3672 5.5512C12.3315 5.7478 12.3556 5.95058 12.4363 6.13337V6.18186C12.5131 6.36111 12.6407 6.51399 12.8033 6.62167C12.9659 6.72936 13.1564 6.78714 13.3514 6.78792H13.4545C13.7759 6.78792 14.0842 6.91563 14.3116 7.14294C14.5389 7.37026 14.6666 7.67857 14.6666 8.00004C14.6666 8.32152 14.5389 8.62982 14.3116 8.85714C14.0842 9.08446 13.7759 9.21216 13.4545 9.21216H13.3999C13.2049 9.21294 13.0144 9.27073 12.8518 9.37841C12.6892 9.48609 12.5616 9.63897 12.4848 9.81822Z"
      stroke="#344054"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Icon>
);

export default SettingIcon;
