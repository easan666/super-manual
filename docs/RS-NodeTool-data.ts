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
        link: './01-RNT-setting',
      },
      {
        icon: '../../img/RS-AutoPBR.webp',
        title: 'AutoPBR（自动PBR）',
        desc: '根据关键词自动连接PBR贴图',
        link: './02-RNT-AutoPBR',
      },
      {
        icon: '../../img/RS-QuickNode.webp',
        title: 'AutoNode（自动节点）',
        desc: '根据所选自动创建并连接节点',
        link: './03-RNT-AutoNode',
      },
      {
        icon: '../../img/RS-NodeMenu.webp',
        title: 'NodeMenu（节点菜单）',
        desc: '自定义常用节点和命令菜单',
        link: './03-RNT-NodeMenu',
      },
      {
        icon: '../../img/RS-AutoID.webp',
        title: 'AutoID（自动ID）',
        desc: '为所选对象自动设置Object ID / PuzzleMatte AOV',
        link: './04-RNT-AutoID',
      },
      {
        icon: '../../img/To PBR.webp',
        title: 'To PBR（PBR连接）',
        desc: '自动连接到指定PBR端口(自动混合多节点)',
        link: './05-RNT-To_PBR',
      },
      {
        icon: '../../img/TriPlanar Control.webp',
        title: 'Set TriPlanar（处理平铺）',
        desc: '为所选节点批量添加TriPlanar和控制节点',
        link: './06-RNT-TriPlanar',
      },
      {
        icon: '../../img/UV PSR.webp',
        title: 'UV PSR（添加PSR控制）',
        desc: '为所选节点批量添加贴图的UV控制节点',
        link: './07-RNT-UV_PSR',
      },
      {
        icon: '../../img/Set UDIM.webp',
        title: 'Set UDIM（设置UDIM）',
        desc: '自动设置RS贴图的UDIM',
        link: './08-RNT-Set_UDIM',
      },
      {
        icon: '../../img/Color Space.webp',
        title: 'Color Space（设置颜色空间）',
        desc: '自动设置RS贴图的颜色空间',
        link: './09-RNT-Color_Space',
      },
      {
        icon: '../../img/To Sprite.webp',
        title: 'To Sprite（转为Sprite）',
        desc: '自动将所选贴图节点转为Sprite节点',
        link: './10-RNT-To_Sprite',
      },
      {
        icon: '../../img/Optimize Select.webp',
        title: 'Optimize Node（优化节点）',
        desc: '隐藏所选节点预览和未使用端口',
        link: './11-RNT-Optimize_Node',
      },
      {
        icon: '../../img/Blur Node.webp',
        title: 'Blur Node（模糊节点）',
        desc: '为贴图节点设置模糊效果',
        link: './12-RNT-Blur_Node',
      },
    ],
  },
]
