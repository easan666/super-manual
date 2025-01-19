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
        icon: '../../img/link4d-Settings.webp',
        title: '网盘挂载',
        desc: '调用网盘挂载文件，在线使用资产文件',
        link: './01-gexe_browser-cloud',
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
      {
        icon: '../../img/fq.png',
        title: '常见问题',
        desc: 'CGexeBrowser常见问题',
        link: './04-gexe_browser_FQ',
      },
    ],
  },
]
