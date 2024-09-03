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
        icon: '../../img/LightHit.webp',
        title: 'LightHit',
        desc: '快速便捷地控制灯光位置，支持独显等灯光管理',
        link: './02-lighthit-use',
      },
      {
        icon: '../../img/AutoSort-Settings-grey.webp',
        title: '插件说明/设置',
        desc: 'LightHit相关设置',
        link: './03-lighthit-setting',
      },
    ],
  },
]
