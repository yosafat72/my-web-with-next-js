import { IconServer } from '@tabler/icons-react';
import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus
} from '@tabler/icons-react';

import { FaBeer, FaCartArrowDown, FaCashRegister, FaClipboardList } from 'react-icons/fa';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: 'Master',
  },
  {
    id: uniqueId(),
    title: 'Kategori',
    icon: IconServer,
    href: '/dashboard/kategori',
  },
  {
    id: uniqueId(),
    title: 'Barang',
    icon: IconServer,
    href: '/utilities/shadow',
  },
  {
    id: uniqueId(),
    title: 'Supplier',
    icon: IconServer,
    href: '/utilities/shadow',
  },
  {
    id: uniqueId(),
    title: 'Karyawan',
    icon: IconServer,
    href: '/utilities/shadow',
  },
  {
    id: uniqueId(),
    title: 'Customer',
    icon: IconServer,
    href: '/utilities/shadow',
  },
  {
    navlabel: true,
    subheader: 'Transaksi',
  },
  {
    id: uniqueId(),
    title: 'Pembelian',
    icon: FaCartArrowDown,
    href: '/sample-page',
  },
  {
    id: uniqueId(),
    title: 'Penjualan',
    icon: FaCashRegister,
    href: '/sample-page',
  },
  {
    navlabel: true,
    subheader: 'Report',
  },
  {
    id: uniqueId(),
    title: 'Pembelian',
    icon: FaClipboardList,
    href: '/sample-page',
  },
  {
    id: uniqueId(),
    title: 'Penjualan',
    icon: FaClipboardList,
    href: '/sample-page',
  },
  // {
  //   id: uniqueId(),
  //   title: 'Login',
  //   icon: IconLogin,
  //   href: '/authentication/login',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Register',
  //   icon: IconUserPlus,
  //   href: '/authentication/register',
  // },
  // {
  //   navlabel: true,
  //   subheader: 'Extra',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Icons',
  //   icon: IconMoodHappy,
  //   href: '/icons',
  // },
  
];

export default Menuitems;
