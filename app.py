import sys

from naver_shop import naver_bs4
from save import save_to_csv

NAVER_SHOP_URL = sys.argv[1]


naver_review = naver_bs4(NAVER_SHOP_URL)
last_page = naver_review.get_last_page()
reviews = naver_review.get_reviews(last_page)

save_to_csv(reviews)
