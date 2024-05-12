import styled from "styled-components";

export const Container = styled.div`
    flex: 1;

`;

export const Title = styled.div`
    font-weight: bold;
    text-align: center;
    margin-bottom: 5px;
    color: dimgray;`;

export const Info = styled.div<{color?: string}>`
font-weight: bold;
text-align: center;
color: ${props => props.color ?? 'black'};`;