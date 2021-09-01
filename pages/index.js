import Image from 'next/image'
import Link from 'next/link'
import Foto from '../imagens/foto1.png'

function INDEX(){

    return (
        <>
        <div>
            <p>Seja ben-vindo</p>
            <p>Receitas rápidas</p>
            <br />
            <p>Site com receitas rápidas e divertidas</p>
            <p>Mata a fome e deixa você triste.</p>
            <br />
            <br />
            <Link href="home"><button>CLIQUE PARA COZINHAR</button></Link>

        </div>

        <div>
            <Image src={Foto}></Image>
        </div>
        
        </>
    )
}

export default INDEX