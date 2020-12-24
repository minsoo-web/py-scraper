import argparse

from naver_shop import naver_bs4
from save import save_to_csv

if __name__ == "__main__":

    parser = argparse.ArgumentParser(description='argparser!')
    parser.add_argument('--url', '-u', required=True, help='Target URL')
    parser.add_argument('--limit', '-l', required=False,
                        help='last page for scraping', default="end")
    args = parser.parse_args()

    NAVER_SHOP_URL = args.url

    naver_shop = naver_bs4(NAVER_SHOP_URL)

    if args.limit == "end":
        # limit을 인자로 주지 않으면 default로 모든 페이지
        last_page = naver_shop.get_last_page()
    else:
        # limit을 받았을 경우
        last_page = int(args.limit)

    reviews = naver_shop.get_reviews(last_page)

    save_to_csv(reviews)
