"""
## Snow in Austin
### Instructions
Use mrjob to determine the dates in which it snowed in Austin, Texas.
### Bonus
Calculate the maximum amount of snow per date.
**Hint:** Use the `max` function to reduce the values for a date to a single value.
"""
from mrjob.job import MRJob


class Hot_Days(MRJob):

    def mapper(self, key, line):

        (station, name, state, date, snow, tmax, tmin) = line.split(",")

        if snow and float(snow) > 0:
            yield date, 1

    def reducer(self, date, snow):
        yield date, max(snow)


if __name__ == "__main__":
    Hot_Days.run()
