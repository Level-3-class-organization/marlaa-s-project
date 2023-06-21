import { getJournal } from "../journal/GetJournal";
import { getSleep } from "../sleep/GetSleep";
import { getWater } from "../water/GetWater";

export const Logs = async (id) => {
  try {
    const journalData = await getJournal(id).then((response) => {
      return response.data;
    });
    const sleepData = await getSleep(id).then((response) => {
      return response.data;
    });

    const waterData = await getWater(id).then((response) => {
      return response.data;
    });
    const allData = journalData.concat(sleepData, waterData);
    const filteredData = allData.reduce((result, item) => {
      const date = item.createdAt ? item.createdAt.split("T")[0] : "";
      const existingItem = result.find((entry) => entry.date === date);

      if (existingItem) {
        if (item.hoursSlept || item.minutesSlept) {
          existingItem.sleep = {
            hoursSlept: item.hoursSlept || "",
            minutesSlept: item.minutesSlept || "",
          };
        }

        if (item.cupsDrank || item.cupsTotal) {
          existingItem.water = {
            cupsDrank: item.cupsDrank || "",
            cupsTotal: item.cupsTotal || "",
          };
        }

        if (item.journal) {
          existingItem.journal = item.journal;
        }
      } else {
        const newData = {
          date,
          sleep: {
            hoursSlept: item.hoursSlept || "",
            minutesSlept: item.minutesSlept || "",
          },
          water: {
            cupsDrank: item.cupsDrank || "",
            cupsTotal: item.cupsTotal || "",
          },
          journal: item.journal || "",
        };

        result.push(newData);
      }

      return result;
    }, []);
    const orderedData = filteredData.sort((a, b) =>
      a.date.localeCompare(b.date)
    );
    return orderedData;
  } catch {
    (err) => {
      console.log(err);
    };
  }
};
