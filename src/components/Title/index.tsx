import avaliacao from  './assets/avaliacao.png'
import consulta from './assets/consulta.png'
import grafico from './assets/grafico.png'
import { Container, SpanContent, TitleContent } from './styled'

export interface TitleProps {
    image?:string,
    children?: React.ReactNode
}

interface ImageProps{
    avaliacao: string,
    grafico: string,
    consulta: string
}

export const Title = ({children, image}: TitleProps) =>{

    const listImages: ImageProps = {
        avaliacao: avaliacao,
        grafico: grafico,
        consulta: consulta

    }
    return(
        <Container>
            {image && <SpanContent image={listImages[image as keyof ImageProps]} />}
            <TitleContent>{children}</TitleContent>
        </Container>
    )
}