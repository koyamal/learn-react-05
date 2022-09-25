import { Router } from "./router/Router";
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
  return <Router />;
}
