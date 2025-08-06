'use client'
import { signIn, signOut } from "next-auth/react"

export function LoginButton() {
  return (
    <button 
      onClick={() => signIn('google')}
      style={{
        padding: '12px 24px',
        backgroundColor: '#4285f4',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px'
      }}
    >
      Sign in with Google
    </button>
  )
}

export function LogoutButton() {
  return (
    <button 
      onClick={() => signOut()}
      style={{
        padding: '12px 24px',
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px'
      }}
    >
      Sign out
    </button>
  )
}