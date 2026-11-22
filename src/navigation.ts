import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Beranda',
      href: getPermalink('/'),
    },
    {
      text: 'Tentang Kami',
      links: [
        {
          text: 'Profil & Sejarah',
          href: getPermalink('/tentang#profil'),
        },
        {
          text: 'Visi & Misi',
          href: getPermalink('/tentang#visi-misi'),
        },
      ],
    },
    {
      text: 'Program',
      href: getPermalink('/program'),
    },
    {
      text: 'Galeri & Berita',
      links: [
        {
          text: 'Galeri Kegiatan',
          href: getPermalink('/galeri'),
        },
        {
          text: 'Berita & Artikel',
          href: getBlogPermalink(),
        },
      ],
    },
    {
      text: 'Kontak',
      href: getPermalink('/kontak'),
    },
  ],
  actions: [{ text: 'Donasi Sekarang', href: getPermalink('/donasi'), variant: 'primary' as const }],
};

export const footerData = {
  links: [
    {
      title: 'Tentang Kami',
      links: [
        { text: 'Profil Yayasan', href: getPermalink('/tentang#profil') },
        { text: 'Visi & Misi', href: getPermalink('/tentang#visi-misi') },
      ],
    },
    {
      title: 'Program & Kegiatan',
      links: [
        { text: 'Program Pembinaan', href: getPermalink('/program') },
        { text: 'Galeri Kegiatan', href: getPermalink('/galeri') },
        { text: 'Berita & Artikel', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Donasi & Transparansi',
      links: [
        { text: 'Cara Donasi', href: getPermalink('/donasi') },
        { text: 'Kebutuhan Mendesak', href: getPermalink('/donasi#kebutuhan') },
        { text: 'Rekening Resmi', href: getPermalink('/donasi#rekening') },
        { text: 'Laporan Transparansi', href: getPermalink('/donasi#transparansi') },
      ],
    },
    {
      title: 'Kontak',
      links: [
        { text: 'Hubungi Kami', href: getPermalink('/kontak') },
        { text: 'Alamat & Peta', href: getPermalink('/kontak#lokasi') },
        { text: 'FAQ', href: getPermalink('/kontak#faq') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Syarat & Ketentuan', href: getPermalink('/terms') },
    { text: 'Kebijakan Privasi', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: '#' },
  ],
  footNote: `
    © [Tahun] [Nama Yayasan / Panti Asuhan]. Seluruh hak cipta dilindungi.
  `,
};
