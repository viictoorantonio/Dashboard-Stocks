/* COMPONENTS */
import Sidebar from '../../components/Sidebar'
import Dashboard from '../../components/Dashboard'
import Profile from '../../components/Profile'

export function Home() {
    return (
        <main>
            <Sidebar />

            <Dashboard />

            <Profile />
        </main>
    )
}