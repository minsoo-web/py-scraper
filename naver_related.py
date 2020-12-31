import requests

from bs4 import BeautifulSoup


class naver_related:
    def __init__(self, item):
        URL = f"https://search.shopping.naver.com/search/all?query={item}"
        page = requests.get(URL)
        self.__soup = BeautifulSoup(page.text, 'html.parser')

    def get_all_items(self):
        result = self.__soup.select_one(
            '.subFilter_seller_filter__3yvWP > li:first-child .subFilter_num__2x0jq').text
        return int(result.replace(",", ""))

    def get_related_items(self):
        result = []
        arr_of_soup = self.__soup.select(
            '[data-nclick="N=a:rel.keyword"] > a')
        for _soup in arr_of_soup:
            result.append(_soup.text)
        return result
