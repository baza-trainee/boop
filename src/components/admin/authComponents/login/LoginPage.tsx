'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';

export default function LoginPage() {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const userList = await axios.get('/api/users');
      if (userList.status === 200) {
        setIsAdmin(true);
      }
    };

    fetchUsers();
  }, []);

  // return <RegisterForm />;
  return <>{isAdmin ? <LoginForm /> : <RegisterForm />}</>;
}
