from bs4 import BeautifulSoup
from splinter import Browser
# Added in class working to fix problem with Cory:
from webdriver_manager.chrome import ChromeDriverManager

def init_browser():
    # @NOTE: Replace the path with your actual path to the chromedriver
    executable_path = {"executable_path": "C:/chromedriver.exe"}
    # Part II of fixing Cory's problem, they changed the above line to this:
    executable_path = {"executable_path": ChromeDriverManager().install()}
    print(executable_path)
    return Browser("chrome", **executable_path, headless=False)

# Part III 
init_browser()

def scrape():
    browser = init_browser()
    listings = {}

    url = "https://raleigh.craigslist.org/search/hhh?max_price=1500&availabilityMode=0"
    browser.visit(url)

    html = browser.html
    soup = BeautifulSoup(html, "html.parser")

    listings["headline"] = soup.find("a", class_="result-title").get_text()
    listings["price"] = soup.find("span", class_="result-price").get_text()
    listings["hood"] = soup.find("span", class_="result-hood").get_text()

    return listings
