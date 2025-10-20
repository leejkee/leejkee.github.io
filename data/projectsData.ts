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
]


export default projectsData
