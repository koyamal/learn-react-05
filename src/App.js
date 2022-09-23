import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  image: "https://source.unsplash.com/5PVXkqt2s9k",
  name: "Tom",
  email: "test@aaaa.com",
  phone: "111-2222-3344",
  company: {
    name: "XXX YYY Co., Ltd."
  },
  website: "abcdefgaaa.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>Test</PrimaryButton>
      <SecondaryButton>Go!</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
