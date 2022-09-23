import styled from "styled-components";
import { Card } from "../../atoms/card/Card";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <img width={180} src={user.image} alt={user.name} />
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
    </Card>
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
