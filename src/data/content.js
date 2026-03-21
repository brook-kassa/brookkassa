import {
  FiCamera,
  FiFacebook,
  FiInstagram,
  FiMail,
  FiMessageCircle,
  FiPlayCircle,
  FiYoutube,
} from 'react-icons/fi'
import { SiTiktok, SiX } from 'react-icons/si'

export const socialLinks = [
  {
    label: 'YouTube',
    description: 'Video essays, creative drops, and future build logs',
    href: 'https://www.youtube.com/@BROOK-KASSA-9',
    icon: FiYoutube,
  },
  {
    label: 'Instagram',
    description: 'Photography, travel frames, and visual identity',
    href: 'https://www.instagram.com/brook_kassa/',
    icon: FiInstagram,
  },
  {
    label: 'TikTok',
    description: 'Short-form clips, edits, and process moments',
    href: 'https://www.tiktok.com/@brookkassa4',
    icon: SiTiktok,
  },
  {
    label: 'X',
    description: 'Thoughts on building, systems, and aesthetics',
    href: 'https://x.com/brookZkassa',
    icon: SiX,
  },
  {
    label: 'Facebook',
    description: 'Community presence and personal updates',
    href: 'https://www.facebook.com/profile.php?id=100071239117446',
    icon: FiFacebook,
  },
  {
    label: 'Email',
    description: 'Send me an email',
    href: 'mailto:brookassa4@gmail.com',
    icon: FiMail,
  },
]

export const photoCollection = [
  {
    title: 'Altitude Frames',
    category: 'Photography',
    image: '/media/shot-01.svg',
    accent: 'Travel atmosphere and quiet geometry',
  },
  {
    title: 'Night Signal',
    category: 'Photography',
    image: '/media/shot-02.svg',
    accent: 'Low-light texture with cinematic contrast',
  },
  {
    title: 'Motion Study',
    category: 'Photography',
    image: '/media/shot-03.svg',
    accent: 'Athletic energy and directional blur',
  },
  {
    title: 'Soft Concrete',
    category: 'Photography',
    image: '/media/shot-04.svg',
    accent: 'Architecture, symmetry, and matte depth',
  },
  {
    title: 'Blue Hour Journal',
    category: 'Photography',
    image: '/media/shot-05.svg',
    accent: 'Evening glow with premium stillness',
  },
  {
    title: 'Transit Mood',
    category: 'Photography',
    image: '/media/shot-06.svg',
    accent: 'Urban movement and layered reflections',
  },
]

export const videoHighlights = [
  {
    title: 'Creative Drops',
    description: 'A future home for polished YouTube edits, visual stories, and release moments.',
    image: '/media/video-01.svg',
    href: 'https://www.youtube.com/@BROOK-KASSA-9',
  },
  {
    title: 'Build Logs',
    description: 'Product experiments and the thinking behind what gets shipped.',
    image: '/media/video-02.svg',
    href: 'https://www.youtube.com/@BROOK-KASSA-9',
  },
  {
    title: 'Travel Motion',
    description: 'Cinematic clips, movement studies, and visual notes from the road.',
    image: '/media/video-03.svg',
    href: 'https://www.youtube.com/@BROOK-KASSA-9',
  },
]

export const identityPoints = [
  'Ethiopian creative technologist',
  'Creator building Supernova Systems',
  'Driven by fitness, travel, and clean aesthetics',
  'Focused on products that feel intentional and premium',
]

export const futureBlocks = [
  {
    title: 'Blog',
    badge: 'Soon',
    description: 'Long-form writing on creative process, travel notes, and systems thinking.',
    icon: FiCamera,
  },
  {
    title: 'Projects',
    badge: 'Roadmap',
    description: 'A dedicated shelf for Supernova, design systems, and product case studies.',
    icon: FiPlayCircle,
  },
  {
    title: 'Services',
    badge: 'Future',
    description: 'Consulting, creative direction, and digital product services ready for monetization later.',
    icon: FiMessageCircle,
  },
]