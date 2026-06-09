import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utilities/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [firstData, setfirst] = useState(null)

  useEffect(() => {
    const data = getLocalStorage() || {}

    const { employees, admin } = data

    setfirst({ employees, admin })
  }, [])

  return (
    <AuthContext.Provider value={firstData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider