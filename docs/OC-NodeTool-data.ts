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
        link: './01-OMT-setting',
      },
      {
        icon: '../../img/OC-AutoPBR.webp',
        title: 'AutoPBR（自动PBR）',
        desc: '根据关键词自动连接PBR贴图',
        link: './02-OMT-AutoPBR',
      },
      {
        icon: '../../img/RS-AutoID.webp',
        title: 'AutoID（自动ID）',
        desc: '为所选对象自动设置Layer ID / Custom AOV',
        link: './03-OMT-AutoID',
      },
      {
        icon: '../../img/OC-AddAdjust.webp',
        title: 'Set Adjust（添加调节节点）',
        desc: '为已连接的纹理节点添加调节节点',
        link: './04-OMT-SetAdjust',
      },
      {
        icon: '../../img/OC-AddChaos.webp',
        title: 'Set Chaos（添加Chaos节点）',
        desc: '为已连接的纹理节点添加Chaos节点',
        link: './05-OMT-SetChaos',
      },
      {
        icon: '../../img/OC-AddUVTransform.webp',
        title: 'Set UV Transform（添加UV变换）',
        desc: '为已连接的纹理节点添加UV变换节点',
        link: './06-OMT-SetUVTransform',
      },
      {
        icon: '../../img/OC-AddTriplanar.webp',
        title: 'Set TriPlanar（添加Triplanar）',
        desc: '为未连接的纹理节点批量添加Triplanar',
        link: './07-OMT-SetTriPlanar',
      },
    ],
  },
]
