import React from "react"


const ContainerWrapper = ({children, type = 'others'} : {children: React.ReactNode, type?: string}) => {
  return (
    <main className={`min-h-screen ${type === 'others' ? 'bg-black' : 'bg-white/10'}`}>
      {children}
   </main>
  )
}
export default ContainerWrapper