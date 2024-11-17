import dynamic from 'next/dynamic';

const DynamicMainPage = dynamic(() => import("@/components/main/main-page/MainPage"), {
  ssr: false,
});

export default function Home() {
  return <DynamicMainPage />;
}
