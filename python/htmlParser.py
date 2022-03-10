from html.parser import HTMLParser
from bs4 import BeautifulSoup


HTMLFileToBeOpened = open("/home/ubuntu/Documents/Github/IMPub/python/MCoG.html", "rb")
contents = HTMLFileToBeOpened.read()
beautifulSoupText = BeautifulSoup(contents, 'html.parser')


mydivs = beautifulSoupText.find_all("ol")
print(mydivs[0])