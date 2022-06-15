import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Label,
  LabelList,
} from "recharts";

const renderCustomizedLabel = (props) => {
  const { content, ...rest } = props;

  return <Label {...rest} fontSize="12" fill="#000000" fontWeight="Bold" />;
};

export class DashboardView extends React.Component {
  render() {
    const data = [
      { name: "Urlaubstage", completed: 30, open: 70 },
      { name: "Kinotickets", completed: 50, open: 50 },
      {
        name: "Zoobesuch",
        completed: 43,
        open: 57,
      },
      {
        name: "Merchandise",
        completed: 11,
        open: 89,
      },
      {
        name: "kostenloses Mittagessen",
        completed: 5,
        open: 95,
      },
      {
        name: "KussVonFatih",
        completed: 69,
        open: 31,
      },
    ];

    return (
      <div className="content c-white">
        <h1>Belohnungsfortschritt</h1>
        <ResponsiveContainer height={250} width={"100%"}>
          <BarChart
            layout="vertical"
            data={data}
            margin={{ left: 50, right: 50 }}
            stackOffset="expand"
          >
            <XAxis hide type="number" />
            <YAxis
              type="category"
              dataKey="name"
              stroke="#000000"
              fontSize="12"
            />
            <Tooltip />
            <Bar dataKey="completed" fill="#82ba7f" stackId="a">
              <LabelList
                dataKey="completed"
                position="center"
                content={renderCustomizedLabel}
              />
            </Bar>
            <Bar dataKey="open" fill="#c4c4c4" stackId="a">
              <LabelList
                dataKey="open"
                position="center"
                content={renderCustomizedLabel}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
