import { FormEvent } from 'react'

import styles from './index.module.css'

const API_URL: string = import.meta.env.VITE_API_URL
const SIGN_IN_PATH: string = import.meta.env.VITE_SIGN_IN_PATH

export default function Landing (): JSX.Element {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const submit = async (): Promise<void> => {
      const body = new FormData(event.target as HTMLFormElement)
      const url: string = `${API_URL}${SIGN_IN_PATH}`
      const response = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        body
      })
      const data = await response.json()
      console.log({ data })
    }

    submit().catch((e) => {
      console.error({ e })
    })
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <input type="email" name='email' placeholder='Email'/>
        <input type="password" name='password' placeholder='Password'/>
        <button type='submit'>
          Enviar
        </button>
      </form>
    </div>
  )
}
