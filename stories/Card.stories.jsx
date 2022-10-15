import React from "react";
import Card from "../components/Card/Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    data: {
      control: "object",
    },
    type: {
      options: ["sellable", "summary"],
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Fastest = Template.bind({});
Fastest.args = {
  fastest: true,
  data: {
    departure: {
      date: "2022-07-28T08:30:00-08:00",
      location: "Port Authoriy",
      city: "New York City",
    },
    arrival: {
      date: "2022-07-30T12:30:00-08:00",
      location: "Union Station",
      city: "Washington",
    },
  },
};

export const Summary = Template.bind({});
Summary.args = {
  type: "summary",
  data: {
    departure: {
      date: "2022-07-28T08:30:00-08:00",
      location: "Port Authoriy",
      city: "New York City",
    },
    arrival: {
      date: "2022-07-30T12:30:00-08:00",
      location: "Union Station",
      city: "Washington",
    },
  },
};
