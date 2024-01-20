import React from 'react'
import AuthForm from '../../../components/auth/auth-form'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="row">
          <h1 className="header">Supabase Auth + Storage</h1>
          <p>
            Experience our Auth and Storage through a simple profile management
            example. Create a user profile and upload an avatar image. Fast,
            simple, secure.
          </p>
        </div>
        <div className="auth-widget">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}

export default page