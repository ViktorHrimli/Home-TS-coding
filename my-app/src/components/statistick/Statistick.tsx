import { ReactNode, Component } from "react";

interface ITransactions {
  data: { id: string; type: string; amount: string; currency: string }[];
}

export class Statisticks extends Component<ITransactions> {
  render(): ReactNode {
    const data = this.props.data;

    return (
      <table>
        <thead>
          <tr>
            <td>type</td>
            <td>amount</td>
            <td>currency</td>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
