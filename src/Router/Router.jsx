import { Switch, Route } from "react-router-dom";
import { Home } from "../components/Screen/Home";
import ChatBot from "../components/Screen/ChatBot";
import { chatBotRoutes } from "./ChatbotRuter";
import Whiplash from "../components/Screen/Whiplash";

export const Router = () => {
  return (
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/ChatBot"
          render={() => (
            <Switch>
              {/* {chatBotRoutes.map((route) => (
                <Route key={route.path} exact={route.exact} path={route.path}>
                  {route.children}
                </Route>
              ))} */}
              <Route exact path="/ChatBot">
              <ChatBot />
              </Route>
              <Route exact path="/ChatBot/Whiplash">
                <Whiplash />
              </Route>
            </Switch>
          )}
      ></Route>
      </Switch>
  )
}
