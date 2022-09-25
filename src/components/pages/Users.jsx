import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/5PVXkqt2s9k",
    name: `Tom${val}`,
    email: "test@aaaa.com",
    phone: "111-2222-3344",
    company: {
      name: "XXX YYY Co., Ltd."
    },
    website: "abcdefgaaa.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>Users List!</h2>
      <SearchInput />
      {users.map((user) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
