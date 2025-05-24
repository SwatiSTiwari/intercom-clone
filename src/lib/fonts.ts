import { Inter, Roboto_Mono } from 'next/font/google';
import localFont from 'next/font/local';

// Local fonts matching Intercom's custom fonts
export const mediumLL = localFont({
  src: [
    {
      path: '../../public/fonts/MediumLLWeb-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MediumLLWeb-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MediumLLWeb-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
});

// Brand display font
export const abcMaxiRound = localFont({
  src: '../../public/fonts/ABCMaxiRound-Regular.woff2',
  variable: '--font-display',
  display: 'swap',
});

// For code and monospaced text
export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

// Fallback font
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const fonts = {
  sans: mediumLL.variable,
  display: abcMaxiRound.variable,
  mono: robotoMono.variable,
  inter: inter.variable,
};
