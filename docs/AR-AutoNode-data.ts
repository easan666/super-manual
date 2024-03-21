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
        icon: '../../img/AR-Settings.webp',
        title: '插件说明/设置',
        desc: 'AutoNode插件相关设置和登录验证',
        link: './01-AAN-setting',
      },
      {
        icon: '../../img/AR-AutoPBR.webp',
        title: 'AutoPBR（自动PBR）',
        desc: '根据关键词自动连接PBR贴图',
        link: './02-AAN-AutoPBR',
      },
      {
        icon: '../../img/AR-NodeMenu.webp',
        title: 'NodeMenu（节点菜单）',
        desc: '自定义常用节点和命令菜单',
        link: './03-AAN-CustomMenu',
      },
      {
        icon: '../../img/AR-To-PBR.webp',
        title: 'To PBR（PBR连接）',
        desc: '自动连接到指定PBR端口(自动混合多节点)',
        link: './04-AAN-To_PBR',
      },
      {
        icon: '../../img/AR-AutoNode-command.webp',
        title: 'Set Triplanar（处理平铺）',
        desc: '为所选节点的贴图批量添加三平面和控制节点',
        link: './03-AAN-CustomMenu-set_tri',
      },
      {
        icon: '../../img/AR-AutoNode-command.webp',
        title: 'Set Coords（UV控制）',
        desc: '为所选节点的贴图批量添加坐标控制节点',
        link: './03-AAN-CustomMenu-set_coords',
      },
      {
        icon: '../../img/AR-AutoNode-command.webp',
        title: 'Set Transform（UV变换）',
        desc: '为所选节点的贴图批量添加transform和控制节点',
        link: './03-AAN-CustomMenu-set_trans',
      },
      {
        icon: '../../img/AR-AutoNode-command.webp',
        title: 'Set UDIM（设置UDIM）',
        desc: '自动设置贴图节点的UDM',
        link: './03-AAN-CustomMenu-set_udim',
      },
    ],
  },
]
