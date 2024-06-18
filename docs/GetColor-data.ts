import type { NavLink } from './components/type'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '',
    items: [
      {
        icon: '../../img/AutoSort-Settings-grey.webp',
        title: '插件说明/设置',
        desc: 'GetColor插件相关设置',
        link: './01-GetColor-setting',
      },
      {
        icon: '../../img/GetColor.webp',
        title: 'GetColor',
        desc: '根据截图生成材质/复制色号生成材质',
        link: './02-GetColor-use',
      },
    ],
  },
]
