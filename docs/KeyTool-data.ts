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
        icon: '../../img/keytool-a.webp',
        title: '关键帧偏移 Keyframe Offset',
        desc: '支持递增偏移，递减偏移，镜像偏移，随机偏移，递增循环，递减循环',
        link: './02-kt-keyframe_offset',
      },
      {
        icon: '../../img/split_pr.webp',
        title: '拆分P/R',
        desc: '拆分所选对象的位置和旋转轨道，并且添加为父级',
        link: './03-kt-split_p_r',
      },
      {
        icon: '../../img/delete_unused_frames.webp',
        title: '删除无用帧 Delete Unused Frames',
        desc: '删除所选对象及其标签未使用的关键帧或者数值相同的关键帧',
        link: './06-kt-delete_unused_frames',
      },
      {
        icon: '../../img/delete_all_frames.webp',
        title: '删除全部帧 Delete All Frames',
        desc: '删除所选对象及其标签所有的关键帧',
        link: './07-kt-delete_all_frames',
      },
      {
        icon: '../../img/generate_curve.webp',
        title: '曲线生成 Generate Spline',
        desc: '根据所选对象的位置生成对应的位置曲线',
        link: './04-kt-generate_spline',
      },
      {
        icon: '../../img/add_alignment_curve.webp',
        title: '曲线对齐 Align Spline',
        desc: '自动为所选对象添加对齐曲线目标标签，并设置位置动画',
        link: './05-kt-add_alignment_curve',
      },
      {
        icon: '../../img/time_track.webp',
        title: '添加时间 Add Time',
        desc: '为所选对象添加时间轨迹，可用于控制动画的时间映射',
        link: './08-kt-time_track',
      },
      {
        icon: '../../img/sound_track.webp',
        title: '添加声音 Add Sound',
        desc: '添加所选的音频文件，并且创建声音轨道',
        link: './09-kt-sound_track',
      },
    ],
  },
]
