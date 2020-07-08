const Benchmark = require("benchmark");
const suite = new Benchmark.Suite;
const fs = require("fs");
const exec = require("child_process").execSync;

const BENCHMARK_RESULTS_FILE = "./benchmark.csv";
const CURRENT_COMMIT = exec("git rev-parse HEAD").toString().replace(/\r?\n/g, "");

suite
    .add("RegExp#test", () => {
        /o/u.test("Hello World!");
    })
    .on("cycle", (event) => {
        fs.appendFileSync(BENCHMARK_RESULTS_FILE,
            /**
             * I honestly don't know what statistics you should aggregate here,
             * but you can reference the API on: https://benchmarkjs.com/docs.
             */
            [
                CURRENT_COMMIT,
                (new Date()).toISOString(),
                event.target.name,
                event.target.stats.mean.toString(),
                event.target.stats.deviation.toString(),
                event.target.stats.mean.toString(),
            ].join(",")
            + "\r\n",
        );
    })
    .on("complete", function () {
        console.log(`Test results appended to ${BENCHMARK_RESULTS_FILE}.`);
    })
    .run({ "async": true });
