import { GlobalStyles, TextContainer } from "../../GlobalStyle";

const Projects = () =>(
    <>
        <GlobalStyles/>
        <TextContainer>
            <h3 style={{textAlign: "center"}}>Наші проєкти:</h3>
            <p>Серед наших проєктів є також телеґрам-бот, який виконує ту ж саму функцію, що й цей сайт. Скористатись ним можна за цим посиланням 👇 </p>
            <br/>
            <div style={{textAlign: "center"}}><a href="https://t.me/PhonkCheckBot"> Свідомий фонк бот</a></div>
        </TextContainer>
    </>
)

export default Projects;