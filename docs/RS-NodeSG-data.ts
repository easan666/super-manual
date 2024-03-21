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
        icon: '../../img/RS-Settings.webp',
        title: '插件说明/设置',
        desc: 'NodeTool插件相关设置和登录验证',
        link: './01-RSG-setting',
      },
      {
        icon: '../../img/SG-AutoPBR.webp',
        title: 'AutoPBR（自动PBR）',
        desc: '根据关键词自动连接PBR贴图',
        link: './02-RSG-AutoPBR',
      },
      {
        icon: '../../img/SG-NodeMenu.webp',
        title: 'NodeMenu（节点菜单）',
        desc: '自定义常用节点和命令菜单',
        link: './03-RSG-NodeMenu-setting',
      },
      {
        icon: '../../img/RS-AutoID.webp',
        title: 'AutoID（自动ID）',
        desc: '为所选对象自动设置Object ID / PuzzleMatte AOV',
        link: './04-RSG-AutoID',
      },
      {
        icon: '../../img/SG-To PBR.webp',
        title: 'To PBR（PBR连接）',
        desc: '自动连接到指定PBR端口(自动混合多节点)',
        link: './05-RSG-To_PBR',
      },
      {
        icon: '../../img/SG-TriPlanar Control.webp',
        title: 'Set TriPlanar（处理平铺）',
        desc: '为所选节点批量添加TriPlanar和控制节点',
        link: './06-RSG-TriPlanar',
      },
      {
        icon: '../../img/SG-UV PSR.webp',
        title: 'UV PSR（添加PSR控制）',
        desc: '为所选节点批量添加贴图的UV控制节点',
        link: './07-RSG-UV_PSR',
      },
      {
        icon: '../../img/SG-Set UDIM.webp',
        title: 'Set UDIM（设置UDIM）',
        desc: '自动设置RS贴图的UDIM',
        link: './08-RSG-Set_UDIM',
      },
      {
        icon: '../../img/SG-Color Space.webp',
        title: 'Color Space（设置颜色空间）',
        desc: '自动设置RS贴图的颜色空间',
        link: './09-RSG-Color_Space',
      },
      {
        icon: '../../img/SG-To Sprite.webp',
        title: 'To Sprite（转为Sprite）',
        desc: '自动将所选贴图节点转为Sprite节点',
        link: './10-RSG-To_Sprite',
      },
      {
        icon: '../../img/SG-Arrange nodes.webp',
        title: 'Arrange nodes（排列节点）',
        desc: '节点垂直/水平/左/右/底/顶对齐',
        link: './03-VAN-CustomMenu-arrange_nodes',
      },
      {
        icon: '../../img/SG-Blur Node.webp',
        title: 'Blur Node（模糊节点）',
        desc: '为贴图节点设置模糊效果',
        link: './03-VAN-CustomMenu-blur-node',
      },
      {
        icon: '../../img/SG-TriPlanar Control.webp',
        title: 'Fix Tiling（处理平铺）',
        desc: '处理贴图重复和平铺',
        link: './03-VAN-CustomMenu-fix_tiling',
      },
    ],
  },
]
