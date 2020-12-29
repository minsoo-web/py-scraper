import argparse
import requests
from bs4 import BeautifulSoup


def get_all_items():
    result = soup.select_one(
        '.subFilter_seller_filter__3yvWP > li:first-child .subFilter_num__2x0jq').text
    return int(result.replace(",", ""))


def get_related_items():
    result = []
    arr_of_soup = soup.select(
        '[data-nclick="N=a:rel.keyword"] > a')
    for _soup in arr_of_soup:
        result.append(_soup.text)
    return result


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='argparser!')
    parser.add_argument('--item', '-i', required=True, help='Target item')
    args = parser.parse_args()

    URL = f"https://search.shopping.naver.com/search/all?query={args.item}"

    page = requests.get(URL)
    soup = BeautifulSoup(page.text, 'html.parser')
    number_of_items = get_all_items()
    arr_of_related = get_related_items()
    print(arr_of_related)
    print(number_of_items)
