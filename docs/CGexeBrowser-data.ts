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
        icon: '../../cgexe_browser/CGexeBrowser.webp',
        title: 'CGexeBrowser',
        desc: '资产管理说明和使用',
        link: './01-gexe_browser-start',
      },
      {
        icon: '../../cgexe_browser/restart_browser.webp',
        title: '重启/初始化',
        desc: 'CGexeBrowser重启/初始化',
        link: './02-cgexe_browser-initialize',
      },
      {
        icon: '../../img/link4d-Settings.webp',
        title: '插件设置/登录',
        desc: 'CGexeBrowser插件相关设置',
        link: './03-cgexe_browser-setting',
      },
    ],
  },
]
