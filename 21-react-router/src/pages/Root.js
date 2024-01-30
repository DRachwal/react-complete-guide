import { Outlet } from 'react-router-dom'

import Header from '../components/Header/Header'

const Root = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
)

export default Root
