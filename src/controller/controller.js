const {
  getEmissionsStatisticsByProductName,
} = require("../service/task_2b_implementation");

exports.getEmissionsStatisticsController = async function (req, res, next) {
  try {
    const { productName, filters, aggregate } = req.body;
    const standardProductName = [
      "methane",
      "carbonmonoxide",
      "ozone",
      "nitrogendioxide",
    ];
    // search by product Name
    if (standardProductName.find((el) => el === productName)) {
      const emissionResult = await getEmissionsStatisticsByProductName(
        productName,
        filters
      );
      // filter by `average` property with greater or less than a specified value
      let filteredByAverage;
      if (filters && filters.average) {
        if (filters.average.min && filters.average.max) {
          filteredByAverage = emissionResult.filter(
            (el) =>
              el.value.average > filters.average.min &&
              el.value.average < filters.average.max
          );
        } else if (filters.average.min) {
          filteredByAverage = emissionResult.filter(
            (el) => el.value.average > filters.average.min
          );
        } else if (filters.average.max) {
          filteredByAverage = emissionResult.filter(
            (el) => el.value.average < filters.average.max
          );
        }
      }
      let dataForOperation;
      if (filters && filters.average) {
        dataForOperation = filteredByAverage;
      } else {
        dataForOperation = emissionResult;
      }

      if (aggregate && aggregate.operation) {
        // aggregate average By sum
        if (aggregate.operation === "sum") {
          const sum = dataForOperation.reduce(
            (accumulator, currentItem) =>
              (accumulator = accumulator += currentItem.value.average),
            0
          );
          dataForOperation.push({ sumOfAverage: sum });
        }
        // aggregate average By Mean
        if (aggregate.operation === "mean") {
          const sum = dataForOperation.reduce(
            (accumulator, currentItem) =>
              (accumulator = accumulator += currentItem.value.average),
            0
          );

          const mean = sum / dataForOperation.length;
          dataForOperation.push({ meanOfAverage: mean });
        }
      }

      return res.status(200).json(dataForOperation);
    } else {
      return res
        .status(400)
        .json({ status: 400, message: "Input product Name not found" });
    }
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
