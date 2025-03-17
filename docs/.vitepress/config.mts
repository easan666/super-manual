import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "可动程序文档",
  description: "Documentation for the CGexe Project",
  head: [['link', { rel: 'icon', href: '/img/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: 'https://cgexe.com/' },
      { text: 'Plugins', link: 'https://cgexe.com/plugins/' }
    ],
    logo: '/img/cgexe-logo.webp',
    siteTitle: '可动程序文档',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: 'deep',
    outlineTitle: '章节导航',
    lastUpdatedText: '上次更新时间',
    sidebar: {
      '/CGexeBrowser/': [
        {
          text: 'CGexeBrowser',
          collapsed: false,
          items: [
            { text: '简介/更新说明', link: '/CGexeBrowser/' },
            { text: 'CGexeBrowser', link: '/CGexeBrowser/01-gexe_browser-start' },
            { text: '网盘挂载', link: '/CGexeBrowser/01-gexe_browser-cloud' },
            { text: '重启初始化', link: '/CGexeBrowser/02-cgexe_browser-initialize' },
            { text: '插件设置', link: '/CGexeBrowser/03-cgexe_browser-setting' },
            { text: '常见问题', link: '/CGexeBrowser/04-gexe_browser_FQ' },
          ]
        },
        { text: '可动程序CGexe', link: '/' },
      ],
      '/RS-NodeTool/': [
        {
          text: 'RS-NodeTool',
          collapsed: false,
          items: [
            { text: '简介/更新说明', link: '/RS-NodeTool/' },
            { text: '登录说明', link: '/RS-NodeTool/00-RNT-license' },
            { text: '插件设置', link: '/RS-NodeTool/01-RNT-setting' },
            { text: '⭐导入节点资产', link: '/RS-NodeTool/13-RNT-import' },
            { text: 'AutoPBR（自动PBR）', link: '/RS-NodeTool/02-RNT-AutoPBR' },
            {
              text: 'NodeMenu（节点菜单）', collapsed: false, items: [
                { text: '说明', link: '/RS-NodeTool/03-RNT-NodeMenu' },
                { text: '自定义菜单', link: '/RS-NodeTool/03-RNT-NodeMenu_setting' },
                { text: '演示说明', link: '/RS-NodeTool/03-RNT-NodeMenu-demo' },
              ]
            },
            { text: 'AutoNode（自动节点）', link: '/RS-NodeTool/03-RNT-AutoNode' },
            { text: 'Solo channel（通道独显）', link: '/RS-NodeTool/05-RNT-Solo_channel' },
            { text: 'To PBR（PBR连接）', link: '/RS-NodeTool/05-RNT-To_PBR' },
            { text: 'Convert Path（绝对路径）', link: '/RS-NodeTool/05-RNT-ConvertPath' },
            { text: 'Object ID（对象ID）', link: '/RS-NodeTool/04-RNT-AutoID' },
            { text: 'Material ID（材质ID）', link: '/RS-NodeTool/04-RNT-MatID' },
            { text: 'Set TriPlanar（处理平铺）', link: '/RS-NodeTool/06-RNT-TriPlanar' },
            { text: 'UV PSR（添加PSR控制）', link: '/RS-NodeTool/07-RNT-UV_PSR' },
            { text: 'Set UDIM（设置UDIM）', link: '/RS-NodeTool/08-RNT-Set_UDIM' },
            { text: 'Color Space（设置颜色空间）', link: '/RS-NodeTool/09-RNT-Color_Space' },
            { text: 'To Sprite（转为Sprite）', link: '/RS-NodeTool/10-RNT-To_Sprite' },
            { text: 'Optimize Node（优化节点）', link: '/RS-NodeTool/11-RNT-Optimize_Node' },
            { text: 'Blur Node（模糊节点）', link: '/RS-NodeTool/12-RNT-Blur_Node' },
          ]
        },
        { text: 'RS-NodeSG', link: '/RS-NodeSG/' },
        { text: 'OC-MatTool', link: '/OC-MatTool/' },
        { text: 'AR-AutoNode', link: '/AR-AutoNode/' },
        { text: 'VR-AutoNode', link: '/VR-AutoNode/' },
      ],
      '/RS-NodeSG/': [
        {
          text: 'RS-NodeSG',
          collapsed: false,
          items: [
            { text: '简介/更新说明', link: '/RS-NodeSG/' },
            { text: '插件设置/登录验证', link: '/RS-NodeSG/01-RSG-setting' },
            { text: 'AutoPBR（自动PBR）', link: '/RS-NodeSG/02-RSG-AutoPBR' },
            {
              text: 'NodeMenu（节点菜单）', collapsed: false, items: [
                { text: '自定义菜单', link: '/RS-NodeSG/03-RSG-NodeMenu-setting' },
                { text: '演示说明', link: '/RS-NodeSG/03-RSG-NodeMenu-demo' },
                { text: '处理平铺', link: '/RS-NodeSG/03-VAN-CustomMenu-fix_tiling' },
                { text: '模糊节点', link: '/RS-NodeSG/03-VAN-CustomMenu-blur-node' },
                { text: '排列节点', link: '/RS-NodeSG/03-VAN-CustomMenu-arrange_nodes' },
              ]
            },
            { text: 'Object ID（对象ID）', link: '/RS-NodeSG/04-RSG-AutoID' },
            { text: 'Material ID（材质ID）', link: '/RS-NodeSG/04-RSG-MatID' },
            { text: 'To PBR（PBR连接）', link: '/RS-NodeSG/05-RSG-To_PBR' },
            { text: 'Set TriPlanar（处理平铺）', link: '/RS-NodeSG/06-RSG-TriPlanar' },
            { text: 'UV PSR（添加PSR控制）', link: '/RS-NodeSG/07-RSG-UV_PSR' },
            { text: 'Set UDIM（设置UDIM）', link: '/RS-NodeSG/08-RSG-Set_UDIM' },
            { text: 'Color Space（设置颜色空间）', link: '/RS-NodeSG/09-RSG-Color_Space' },
            { text: 'To Sprite（转为Sprite）', link: '/RS-NodeSG/10-RSG-To_Sprite' },
            { text: 'To Absolute Path（转为绝对路径）', link: '/RS-NodeSG/11-RSG-to_absolute_path' },
          ]
        },
        { text: 'RS-NodeTool', link: '/RS-NodeTool/' },
        { text: 'OC-MatTool', link: '/OC-MatTool/' },
        { text: 'AR-AutoNode', link: '/AR-AutoNode/' },
        { text: 'VR-AutoNode', link: '/VR-AutoNode/' },
      ],
      '/OC-MatTool/': [
        {
          text: '<span class="h5-icon"><img src="/img/OC-AutoPBR.webp" alt="Custom Icon"></span>OC-MatTool',
          collapsed: false,
          items: [
            { text: '🧾 简介/更新说明', link: '/OC-MatTool/' },
            { text: '登录说明', link: '/OC-MatTool/01-OMT-license' },
            { text: '插件设置', link: '/OC-MatTool/01-OMT-setting' },
            { text: 'AutoPBR（自动PBR）', link: '/OC-MatTool/02-OMT-AutoPBR' },
            { text: 'AutoID（自动ID）', link: '/OC-MatTool/03-OMT-AutoID' },
            { text: 'AutoMask（自动蒙版）', link: '/OC-MatTool/08-OMT-AutoMask' },
            { text: '添加调节节点', link: '/OC-MatTool/04-OMT-SetAdjust' },
            { text: '添加Chaos节点 (处理重复)', link: '/OC-MatTool/05-OMT-SetChaos' },
            { text: '添加UV Transform节点', link: '/OC-MatTool/06-OMT-SetUVTransform' },
            { text: '添加TriPlanar节点', link: '/OC-MatTool/07-OMT-SetTriPlanar' },
            { text: '灯光通道遮罩', link: '/OC-MatTool/09-OMT-LightPassMask' },
          ]
        },
        { text: 'RS-NodeTool', link: '/RS-NodeTool/' },
        { text: 'RS-NodeSG', link: '/RS-NodeSG/' },
        { text: 'AR-AutoNode', link: '/AR-AutoNode/' },
        { text: 'VR-AutoNode', link: '/VR-AutoNode/' },
      ],
      '/VR-AutoNode/': [
        {
          text: '<span class="h5-icon"><img src="/img/VR-AutoPBR.webp" alt="Custom Icon"></span>VR-AutoNode',
          collapsed: false,
          items: [
            { text: '简介/更新说明', link: '/VR-AutoNode/' },
            { text: '插件设置/登录验证', link: '/VR-AutoNode/01-VAN-setting' },
            { text: '导入节点资产', link: '/VR-AutoNode/01-VAN-import_assets' },
            { text: 'AutoPBR（自动PBR）', link: '/VR-AutoNode/02-VAN-AutoPBR' },
            {
              text: 'NodeMenu（节点菜单）', collapsed: false, items: [
                { text: '自定义菜单', link: '/VR-AutoNode/03-VAN-CustomMenu' },
                { text: '自动连接节点', link: '/VR-AutoNode/03-VAN-CustomMenu-insert_node' },
                { text: 'Ramp', link: '/VR-AutoNode/03-VAN-CustomMenu-set_ramp' },
                { text: 'Triplanar', link: '/VR-AutoNode/03-VAN-CustomMenu-set_tri' },
                { text: 'Randomizer', link: '/VR-AutoNode/03-VAN-CustomMenu-set_random' },
                { text: 'Transform', link: '/VR-AutoNode/03-VAN-CustomMenu-set_trans' },
                { text: 'UDIM', link: '/VR-AutoNode/03-VAN-CustomMenu-set_udim' },
                { text: 'Linear/ACES', link: '/VR-AutoNode/03-VAN-CustomMenu-set_color' },
              ]
            },
            { text: 'To PBR（PBR连接）', link: '/VR-AutoNode/04-VAN-To_PBR' },
            { text: 'QuickDisp（快速置换）', link: '/VR-AutoNode/05-VAN-QuickDisp' },
          ]
        },
        { text: 'RS-NodeTool', link: '/RS-NodeTool/' },
        { text: 'RS-NodeSG', link: '/RS-NodeSG/' },
        { text: 'OC-MatTool', link: '/OC-MatTool/' },
        { text: 'AR-AutoNode', link: '/AR-AutoNode/' },
      ],
      '/CR-MatTool/': [
        {
          text: '<span class="h5-icon"><img src="/img/CR-AutoPBR.webp" alt="Custom Icon"></span>CR-MatTool',
          collapsed: false,
          items: [
            { text: '简介/更新说明', link: '/CR-MatTool/' },
            { text: '插件设置/登录验证', link: '/CR-MatTool/01-CMT-setting' },
            { text: 'AutoPBR（自动PBR）', link: '/CR-MatTool/02-CMT-AutoPBR' },
            { text: '添加TriPlanar节点', link: '/CR-MatTool/03-CMT-SetTriPlanar' },
            { text: '添加调节节点', link: '/CR-MatTool/04-CMT-SetAdjust' },
            { text: '转换Bitmap', link: '/CR-MatTool/05-CMT-ToBitmap' },
          ]
        },
        { text: 'RS-NodeTool', link: '/RS-NodeTool/' },
        { text: 'RS-NodeSG', link: '/RS-NodeSG/' },
        { text: 'AR-AutoNode', link: '/AR-AutoNode/' },
        { text: 'OC-MatTool', link: '/OC-MatTool/' },
        { text: 'VR-AutoNode', link: '/VR-AutoNode/' },
      ],
      '/AR-AutoNode/': [
        {
          text: '<span class="h5-icon"><img src="/img/AR-AutoPBR.webp" alt="Custom Icon"></span>AR-AutoNode',
          collapsed: false,
          items: [
            { text: '简介/更新说明', link: '/AR-AutoNode/' },
            { text: '插件设置/登录验证', link: '/AR-AutoNode/01-AAN-setting' },
            { text: '导入节点资产', link: '/AR-AutoNode/01-AAN-import_assets' },
            { text: 'AutoPBR（自动PBR）', link: '/AR-AutoNode/02-AAN-AutoPBR' },
            {
              text: 'NodeMenu（节点菜单）', collapsed: false, items: [
                { text: '自定义菜单', link: '/AR-AutoNode/03-AAN-CustomMenu' },
                { text: '自动连接节点', link: '/AR-AutoNode/03-AAN-CustomMenu-insert_node' },
                { text: 'Triplanar', link: '/AR-AutoNode/03-AAN-CustomMenu-set_tri' },
                { text: 'UV coordinates', link: '/AR-AutoNode/03-AAN-CustomMenu-set_coords' },
                { text: 'Transform', link: '/AR-AutoNode/03-AAN-CustomMenu-set_trans' },
                { text: 'UDIM', link: '/AR-AutoNode/03-AAN-CustomMenu-set_udim' },
              ]
            },
            { text: 'To PBR（PBR连接）', link: '/AR-AutoNode/04-AAN-To_PBR' },
          ]
        },
        { text: 'RS-NodeTool', link: '/RS-NodeTool/' },
        { text: 'RS-NodeSG', link: '/RS-NodeSG/' },
        { text: 'OC-MatTool', link: '/OC-MatTool/' },
        { text: 'VR-AutoNode', link: '/VR-AutoNode/' },
      ],
      '/AutoSort/': [
        {
          text: 'AutoSort',
          collapsed: false,
          items: [
            { text: '简介/更新说明', link: '/AutoSort/' },
            { text: '插件设置', link: '/AutoSort/01-AutoSort-setting' },
            { text: 'AutoSort（一键整理）', link: '/AutoSort/02-AutoSort-document' },
            { text: 'AutoGroup（一键打组）', link: '/AutoSort/06-AutoGroup-document' },
            { text: 'Name Solo（同名独显）', link: '/AutoSort/07-AutoSort-namesolo' },
            { text: 'GroupSolo（同组独显）', link: '/AutoSort/03-AutoSort-groupsolo' },
            { text: 'Hide Selected（隐藏所选）', link: '/AutoSort/13-AutoSort-hide_selected' },
            { text: 'SelectSolo（所选独显）', link: '/AutoSort/04-AutoSort-selectsolo' },
            { text: 'Sort By Name（名称排序）', link: '/AutoSort/08-AutoSort-sort_by_name' },
            { text: 'Rename Mat By Obj（对象材质命名）', link: '/AutoSort/09-AutoSort-rename_mat_by_obj' },
            { text: 'Set Icon Random Color（图标随机色）', link: '/AutoSort/10-AutoSort-set_icon_random_color' },
            { text: 'Set Obj Random Color（对象随机色）', link: '/AutoSort/11-AutoSort-set_obj_random_color' },
            { text: 'Top Selected（置顶所选）', link: '/AutoSort/12-AutoSort-top_selected' },

          ]
        },
        { text: '可动程序CGexe', link: '/' },
      ],
      '/GetColor/': [
        {
          text: 'GetColor',
          collapsed: false,
          items: [
            { text: '简介/更新说明', link: '/GetColor/' },
            { text: '插件设置', link: '/GetColor/01-GetColor-setting' },
            { text: 'GetColor使用', link: '/GetColor/02-GetColor-use' },
          ]
        },
        { text: '可动程序CGexe', link: '/' },
      ],
      '/LightHit/': [
        {
          text: 'LightHit',
          collapsed: false,
          items: [
            { text: '简介/更新说明', link: '/LightHit/' },
            { text: '登录说明', link: '/LightHit/01-lighthit-license' },
            { text: '使用说明', link: '/LightHit/02-lighthit-use' },
            { text: '插件设置', link: '/LightHit/03-lighthit-setting' },
          ]
        },
        { text: '可动程序CGexe', link: '/' },
      ],
      '/KeyTool/': [
        {
          text: 'KeyTool',
          collapsed: false,
          items: [
            { text: '简介/更新说明', link: '/KeyTool/' },
            { text: '登录说明', link: '/KeyTool/01-kt-license' },
            { text: '关键帧偏移', link: '/KeyTool/02-kt-keyframe_offset' },
            { text: '拆分P/R', link: '/KeyTool/03-kt-split_p_r' },
            { text: '曲线生成', link: '/KeyTool/04-kt-generate_spline' },
            { text: '曲线对齐', link: '/KeyTool/05-kt-add_alignment_curve' },
            { text: '删除无用帧', link: '/KeyTool/06-kt-delete_unused_frames' },
            { text: '删除全部帧', link: '/KeyTool/07-kt-delete_all_frames' },
            { text: '添加时间', link: '/KeyTool/08-kt-time_track' },
            { text: '添加声音', link: '/KeyTool/09-kt-sound_track' },
          ]
        },
        { text: '可动程序CGexe', link: '/' },
      ],
      '/Link4D/': [
        {
          text: 'Link4D',
          collapsed: false,
          items: [
            { text: '简介/更新说明', link: '/Link4D/' },
            { text: '插件设置', link: '/Link4D/01-link4d-setting' },
            { text: 'Send To C4D', link: '/Link4D/02-0_link4d-send_to_c4d' },
            { text: 'Call C4D', link: '/Link4D/03-link4d-call_c4d' },
          ]
        },
        { text: '可动程序CGexe', link: '/' },
      ],
      '/guide/': [
        {
          text: 'guide',
          collapsed: false,
          items: [
            { text: 'Markdown Examples', link: '/guide/markdown-examples' },
            { text: 'Runtime API Examples', link: '/nav/index' },
            { text: 'about', link: '/guide/about-project' },
          ]
        }
      ]
    },
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      {
        icon: {
          svg: '<svg t="1700899801979" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4192" width="200" height="200"><path d="M977.2 208.2c33.4 36.2 48.8 79.4 46.6 131.4v404.8c-0.8 52.8-18.4 96.2-53 130.2-34.4 34-78.2 51.8-131 53.4H184.04c-52.9-1.6-96.42-19.6-130.56-54.4C19.364 838.8 1.534 793 0 736.4V339.6c1.534-52 19.364-95.2 53.48-131.4C87.62 175.5 131.14 157.54 184.04 156h58.76L192.1 104.38c-11.5-11.46-17.26-26-17.26-43.58 0-17.6 5.76-32.12 17.26-43.594C203.6 5.736 218.2 0 235.8 0s32.2 5.736 43.8 17.206L426.2 156h176l149-138.794C763.4 5.736 778.4 0 796 0c17.6 0 32.2 5.736 43.8 17.206 11.4 11.474 17.2 25.994 17.2 43.594 0 17.58-5.8 32.12-17.2 43.58L789.2 156h58.6c52.8 1.54 96 19.5 129.4 52.2z m-77.6 139.4c-0.8-19.2-7.4-34.8-21.4-47-10.4-12.2-28-18.8-45.4-19.6H192.1c-19.18 0.8-34.9 7.4-47.16 19.6-12.28 12.2-18.8 27.8-19.56 47v388.8c0 18.4 6.52 34 19.56 47s28.76 19.6 47.16 19.6H832.8c18.4 0 34-6.6 46.6-19.6 12.6-13 19.4-28.6 20.2-47V347.6z m-528.6 85.4c12.6 12.6 19.4 28.2 20.2 46.4V546c-0.8 18.4-7.4 33.8-19.6 46.4-12.4 12.6-28 19-47.2 19-19.2 0-35-6.4-47.2-19-12.2-12.6-18.8-28-19.6-46.4v-66.6c0.8-18.2 7.6-33.8 20.2-46.4 12.6-12.6 26.4-19.2 46.6-20 18.4 0.8 34 7.4 46.6 20z m383 0c12.6 12.6 19.4 28.2 20.2 46.4V546c-0.8 18.4-7.4 33.8-19.6 46.4-12.2 12.6-28 19-47.2 19-19.2 0-34.8-6.4-47.2-19-14-12.6-18.8-28-19.4-46.4v-66.6c0.6-18.2 7.4-33.8 20-46.4 12.6-12.6 28.2-19.2 46.6-20 18.4 0.8 34 7.4 46.6 20z" p-id="4193"></path></svg>'
        },
        link: 'https://space.bilibili.com/1435411362',
      }
    ],

    footer: {
      message: '',
      copyright: 'Copyright © 可动程序 CGexe',
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: { //zh是不生效的，改为root即可
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭搜索',
                }
              }
            }
          }
        }
      }
    },
  }
})
