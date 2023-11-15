"use client"
import React from 'react'
import styles from "./loginPage.module.css"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation' //originally its next/router. But we are not using nextJs router anymore

const LoginPage = () => {

  const {data,status}= useSession()
  // console.log(data,status)
  const router= useRouter()

  if(status==="loading"){
    return <div className={styles.loading}>Loading...</div>
  }
  // when user logged in=> redirect him to homepage
  if(status==="authenticated"){
    router.push("/")
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={()=>signIn("google")}>Sign in with Google</div>
        <div className={styles.socialButton}>Sign in with GitHub</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  )
}

export default LoginPage
