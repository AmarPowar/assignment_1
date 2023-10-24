backend-nodejs-challenge
========================

Welcome to the AMPEERS Energy Backend challenge.
This challenge consists of 4 main tasks.

Time
----

You have 120+ minutes time to solve the tasks of the challenge.

Questions
---------

If you have questions during the challenge, please send us a short mail.


Submission
----------

Please send your results as ZIP file, as an email-attachment, or better yet as a
wetransfer link (or similar), to avoid issues with certain mail filters or size
limits.

Make sure to include some form of instructions of how to run your code.
We use Yarn for depdendency management internally, but a ReadMe and a
`package.json` are fine as well.

---

Tasks
-----

Our general setting can be described as:
* You have several blocks of emission related data (carbondioxyde, methane etc. as JSON)
  * For Task 2 - keep in mind that this data has to be gathered from a REST API which is slow >5secs.
* Your main objective is to design & try to implement a architecture so that the following things are considered:
  * can be queried (search, sorted, filtered, range, aggregates, ...)
    * Error handling
    * GraphQL or REST
    * Concrete APIS
      * filter:
        * should be able to filter the resultset by a given start- & end-date
        * should be able to filter the resultset by the `average` property with greater or less than a specified value
      * aggregate:
        * aggreate the `average` value from the filtered results by a mathematical basic function like `sum, mean, ...`
  * uses ressources efficiently when a huge load applied
  * data can be updated via an api
  * can be consumed as a stream, for example for 3rd party
* Implement as many parts of your architecture as you can in NodeJS.
* See example data in `./data`

> ℹ The data itself is not that important. Its more to be able to demonstrate your ideas.
> Its that small for simplification reasons.
> A real world use-case will contain a much higher volume of data!
> The data was grabbed from: https://api.v2.emissions-api.org/ui/
> It contains emission statistics for Germany.

### Task 1: Vanilla JavaScript (WarmUp)

  * Implement a function which takes a arbitary nested JS Object and do the following transformations:
    * add +1 to each Number: `x: 9 =&gt; x: 10`
    * add 'AE' to each String: `y: 'abc' =&gt; y: 'abc AE'`
    * the object should keep its structure!
    * See a rough example structure below:

    ```js
    // initial object
    {
      a: 123,
      b: 'abc',
      c: [1, 2, 3],
      d: {
        e: [4, 5, 6]
      }
    }

    // resulting object
    {
      a: 124,
      b: 'abc AE',
      c: [2, 3, 4],
      d: {
        e: [5, 6, 7]
      }
    }
    ```

### Task 2

* Consists of theoretical 2a and practical 2b.
* __Point your focus clearly on 2b!__


### Task 2a: Architecture

* Describe a rough architecture, which somehow adresses the requirements from above.
* You can use any technology you migh think makes sense.
* Describe why you choosen a particular technology.
* You could either write things down or scribble it - as you prefer.

This concludes task 1 and leads you to the next one.


### Task 2b: Implementation

* Implement your architecture, created in Task 1.
* In order to simplify the task we already provided the initial data in the `data` folder.


### Task 3: Evil-Question-NodeJS (JavaScript)

* What will be logged / happen with the following code lines.
* Whats the issue here? Short description is totally fine.

```js
const _promise = Promise.reject(new Error('BOOOM'));
_promise.then(() => console.log('.then'));
_promise.catch(console.log)
```

---

Final Notes
-----------

**A mature concept is better than some half-working code 😊**
**We do not count seconds - so take some minuts more if you´re in the flow!**

Have fun during the task - We wish you best of luck! 🚀

## HOW to RUN code .

* extact the zip file 
* npm install
* npm run start 

## Post API Call

* Post call -
http://localhost:3000/emissions/statistics

* request body -
```js 
{
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
```

```js 
[
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
```


