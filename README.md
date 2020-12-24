<h1 align="center">
    Python Web Scraper
</h1>

<p align="center">
    <a href="https://img.shields.io">
        <img alt="python-version" src="https://img.shields.io/badge/python%20version-3.8.2-blue"></a>
    <a href="https://img.shields.io">
        <img alt="lovePython" src="https://img.shields.io/badge/love%20python%3F-yes%20%F0%9F%94%A5-red"></a>
    <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FMinsoo-web%2Fpy-scraper&count_bg=%233D6BC8&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=today&edge_flat=false"/></a>
</p>

<p align="center">
    <img alt="banner" src="https://d33wubrfki0l68.cloudfront.net/2d12446f148533a20e1d9271da57012ca4c27766/69e14/blog/selenium-python/header_selenium_python_hu858c713577cea0e612703bbde5071118_85692_825x0_resize_catmullrom_2.png" />
</p>

[이미지 출처](https://www.scrapingbee.com/blog/selenium-python/)

## 🚀 What is this

`bs4`와 `selenium`을 이용해서 만든 웹스크레퍼입니다.  
[네이버 쇼핑몰](https://shopping.naver.com/)의 상세 페이지에서 리뷰들을 가져올 수 있습니다.

## 🍿 Setup

```bash
# clone this project
$ cd py-scraper
$ pip install -r requirements.txt

# 설치 리스트
requests
Flask
beautifulsoup4
bs4
selenium
```

## 🔥 Run Program

```bash
# ~/your_work_space/py-scraper
$ python app.py -u {url} -l {limits of page}
```

### ✔️ 예제

```bash
# 예제 2 페이지만 스크랩
$ python app.py -u "https://search.shopping.naver.com/catalog/15784793132?cat_id=50002334&nv_mid=15784793132&query=jbl+free+x" -l 2
# 예제 모든 페이지 스크랩 default 가 모든 페이지입니다.
$ python app.py -u "https://search.shopping.naver.com/catalog/15784793132?cat_id=50002334&nv_mid=15784793132&query=jbl+free+x"
# 인자 값 도움말
$ python app.py --help
```

### 📷 실행 화면

![실행 화면](./images/run.png)

## 👀 result

> naver_review.csv

```csv
평점,만족도,날짜,제목,내용
1,1,18.10.08,리뷰제목,리뷰내용
1,1,18.10.08,리뷰제목,리뷰내용
1,1,18.10.08,리뷰제목,리뷰내용
1,1,18.10.08,리뷰제목,리뷰내용
...
```

### 📷 결과 미리보기

![결과 화면](./images/result.png)
