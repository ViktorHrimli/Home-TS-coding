import { ConteinerBox } from "./commonStyle/Common.styled";
import { Profile } from "./components/Profile/Profile";
import { InfoStatistick } from "./components/Info/Info";
import { Friends } from "./components/friends/Friends";
import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import trans from "./transactions.json";
import { Statisticks } from "./components/statistick/Statistick";

function App() {
  return (
    <ConteinerBox>
      <Profile data={user} />
      <InfoStatistick data={data} />
      <Friends data={friends} />
      <Statisticks data={trans} />
    </ConteinerBox>
  );
}

export default App;
