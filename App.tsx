import React from 'react';

import { NativeBaseProvider } from "native-base";
import { SignUp } from './src/screens/SiginUp';

export default function App() {
  return (
    <NativeBaseProvider>
      <SignUp />
    </NativeBaseProvider>
  );
}


