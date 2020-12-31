import requests

from bs4 import BeautifulSoup


class naver_search:
    def __init__(self, item):
        BASE_URL = f"search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query={item}"

        self.__DESKTOP_URL = f"https://{BASE_URL}"
        self.__MOBILE_URL = f"https://m.{BASE_URL}"

    def __return_soup(self, soup_type):
        """soup 반환하는 메서드

        Args:
            url (str): 검색될 페이지 url

        Returns:
            bs4.BeautifulSoup
        """

        if soup_type == 'desktop':
            page = requests.get(self.__DESKTOP_URL)
        else:
            page = requests.get(self.__MOBILE_URL)

        soup = BeautifulSoup(page.text, 'html.parser')
        return soup

    def __remove_useless_element(self, find_soup):
        """soup 내에서 불필요한 요소들을 삭제하는 메서드

        Args:
            find_soup (bs4.BeautifulSoup): 제거가 필요한 부모 soup
        """
        div = find_soup.find('div')
        i = find_soup.find('i')
        a = find_soup.find('a')

        if div is not None:
            div.decompose()
        if i is not None:
            i.decompose()
        if a is not None:
            a.decompose()

    def get_search_category(self, soup_type):
        """검색이 되면 네이버 검색 페이지의 탭 순서를 list 로 반환

        Args:
            url (str): 검색될 페이지 url
            soup_type (str): mobile인지 desktop인지

        Returns:
            list: 검색 페이지의 탭을 순서대로 담은 list
        """

        soup = self.__return_soup(soup_type)
        result = []

        desktop_selector = '#lnb [role="tablist"] > li'  # 웹 뷰 선택자
        mobile_selector = 'header [role="tablist"] > li span'  # 모바일 뷰 선택자

        if soup_type == 'desktop':
            selector = desktop_selector
        else:
            selector = mobile_selector

        _result = soup.select(selector)

        # 텍스트만 뽑는 작업
        for tabitem in _result:
            if soup_type != 'desktop':
                self.__remove_useless_element(tabitem)  # 모바일의 경우 tablist에도 i 가 있음
            result.append(tabitem.text)

        return result

    def get_section_list(self, soup_type):
        """네이버 검색 페이지에서 섹션별 순서를 담아 list로 반환

        Args:
            url (str): 검색될 페이지 url
            soup_type (str): mobile인지 desktop인지

        Returns:
            list: 섹션 타이틀을 순서대로 담은 list
        """

        soup = self.__return_soup(soup_type)
        result = []
        # desktop_selector = '#main_pack > section .api_title'
        # 광고, 파워링크, 화면에 나오지 않는 추천 트렌드 섹션은 제외
        mobile_selector = '#container section:not(.nx_pla):not(.sp_power) .api_subject_bx:not(._au_recommend_trend) h2'

        if soup_type == 'desktop':
            # selector = desktop_selector
            _result = soup.findAll('h2', {'class': 'api_title'})
        else:
            selector = mobile_selector
            _result = soup.select(selector)

        for section_item in _result:
            title = ""
            # h2 태그 안의 불필요한 요소들을 모두 삭제
            self.__remove_useless_element(section_item)

            title = section_item.text
            # 네이버 쇼핑 라이브의 경우 strong 태그 안의 내용이 타이틀이다
            strong = section_item.find('strong')
            if strong is not None:
                title = strong.text

            result.append(title.strip())

        return result
