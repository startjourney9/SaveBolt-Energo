import { Building } from "../models/building.model";

export const buildings: Building[] = [
  {
    Name: "Barley",
    Alerts: {
      high: {
        count: 3,
      },
      med: {
        count: 3,
        details: [
          {
            metric: "Water Temp",
            unit: "deg F",
            time: "12/06/2022 10:23am",
            threshold: 150,
            value: 156,
          },
          {
            metric: "Air Pressure",
            unit: "psi",
            time: "12/11/2022 12:21am",
            threshold: 12,
            value: 15,
          },
          {
            metric: "Fan Speed",
            unit: "rps",
            time: "12/05/2022 11:51am",
            threshold: 6,
            value: 4,
          },
        ],
      },
      low: {
        count: 0,
      },
    },
    Savings: "89%",
    Uptime: "104h",
    Power: "1165kW",
  },
  {
    Name: "Gaulberg",
    Alerts: {
      high: {
        count: 0,
      },
      med: {
        count: 1,
        details: [
          {
            metric: "Air Temp",
            unit: "deg F",
            time: "10/26/2022 11:23am",
            threshold: 99,
            value: 105,
          },
        ],
      },
      low: {
        count: 1,
        details: [
          {
            metric: "Exhaust Volume",
            unit: "cuft",
            time: "11/16/2022 01:33am",
            threshold: 55,
            value: 78,
          },
        ],
      },
    },
    Savings: "33%",
    Uptime: "15h",
    Power: "8300kW",
  },
  {
    Name: "Bridgeville",
    Alerts: {
      high: {
        count: 0,
      },
      med: {
        count: 0,
      },
      low: {
        count: 0,
      },
    },
    Savings: "52%",
    Uptime: "315h",
    Power: "2700kW",
  },
  {
    Name: "Biobot",
    Alerts: {
      high: {
        count: 0,
      },
      med: {
        count: 0,
      },
      low: {
        count: 0,
      },
    },
    Savings: "76%",
    Uptime: "423h",
    Power: "1530kW",
  },
];
