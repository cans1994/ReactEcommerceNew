import '../components/headerr.css'
import Flowers from '../assets/flowers.png'

function HeaderPerso() {
    return (
        <div className="HeaderPerso">
            <header className='HeaderPersoANous'>
            <h1>Bienvenue chez Flowers et Co</h1>
            <img src={Flowers} className="Header-Logo" alt="logo joli" />
            </header>
        </div>
    )
}

export default HeaderPerso