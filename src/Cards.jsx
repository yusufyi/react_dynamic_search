import './card.css';

const Cards = (props) => {
  return (
    <div className="cards">
      {props.users.map((user) => (
        <div className="card" key={user.id}>
          <div>{user.name}</div>

          <div>{user.email}</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
