import Head from 'next/head'
import React, {useEffect} from 'react';
import Login from '../components/UI/Login/Login';
import { useStateContext } from '../components/HBOProvider';
import router from 'next/router';

export default function Home() {
  const globalState = useStateContext();
  useEffect(() => {
    const loggedIn = false;
    if(!loggedIn) {
      // Sends users to create page
      router.push('/create');
    }
  }, [])
  return (
    <div>
      <Login />
    </div>
  )
}
