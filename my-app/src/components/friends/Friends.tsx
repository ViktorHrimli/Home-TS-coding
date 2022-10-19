import { Component, ReactNode } from "react";
import { ConteinerBox } from "../../commonStyle/Common.styled";
import { IsOnlineFriend } from "./Friends.syled";

type IFriends = {
  data: {
    avatar: string;
    name: string;
    isOnline: boolean;
    id: number;
  }[];
};

export class Friends extends Component<IFriends> {
  render(): ReactNode {
    const data = this.props.data;
    return (
      <ConteinerBox>
        <ul>
          {data.map(({ avatar, name, isOnline, id }) => {
            return (
              <li key={id}>
                <IsOnlineFriend isOnline={isOnline}></IsOnlineFriend>
                <img src={avatar} alt="User avatar" width="48" />
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
      </ConteinerBox>
    );
  }
}
