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
        desc: '在同一组中独显所选对象(灯光独显)',
        link: './03-AutoSort-groupsolo',
      },
      {
        icon: '../../img/SelectSolo.webp',
        title: 'SelectSolo（所选独显）',
        desc: '独显所选对象，Magic Solo的优化版',
        link: './04-AutoSort-selectsolo',
      },
      {
        icon: '../../img/AxisToBottom.webp',
        title: 'Axis To Bottom（轴心置底）',
        desc: '可将所选对象的轴心置于底部中心',
        link: './05-AutoSort-axistobottom',
      },
    ],
  },
]
