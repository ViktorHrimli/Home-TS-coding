import React from "react";
import { Profile } from "./components/Profile/Profile";
import user from "./user.json";

function App() {
  return <Profile data={user} />;
}

export default App;
