import re
import requests
import time

from math import ceil
from selenium import webdriver
from bs4 import BeautifulSoup

# from selenium.webdriver.common.by import By
# from selenium.webdriver.support import expected_conditions  # 상태 확인
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.common.action_chains import ActionChains


class naver_review:
    def __init__(self, url):
        options = webdriver.ChromeOptions()
        options.add_argument('--headless')
        options.add_argument('--no-gpu')
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')

        self.__driver = webdriver.Chrome("chromedriver", options=options)
        self.__url = url
        self.__reviews = []

    def get_last_page(self):
        result = requests.get(self.__url)
        soup = BeautifulSoup(result.text, 'html.parser')
        ul_pagination = soup.find("ul", {"class": "filter_top_list__3rOdK"})
        # (8,000) 이런식으로 추출 됨
        before_parse_str = ul_pagination.find(
            "li", {"class": "filter_on__X0_Fb"}).find("em").text
        # 정규 표현식을 통해 ()와 , 을 제거
        total_number_of_reviews = int(re.sub(r'\D', '', before_parse_str))

        total_page = ceil(total_number_of_reviews / 20)

        return total_page

    def get_reviews(self, num_of_total_page):
        driver = self.__driver
        driver.get(self.__url)
        driver.set_window_size(1920, 1080)

        print("Start Scraping")
        print(f"This will scrap {num_of_total_page} pages")
        for page in range(num_of_total_page):
            self.change_page(page+1)

            time.sleep(0.5)
            now_page_before_parse = driver.find_element_by_css_selector(
                '[class="reviewItems_list_review__1sgcJ"] + .pagination_pagination__2M9a4 [class="pagination_now__gZWGP"').text
            num_of_now_page = int(
                (now_page_before_parse.replace("현재 페이지", "")).strip())  # 1

            print(f"{num_of_now_page} 페이지")
            self.extract_review()

        self.__driver.quit()
        print("End Scraping")
        return self.__reviews

    def change_page(self, num_of_next_page):
        driver = self.__driver
        driver.find_element_by_css_selector(
            f"[class='reviewItems_list_review__1sgcJ'] + .pagination_pagination__2M9a4 > a[data-nclick='N=a:rev.page,r:{num_of_next_page}']"
        ).click()

    def extract_review(self):

        driver = self.__driver
        num_of_reviews = len(driver.find_elements_by_css_selector(
            '[class="reviewItems_list_review__1sgcJ"] > li'))

        # 현재 페이지의 리뷰만큼 반복
        for index in range(num_of_reviews):
            # # 리뷰 펼치는 링크
            # unfold_link = driver.find_element_by_css_selector(
            #     f".reviewItems_list_review__1sgcJ > li:nth-child({index + 1}) a")

            # # 링크까지 스크롤
            # actions = ActionChains(driver)
            # actions.move_to_element(unfold_link).perform()

            # # 리뷰 펼치기
            # unfold_link.click()

            # 평점
            rating_before_parse = driver.find_element_by_css_selector(
                f".reviewItems_list_review__1sgcJ > li:nth-child({index + 1}) .reviewItems_average__16Ya-").text
            rating = (rating_before_parse.replace("평점", "")).strip()

            # 구매처
            sales_company = driver.find_element_by_css_selector(
                f".reviewItems_list_review__1sgcJ > li:nth-child({index + 1}) .reviewItems_etc__1YqVF:nth-child(2)").text

            # 날짜
            date = ""
            before_date_list = driver.find_elements_by_css_selector(
                f".reviewItems_list_review__1sgcJ > li:nth-child({index + 1}) .reviewItems_etc__1YqVF")

            for date_list in before_date_list:
                # print(date_list.text)
                if "." in date_list.text:
                    date = date_list.text
                    break

            # 제목
            title = driver.find_element_by_css_selector(
                f".reviewItems_list_review__1sgcJ > li:nth-child({index + 1}) .reviewItems_review_text__2Bwpa > em").text

            content = (driver.find_element_by_css_selector(
                f".reviewItems_list_review__1sgcJ > li:nth-child({index + 1}) .reviewItems_review_text__2Bwpa > p").text).strip()

            self.__reviews.append({
                '평점': rating,
                '판매 회사': sales_company,
                '날짜': date,
                '제목': title,
                '내용': content
            })
