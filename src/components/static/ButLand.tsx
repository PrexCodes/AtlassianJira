
import styled from 'styled-components'
import { iButton } from '../../utils/interfaces'
import {Link} from 'react-router-dom'
// import SignUp from '../../pages/Register/SignUp'


const ButLand: React.FC<iButton> = ({ onClick, bg, color, title, icon }) => {
    return (
        <div>
            <Link to={'/sign-up'}>
            <Container color={`${color}`}
                onClick={onClick}
            >
                <Main bg={`${bg}`}>
                    <Div>{title}</Div>
                </Main>
            </Container>
            </Link>
        </div>
    )
}

export default ButLand

const Div = styled.div`
 
    
 font-size:15px;
    font-weight: 700;

`


const Main = styled.div<{ bg: string }>`
padding: 10px 20px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid rgb(44,83,204);;
border-radius: 5px;

transition: all 350ms;
background-color: ${({ bg }) => bg};
:hover{
    cursor: pointer;
    background-color: #f3f3f3;
    color: #228be6;
    
}
`;
const Container = styled.div < { color: string, }>`
display: flex;
text-decoration: none;
margin: 0px;
color: ${({ color }) => color};
`