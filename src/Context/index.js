import { createContext, useEffect, useState } from 'react'
const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);
	const [body,setBody] = useState(null);
	useEffect(() => {
		if (typeof window !== "undefined") {
			setBody(window.document.body)
		}
	}, []);
	useEffect(()=>{
		if(body !== null){
			if(darkTheme){
				body.classList.add("dark__theme")
			}else{
				body.classList.remove("dark__theme")
			}
		}
	},[darkTheme]);
  const handeldarkTheme = (e)=>setDarkTheme(!darkTheme);
  return (
    <AuthContext.Provider value={{darkTheme,handeldarkTheme}}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext