import styled from "styled-components";

export const IsOnlineFriend = styled.span<{ isOnline: boolean }>`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    console.log(isOnline);
    if (isOnline) return "green";
    return "red";
  }};
`;
