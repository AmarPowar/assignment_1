// Architecture

/**
 * I have handle all the level of error 
 * use https package to read the data fom api . it will read data in stream format as chunk
 * I have aggregate that chunk and perform the operation 
 * by using streaming i am able to stream large data and perform operation 
 * impelemented require filter and aggregates .
 */

// Post Call (create porxy api to call the third party api 

/**
 * POST call = http://localhost:3000/emissions/statistics
 * request Body = {
    "productName": "methane",
    "filters": {
        "startDate": "2019-02-10",
        "endDate": "2019-02-25",
        "average": {
            "min": "1822.5450327217452",
            "max" :"1823.5450327217452"
        }
    },
    "aggregate": {"operation" :"mean"}
}
 * response = [
    {
        "time": {
            "interval_start": "2019-02-18T00:00:00Z",
            "max": "2019-02-18T22:30:53.102000Z",
            "min": "2019-02-18T00:30:01.367000Z"
        },
        "value": {
            "average": 1823.2542595828884,
            "count": 16882,
            "max": 1943.1363525390625,
            "min": 1621.4552001953125,
            "standard deviation": 43.42839175066056
        }
    },
    {
        "time": {
            "interval_start": "2019-02-11T00:00:00Z",
            "max": "2019-02-11T23:02:41.322000Z",
            "min": "2019-02-11T02:42:57.282000Z"
        },
        "value": {
            "average": 1823.2644576742555,
            "count": 14785,
            "max": 1946.32568359375,
            "min": 1590.52001953125,
            "standard deviation": 46.642698772669405
        }
    },
    {
        "meanOfAverage": 1823.259358628572
    }
]
 */