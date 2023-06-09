import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ffmpeg-static',
  description: 'ffmpeg-static is a repository that provides static binaries of FFmpeg for various platforms. FFmpeg is a popular multimedia framework that enables users to decode, encode, transcode, and stream audio and video files. This repository aims to make it easy for developers to integrate FFmpeg into their projects without the need for compiling from source or dealing with complex dependencies.',
  base: '/ffmpeg-static/',
  themeConfig: {
    outline: [2, 3],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/HiWay-Media/ffmpeg-static' },
    ],
    sidebar: [
      { text: 'Introduction', link: '/' },
      { text: 'Getting started', link: '/getting-started' },
    ],
  },
})