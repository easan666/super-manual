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
        icon: '../../img/AutoSort-Settings-grey.webp',
        title: '插件说明/设置',
        desc: 'AutoSort插件相关设置',
        link: './01-AutoSort-setting',
      },
      {
        icon: '../../img/AutoSort.webp',
        title: 'AutoSort（一键整理）',
        desc: '一键整理所选对象',
        link: './02-AutoSort-document',
      },
      {
        icon: '../../img/AutoGroup.webp',
        title: 'AutoGroup（一键打组）',
        desc: '一键为所选对象打组',
        link: './06-AutoGroup-document',
      },
      {
        icon: '../../img/NameSolo.webp',
        title: 'Name Solo（同名独显）',
        desc: '根据名称将所选独显（可用于灯光独显）',
        link: './07-AutoSort-namesolo',
      },
      {
        icon: '../../img/Group_Solo.webp',
        title: 'GroupSolo（同组独显）',
        desc: '在同一组中独显所选对象(灯光独显)',
        link: './03-AutoSort-groupsolo',
      },
      {
        icon: '../../auto_sort/SelectHide.webp',
        title: 'Hide Selected（隐藏所选）',
        desc: '隐藏/显示所选',
        link: './13-AutoSort-hide_selected',
      },
      {
        icon: '../../img/SelectSolo.webp',
        title: 'SelectSolo（所选独显）',
        desc: '独显所选对象，Magic Solo的优化版',
        link: './04-AutoSort-selectsolo',
      },
      {
        icon: '../../img/AxisToBottom.webp',
        title: 'Axis To Bottom（轴心置底）',
        desc: '可将所选对象的轴心置于底部中心',
        link: './05-AutoSort-axistobottom',
      },
      {
        icon: '../../auto_sort/Sort_By_Name.webp',
        title: 'Sort By Name（名称排序）',
        desc: '选择多个对象单击会根据名称排序/反序',
        link: './08-AutoSort-sort_by_name',
      },
      {
        icon: '../../auto_sort/Rename_Mat_By_Obj.webp',
        title: 'Rename Mat（对象材质命名）',
        desc: '根据所选对象名称重命名所使用的材质',
        link: './09-AutoSort-rename_mat_by_obj',
      },
      {
        icon: '../../auto_sort/Set_Icon_Random_Color.webp',
        title: 'Icon Random Color（图标随机色）',
        desc: '可将所选对象的图标设置随机颜色/取消颜色',
        link: './10-AutoSort-set_icon_random_color',
      },
      {
        icon: '../../auto_sort/Set_Obj_Random_Color.webp',
        title: 'Obj Random Color（对象随机色）',
        desc: '可将所选对象设置显示随机颜色/取消颜色',
        link: './11-AutoSort-set_obj_random_color',
      },
      {
        icon: '../../auto_sort/Pin_Select_Top.webp',
        title: 'Top Selected（置顶所选）',
        desc: '选择对象单击, 会将所选对象和对应的材质置顶',
        link: './12-AutoSort-top_selected',
      },
    ],
  },
]
