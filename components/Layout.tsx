
import Index from "./layout/index"

const Layout:React.FC<{ children: React.ReactNode }>=({children })=> {
  return (<div>
    <Index />
    {children}
  </div>)

}

export default Layout
