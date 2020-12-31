import argparse
import sys

from naver_shop import naver_review  # csv
from naver_related import naver_related  # 연관 검색어
from naver_search import naver_search
from save import save_to_csv


if __name__ == "__main__":

    parser = argparse.ArgumentParser(description='naver shop crawler')
    parser.add_argument('target', help='review(csv)) / related(re) / keyword(key)')
    parser.add_argument('--url', '-u', required=False, help='Target URL')
    parser.add_argument('--limit', '-l', required=False,
                        help='last page for scraping', default="end")
    parser.add_argument('--item', '-i', required=False, help='Target item')
    args = parser.parse_args()

    # 쇼핑 리뷰 to csv
    if args.target in ['review', 'csv']:
        if args.url is None:
            print("error: the following arguments are required: --url/-u. make sure url")
            sys.exit(1)

        NAVER_SHOP_URL = args.url
        naver = naver_review(NAVER_SHOP_URL)

        if args.limit == "end":
            # limit을 인자로 주지 않으면 default로 모든 페이지
            last_page = naver.get_last_page()
        else:
            # limit을 받았을 경우
            last_page = int(args.limit)

        reviews = naver.get_reviews(last_page)

        save_to_csv(reviews)

    # 연관 검색어 및 전체 아이템 갯수
    elif args.target in ['related', 're']:
        if args.item is None:
            print("error: the following arguments are required: --item/-i. make sure item")
            sys.exit(1)
        naver = naver_related(args.item)
        number_of_items = naver.get_all_items()
        arr_of_related = naver.get_related_items()
        print(f"검색된 아이템 갯수: {number_of_items}")
        print(f"연관 검색어: {arr_of_related}")

    # 키워드 분석 -> 카테고리 순서, 섹션 순서
    elif args.target in ['keyword', 'key']:
        if args.item is None:
            print("error: the following arguments are required: --item/-i. make sure item")
            sys.exit(1)
        naver = naver_search(args.item)
        desktop_category_list = naver.get_search_category('desktop')
        mobile_category_list = naver.get_search_category('mobile')
        print("<카테고리 키워드 리스트>")
        print(f"Desktop: {desktop_category_list}")
        print(f"Mobile: {mobile_category_list}")

        desktop_section_list = naver.get_section_list('desktop')
        mobile_section_list = naver.get_section_list('mobile')
        print("<섹션 키워드 리스트>")
        print(f"Desktop: {desktop_section_list}")
        print(f"Mobile: {mobile_section_list}")

    # csv / related / keyword 가 아닌 경우 exit
    else:
        print("usage: app.py [csv / related / keyword]")
        sys.exit(1)
