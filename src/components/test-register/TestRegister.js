import Header from "../header/Header";
import styled from "styled-components";
import PageContainer from "../page-container/PageContainer";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SubjectsPage(){

    const [professorId, setProfessor] = useState("");
    const [subjectId, setSubject] = useState("");
    const [category, setCategory] = useState("");
    const [link, setLink] = useState("");
    const [name, setName] = useState("");
    const [disabled, setDisabled] = useState(false);

    let history = useHistory();

    function sendTestData(event){
        event.preventDefault();
        setDisabled(true);

        const body = {professorId, subjectId, category, link, name};

        const request = axios.post("https://API/register-test",body);
        
        request.then((answer) => {
            history.push("/test-register");
            });
        
        request.catch((error) => {
            console.log(error);
            history.push("/test-register");
        });
    }

    return(
        <div>
            <Header />

            <PageContainer>
                <ContentBox onSubmit={sendTestData}>
                    <div>
                        <h1>Compartilhe uma prova</h1>
                    </div>

                    <input
                        type="number"
                        required
                        placeholder="Professor"
                        disabled={disabled}
                        value={professorId}
                        onChange={(e) => setProfessor(e.target.value)}
                    />

                    <input
                        type="number"
                        required
                        placeholder="Assunto"
                        disabled={disabled}
                        value={subjectId}
                        onChange={(e) => setSubject(e.target.value)}
                    />

                    <input
                        type="text"
                        required
                        placeholder="Categoria"
                        disabled={disabled}
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />

                    <input
                        type="text"
                        required
                        placeholder="Link"
                        disabled={disabled}
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />

                    <input
                        type="text"
                        required
                        placeholder="Nome"
                        disabled={disabled}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <SelectAction register onclick={() => history.push("/")}>Registrar</SelectAction>

                    <Link to={"/"}>
                        <SelectAction>Voltar</SelectAction>
                    </Link>

                </ContentBox>
            </PageContainer>           
        </div>

    );
}

const ContentBox = styled.form`
    width: 50%;
    padding:20px;
    height: auto;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    opacity: 0.8;
    border-radius: 8px;
    div{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    h1{
        color: #fff;
        font-size: 27px;
        margin-bottom: 15px;
        font-family: "Passion One";
        font-weight: 400;
    }
    input{
        width: 100%;
        background: #fff;
        margin-top: 10px;
        font-size: 18px;
        border-radius: 5px;
        border: none;
        line-height: 40px;
        height: 40px;
        color: #9F9F9F; 
        padding-left: 13px; 
    }
`

const SelectAction = styled.button` 
    font-weight: 700;
    font-size: 18px;
    margin: 0 auto;
    margin-top: 15px;
    width: 100%;
    line-height: 100%;
    text-align: center;
    color: #FFF;
    background: #0F0F14;
    border-radius: 8px;
    border: 0.2px solid #FA4098;
    box-sizing: border-box;
    padding: 18px 60px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
    :hover{
        background: #FA4098;
        color: #000;
        font-weight: 700;
    }
`;