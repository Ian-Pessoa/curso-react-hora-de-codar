import './App.css'
import { useState } from 'react';
import City from './assets/city.jpg'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const name = 'Joaquim';
  const [userName] = useState("Maria");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 3400},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 240230}
  ]

  const pessoas = [
    {nome: "Ian", idade: 23, profissao: "Programador"},
    {nome: "Matheus", idade: 32, profissao: "Motorista"},
    {nome: "João", idade: 17, profissao: "Estudante"}
  ]

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <div>
        <h1>Avançando em React</h1>
      </div>

      {/* imagem em public */}
      <div>
        <img src="img1.jpg" alt="Paisagem" />
      </div>

      {/* imagem em asset */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={name} />
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={10000} color="Azul" newCar={false}/>
      {/* reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true}/>
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false}/>
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar}
        />
      ))}
      {/* fragment */}
      <Fragment propFragment="teste"/>
      {/* children */}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <p>Testando o container</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {pessoas.map((user) => (
        // eslint-disable-next-line react/jsx-key
        <UserDetails 
          nome={user.nome}
          idade={user.idade}
          profissao={user.profissao}
        />
      ))}
    </>
  )
}

export default App
