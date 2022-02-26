from html.parser import HTMLParser
from bs4 import BeautifulSoup


class MyHTMLParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        print("Encountered a start tag:", tag)

    def handle_endtag(self, tag):
        print("Encountered an end tag :", tag)

    def handle_data(self, data):
        print("Encountered some data  :", data)



HTMLFileToBeOpened = open("main5.html", "rb")
contents = HTMLFileToBeOpened.read()
beautifulSoupText = BeautifulSoup(contents, 'html.parser')

parser = MyHTMLParser()
# parser.feed(str(beautifulSoupText))
mydivs = beautifulSoupText.find_all("span", {"class":"ecbx-1095"})
print(mydivs)