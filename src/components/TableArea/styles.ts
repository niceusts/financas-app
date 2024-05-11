import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Table = styled.table`
    width: 100%;
    background-color: #FFF;
    padding: 20px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    margin-top: 20px;
`;

export const TableHeadColumn = styled.th<{width?: number}>`
    color: #888;
    padding: 10px 0;
    text-align: left;
    width: ${props => props.width ? `${props.width}px` : 'auto'};
`;