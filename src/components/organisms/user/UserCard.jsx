import styled from "styled-components";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <div>
      <img width={160} src={user.image} alt={user.name} />
      <p>{user.name}</p>
      <SDl>
        <dt>E-mail</dt>
        <dd>{user.email}</dd>
        <dt>Tell</dt>
        <dd>{user.phone}</dd>
        <dt>Company</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </div>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 55px;
    padding-bottom: 8px;
  }
`;
