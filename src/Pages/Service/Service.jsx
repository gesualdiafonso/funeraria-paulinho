import Contact from './Components/Contact/Contact'
import ServiceInforme from './Components/ServiceInforme/ServiceInforme';
import PreverMas from './Components/PreverMas/PreverMas';
import PlanoFamiliar from './Components/PlanoFamiliar/PlanoFamiliar';
import Formulario from './Components/Formulario/Formulario';

function Service(){
    return(
        <main className='uk-container container'>
            <Contact />
            <ServiceInforme />
            <PreverMas />
            <PlanoFamiliar />
            <Formulario />
        </main>
    )
}
export default Service;