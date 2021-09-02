import Link from 'next/link'
import Image from 'next/image'
import Busca from '../imagens/busca.png'

function MENU() {
    return (
        <>
        <div>
            <navbar>
            <Link href='/home'>Receitas rápidas</Link>
            <input 
            type="text"
            id="pesquisa" 
            name="pesquisa" 
            value="Pesquisar receita" />
            <Image src={Busca} width={22} height={22}/>
            </navbar>
            
        </div>
        <p>
           
                   </p>
        </>
    )
}

export default MENU