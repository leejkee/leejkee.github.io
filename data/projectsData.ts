interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'TrayMusicPlayer',
    description: `A light local music player with playlist management and lyric parser based on Qt Widgets`,
    imgSrc: '/static/images/tray-music-logo.svg',
    href: 'https://github.com/leejkee/TrayMusicPlayer',
  },
  {
    title: 'MusicPlayerDemo',
    description: '一个使用HTML和JS编写的简单网页音乐播放器示例',
    imgSrc: '/static/web-tools/MusicPlayerDemo/img/dog.jpg',
    href: 'static/web-tools/MusicPlayerDemo/index.html',
  },
]


export default projectsData
