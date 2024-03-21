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
        desc: 'MatTool插件相关设置和登录验证',
        link: './01-CMT-setting',
      },
      {
        icon: '../../img/CR-AutoPBR.webp',
        title: 'AutoPBR（自动PBR）',
        desc: '根据关键词自动连接PBR贴图',
        link: './02-CMT-AutoPBR',
      },
      {
        icon: '../../img/CR-AddTriplanar.webp',
        title: 'Set TriPlanar（添加Triplanar）',
        desc: '为已连接的纹理节点批量添加Triplanar',
        link: './03-CMT-SetTriPlanar',
      },
      {
        icon: '../../img/CR-AddAdjust.webp',
        title: 'Set Adjust（添加调节节点）',
        desc: '为已连接的纹理节点添加调节节点',
        link: './04-CMT-SetAdjust',
      },
      {
        icon: '../../img/CR-ChangeBitmap.webp',
        title: 'To Bitmap（转换Bitmap）',
        desc: '将C4D Bitmap 转为Corona Bitmap',
        link: './05-CMT-ToBitmap',
      },
    ],
  },
]
