import styled from "styled-components";

export const UserCard = () => {
  return (
    <div>
      <img
        width={160}
        src="https://source.unsplash.com/5PVXkqt2s9k"
        alt="profile"
      />
      <p>Name</p>
      <SDl>
        <dt>E-mail</dt>
        <dd>test@aaaa.com</dd>
        <dt>Tell</dt>
        <dd>111-2222-3344</dd>
        <dt>Company</dt>
        <dd>XXX YYY Co., Ltd.</dd>
        <dt>WEB</dt>
        <dd>abcdefgaaa.com</dd>
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
