import styled from 'styled-components';

export const Block = styled.li`
    height: 107px;
    width: 806px;
    margin-top: 8px;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;

export const FirstSquare = styled.div`
    background-color: #d2d3d5;
    width: 443px;
    height: 107px;
    float: left; 
`
export const MiddleShape = styled.div`
    background-color: #363435;
    width:40px;
    height:107px;
    position:absolute;
    margin-left: 425px;;
    transform:skewX(20deg)
`
export const SecondSquare = styled.div`
    background-color: #4b4b4d;
    width:323px;
    height:107px;
    float:left;
`

export const Text = styled.p`
    position: absolute;
    font-size: 25px;
    text-align: left;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 10px;
    padding-bottom: 15px;
    padding-left: 30px;
`;

export const Place = styled.p`
    background-color: #890e4f;
    width: 600px;
    height: 40px;
    margin-top:50px;
    padding-left: 30px;
    padding-top: 5px;
    text-align: left;
    color: white;
    font-size: 25px;
    position: absolute;
`;