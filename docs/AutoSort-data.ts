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
        desc: 'AutoSort插件相关设置',
        link: './01-AutoSort-setting',
      },
      {
        icon: '../../img/AutoSort.webp',
        title: 'AutoSort（一键整理）',
        desc: '一键整理所选对象',
        link: './02-AutoSort-document',
      },
      {
        icon: '../../img/Group_Solo.webp',
        title: 'GroupSolo（同组独显）',
        desc: '在同一组中独显所选对象',
        link: './03-AutoSort-groupsolo',
      },
    ],
  },
]
