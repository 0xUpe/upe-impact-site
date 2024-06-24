import { generateMetadata } from '@/utils/generateMetadata';
import HomePage from './home/HomePage';

export const metadata = generateMetadata({
  title: 'Upe | Impact',
  description:
    'Impact tracking and recognition for Guanacaste, Costa Rica',
  images: 'upe_favicon.png',
  pathname: '',
});

export default function Page() {
  return <HomePage />;
}
