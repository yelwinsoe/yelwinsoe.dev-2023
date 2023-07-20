import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'

import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ye Lwin Soe',
  description: 'Ye Lwin Soe - Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"/>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
