import argparse
import requests


from bs4 import BeautifulSoup


def get_search_category(soup, soup_type):
    result = []
    desktop_selector = '#lnb [role="tablist"] > li'
    mobile_selector = 'header [role="tablist"] > li'

    if soup_type == 'desktop':
        selector = desktop_selector
    else:
        selector = mobile_selector

    _result = soup.select(selector)

    for tabitem in _result:
        result.append(tabitem.text)
    return result


def get_section_list(soup, soup_type):
    result = []
    desktop_selector = '#main_pack > section .api_title'
    # 광고, 파워링크, 화면에 나오지 않는 추천 트렌드 섹션은 제외
    mobile_selector = '#container section:not(.nx_pla):not(.sp_power) .api_subject_bx:not(._au_recommend_trend) h2'

    if soup_type == 'desktop':
        selector = desktop_selector
    else:
        selector = mobile_selector

    _result = soup.select(selector)

    for tabitem in _result:
        result.append(tabitem.text)
    return result


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='argparser!')
    parser.add_argument('--item', '-i', required=True, help='Target item')
    args = parser.parse_args()

    BASE_URL = f"search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query={args.item}"

    DESKTOP_URL = f"https://{BASE_URL}"
    MOBILE_URL = f"https://m.{BASE_URL}"

    desktop_page = requests.get(DESKTOP_URL)
    mobile_page = requests.get(MOBILE_URL)

    de_soup = BeautifulSoup(desktop_page.text, 'html.parser')
    m_soup = BeautifulSoup(mobile_page.text, 'html.parser')

    de_arr_tablist = get_search_category(de_soup, 'desktop')
    m_arr_tablist = get_search_category(m_soup, 'mobile')

    de_arr_sectionlist = get_section_list(de_soup, 'desktop')
    m_arr_sectionlist = get_section_list(m_soup, 'mobile')

    print(de_arr_tablist)
    print(m_arr_tablist)

    # 텍스트 노드만 긁어오게 변경해야 함
    print(de_arr_sectionlist)
    print(m_arr_sectionlist)
