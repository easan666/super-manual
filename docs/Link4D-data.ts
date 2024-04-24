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
        icon: '../../img/link4d-Settings.webp',
        title: '插件设置/登录',
        desc: 'Link4D插件相关设置',
        link: './01-link4d-setting',
      },
      {
        icon: '../../img/link4d-send_to_c4d.webp',
        title: 'Send To C4D',
        desc: '右键批量发送PBR贴图到C4D生成材质',
        link: './02-0_link4d-send_to_c4d',
      },
      {
        icon: '../../img/link4d-call_c4d.webp',
        title: 'Call C4D',
        desc: '实时获取Windows资源管理器所选文件',
        link: './03-link4d-call_c4d',
      },
    ],
  },
]
