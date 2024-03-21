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
        icon: '../../img/VR-Settings.webp',
        title: '插件说明/设置',
        desc: 'AutoNode插件相关设置和登录验证',
        link: './01-VAN-setting',
      },
      {
        icon: '../../img/VR-AutoPBR.webp',
        title: 'AutoPBR（自动PBR）',
        desc: '根据关键词自动连接PBR贴图',
        link: './02-VAN-AutoPBR',
      },
      {
        icon: '../../img/VR-CustomMenu.webp',
        title: 'NodeMenu（节点菜单）',
        desc: '自定义常用节点和命令菜单',
        link: './03-VAN-CustomMenu',
      },
      {
        icon: '../../img/VR-To-PBR.webp',
        title: 'To PBR（PBR连接）',
        desc: '自动连接到指定PBR端口(自动混合多节点)',
        link: './04-VAN-To_PBR',
      },
      {
        icon: '../../img/VR-QuickDisp.webp',
        title: 'QuickDisp（快速置换）',
        desc: '为所选节点批量设置置换贴图/UDIM',
        link: './05-VAN-QuickDisp',
      },
    ],
  },
]
