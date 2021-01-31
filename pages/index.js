import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'

//const BackgroundImage = styled.div`
//  background-image: url(${db.bg});
//  flex: 1;
//  background-size: cover;//ajustar
//  background-position: center;
//`;

export const QuizContainer = styled.div`
  width: 100%;//tamanho de 100%
  max-width:350px;//altura de 350px
  padding-top: 20px; //distancia da altura inicial (topo)
  margin: auto 10%;//distancia do lado esquerdo 
  @media screen and (max-width: 500px){//para diferentes tamanhos de tela
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage = {db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>
              Assassins Creed
            </h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              A melhor saga de história da ubisoft
            </p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>
              Quizes da galera
            </h1>

            <p>
              A melhor saga de história da ubisoft
            </p>
            </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Khrost" />
    </QuizBackground>
  );
}
