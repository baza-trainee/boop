'use client';

import { Provider } from 'react-redux';
import {rootStore } from '@/store';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // const storeRef = useRef<AppStore>();
  // if (!storeRef.current) {
  //   storeRef.current = makeStore();
  // }

  return <Provider store={rootStore}>{children}</Provider>;
}
