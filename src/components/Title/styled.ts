import styled from "styled-components";
import { TitleProps } from ".";


export const SpanContent = styled.span<TitleProps>`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 25px;
    height: 25px;
    background-image: ${props => props.image ? `url(${props.image})` : 'none'};
`

export const TitleContent = styled.h2`
    color: #339CFF;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    
`