import {Link, Outlet} from "react-router-dom"

export const App = () => {
    return (
        <div className="container">
            <header className="row px-3 py-4 mx-auto border-primary border-bottom">
                <h1 className="col">Electron, React & TypeScript</h1>
            </header>
            <section className="row pt-4">
                 <nav className="col">
                     <ul className="nav flex-column mr-auto">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/form' className="nav-link">some Form</Link>
                        </li>
                    </ul>
                </nav>
               <article id="content" className="col">
                    <Outlet />
                </article>
            </section>
           </div>
        )
}
