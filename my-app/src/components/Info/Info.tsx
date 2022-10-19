import { Component } from "react";
type InfoStatsProps = {
  data: { id: string; label: string; percentage: number }[];
};

export class InfoStatistick extends Component<InfoStatsProps> {
  render() {
    const data = this.props.data;
    return (
      <section>
        <h2>Upload stats</h2>
        <ul>
          {data.map(({ id, label, percentage }) => {
            return (
              <li key={id}>
                <span>
                  {label}: <span>{percentage}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
