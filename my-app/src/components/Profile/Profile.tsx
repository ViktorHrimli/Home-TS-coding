import { Component } from "react";
import { nanoid } from "nanoid";
import { ConteinerBox } from "../../commonStyle/Common.styled";
type ProfileProps = {
  data: {
    username: string;
    tag: string;
    location: string;
    avatar: string;
    stats: object;
  };
};

export class Profile extends Component<ProfileProps> {
  render() {
    const { username, tag, location, avatar, stats } = this.props.data;
    const entries = Object.entries(stats);

    return (
      <ConteinerBox>
        <div>
          <img src={avatar} width="100px" alt={username} />
          <p>{username}</p>
          <p>{tag}</p>
          <p>{location}</p>
        </div>
        <ul>
          {entries.map((items) => {
            return (
              <li key={nanoid()}>
                <span>{items[0]}</span>
                <span>{items[1]}</span>
              </li>
            );
          })}
        </ul>
      </ConteinerBox>
    );
  }
}
