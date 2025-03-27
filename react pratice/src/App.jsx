import React, { createContext } from "react";
// import "./index.css";
import { useId } from "react";
import { UserProvider } from "./components/PD&ContextApi/UseContextHook/UserContext";
import UserProfile from "./components/PD&ContextApi/UseContextHook/UserProfile";
import UpdateUser from "./components/PD&ContextApi/UseContextHook/UpdateUser";
import UseReducer from "./components/UseReducerHook/UseReducer";
import Counter from "./components/UseReducerHook/Counter";
import UserRef from "./components/UseRef/UserRef";
import FocusInput from "./components/UseRef/FocusInput";
import Timer from "./components/UseRef/Timer";
import CHooksEg from "./components/CustomHooks/CHooksEg";
import UniqueId from "./components/CustomHooks/UniqueId";


export const Data = createContext();
export const Data1 = createContext();

const App = () => {
  const name = "Rohan Don";
  const age = "22";
  const id = useId();
  return (
    <div>
      {/* <Greet /> */}
      {/* <Add /> */}
      {/* <Header />
      <MainContent />
      <Footer/> */}
      {/* <AboutJsx /> */}
      {/* <WelcomeMessage /> */}
      {/* <JsxRules /> */}
      {/* <DynamicExpressions /> */}
      {/* <Greeting /> */}
      {/* <ProductInfo /> */}
      {/* <List /> */}
      {/* <ListArrays /> */}
      {/* <UserList /> */}
      {/* <ProductList /> */}
      {/* <PropDrilling img="https://avatars.githubusercontent.com/u/196899910?s=400&u=250799eec0456fe6a4d3a8b0f7965d6baebc1c47&v=4" name="Rohan" age={22} location="Bardibas" /> */}
      {/* <Person name="Rohan Srjr" age={22} />
      <ProductProp name="Iphone" price={200000} /> */}
      {/* <PropCard>
        <h1>My Card</h1>
        <p>This is some content for card</p>
      </PropCard> */}
      {/* <IfRendering isValid={false} /> */}
      {/* <ItemsCart /> */}
      {/* <Weather temperature={-5} />

<UserStatus loggedIn={true} isAdmin={true} />

<GreetingTernery greet="afternoon" /> */}

      {/* <InLineCss />
      <DynamicCss />

      <SeparateFileForCss /> */}

      {/* <React_Icons /> */}
      {/* <StyledCard /> */}
      {/* <ProfileCard /> */}
      {/* <IconComponent /> */}

      {/* <Button /> */}
      {/* <CopyContent /> */}
      {/* <MoveComponent /> */}

      {/* <UseStateHooks /> */}
      {/* <UseStateExample /> */}
      {/* <UseStateExample2 /> */}
      {/* <UseState3 /> */}
      {/* <UseState4 /> */}
      {/* <Example /> */}
      {/* <ExampleTwo /> */}
      {/* <ExampleThree /> */}
      {/* <Counter /> */}
      {/* <TodoList /> */}
      {/* <Profile /> */}
      {/* <ShoppingList /> */}
      {/* <Portal1 /> */}
      {/* <Switcher /> */}
      {/* <UseEffect /> */}
      {/* <UseEffect2 /> */}
      {/* <BasicEffect /> */}
      {/* <CounterEffect /> */}
      {/* <FetchData /> */}
      {/* <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ContextApi />
          <ComponentA />
          <ContextHook />
    
        </Data1.Provider>
      </Data.Provider> */}
       {/* <UserContext /> */}
      {/* <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider> */}
      {/* <UseReducer /> */}
      {/* <Counter /> */}
      {/* <UserRef /> */}
      {/* <FocusInput /> */}
      {/* <Timer /> */}
      {/* <CHooksEg /> */}
      <UniqueId />
      <p id={`${id}-para`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, nemo! Minus, rem. Tempore temporibus ipsam necessitatibus veniam vero quos illo doloremque eos expedita.</p>
      <UniqueId />
    </div>
  );
};

export default App;
