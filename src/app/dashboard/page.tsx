import { generateMetadata } from '@/utils/generateMetadata';
import ClaimsPage from './_components/ClaimsPage'; 

export const metadata = generateMetadata({
  title: 'Upe | Impact',
  description:
    'Impact tracking and recognition for Guanacaste, Costa Rica',
  images: 'upe_favicon.png',
  pathname: '',
});

export default function Page() {
  return <ClaimsPage />;
}