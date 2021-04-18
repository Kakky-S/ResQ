import ChatBot from "../components/Screen/ChatBot";
import Whiplash from "../components/Screen/Whiplash"; // ムチウチ

export const chatBotRoutes = [
  {
    path: "/ChatBot",
    // exact: true,
    children: <ChatBot/>
  },
  {
    path: "/ChatBot/whiplash",
    // exact: true,
    children: <Whiplash/>
  }
]
