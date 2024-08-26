// eslint-disable-next-line react/prop-types
const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <div>
      <ul>
        <h3>{nome}</h3>
        <ul>
          <li>{idade}</li>
          <li>{profissao}</li>
        </ul>
        {idade >= 18 && <p>Pode tirar carteira</p>}
      </ul>
    </div>
  )
}

export default UserDetails;