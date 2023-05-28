
import styled from 'styled-components'
import { Link } from "react-router-dom"
import Button from '../../components/static/Button'
import InputProps from '../../components/reUse/inputs/InputProps'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../global/GlobalProvider'

const ForgotPassword = () => {
    const [errorState, setErrorState] = useState<string>("")
    const {
        actualEmail,
      
        userState
    }: any = useContext(GlobalContext)
    return (
        <div>
            <Container>
                <Main>
                    <Title>Reset Password</Title>

                    <InputProps

                        email
                        email1="Email"
                        email2="Please Enter your Email"


                    />
                    <Text2 to="/sign-in" >Remember Password</Text2>
                    <ButtonHolder>
                        <Text2 to='/sign-up'>Don't have an account? Register</Text2>

                        <Space />
                        {
                            actualEmail === userState?.email ? <Link to="/change-password" style={{ textDecoration: "none" }} >
                                <Button
                                    title="Request Reset"
                                    bg="#228be6"
                                    color="white"

                                />
                            </Link> : <Button
                                title="Request Reset"
                                bg="#228be6"
                                color="white"
                                onClick={() => {
                                    setErrorState("Wrong Email")
                                }}

                            />
                        }
                     
                        

                    </ButtonHolder>
                    {
                         actualEmail === userState?.email ? null : <div style={{ fontSize: "12px", color: "red", display: "flex", justifyContent: "center" }}>{errorState}</div>
                    }
                </Main>
            </Container>
        </div>
    )
}

export default ForgotPassword

const Space = styled.div`
flex: 1
`


const Title = styled.div`
font-weight: bold;
font-size: 24px;
margin: 20px 0;
`

const Line = styled.div`
border-bottom: 1px solid silver;
width: 28%;

`

const Text2 = styled(Link)`
font-size: 12px;
margin-bottom: 16px ;
color: black;
text-decoration: none;
`

const Text = styled.div`
font-size: 12px;
margin: 0 5px;
`

const Display = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const ButtonHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Main = styled.div`
padding: 20px 30px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius:5px;
background-color: white;

`

const Container = styled.div`
display:flex;
align-items: center;
justify-content: end;
height: 100vh;
width: 95%;

`