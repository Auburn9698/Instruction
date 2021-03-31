"""
Find the number of hot days in Austin for 2017
"""
from mrjob.job import MRJob


class Hot_Days(MRJob):

    def mapper(self, key, line):
        """These column headers don't exist in the csv, they just have to make sense for you. """
        (station, name, state, date, snow, tmax, tmin) = line.split(",")
        """ If tmax exsits and is equal to or over 100: """
        if tmax and int(tmax) >= 100:
            yield name, 1

    def reducer(self, name, hot):
        yield name, sum(hot)


if __name__ == "__main__":
    Hot_Days.run()
