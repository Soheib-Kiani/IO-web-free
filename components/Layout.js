import Header from '../pages/Header/Header'
import Footer from '../pages/Footer/Footer'
const Layout = ({children}) => {
    return (
        <div>
            <div className=' min h-screen flex flex-col'>
                <Header/>
                <main className='flex-grow' > {children}</main>
                


            </div>
        </div>
    );
}

export default Layout;