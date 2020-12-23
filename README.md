<h1 align="center">
    Python web scraper
</h1>

<p align="center">
    <a href="https://img.shields.io">
        <img alt="python-version" src="https://img.shields.io/badge/python%20version-3.8.2-blue"></a>
    <a href="https://img.shields.io">
        <img alt="lovePython" src="https://img.shields.io/badge/love%20python%3F-yes%20%F0%9F%94%A5-red"></a>
    <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FMinsoo-web%2Fpy-scraper&count_bg=%233D6BC8&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=today&edge_flat=false"/></a>
</p>

## 🚀 What is this

`bs4`와 `selenium`을 이용해서 만든 웹스크레퍼입니다.  
[네이버 쇼핑몰](https://shopping.naver.com/)의 상세 페이지에서 리뷰들을 가져올 수 있습니다.

## 🍿 Setup

```bash
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
$ cd py-scraper
$ python app.py {url}

# 예제
$ python app.py "https://search.shopping.naver.com/catalog/15784793132?cat_id=50002334&nv_mid=15784793132&query=jbl+free+x"
```

![실행 화면](./images/run.png)

## 👀 result

naver_review.csv

```csv
평점,만족도,날짜,제목,내용
1,1,18.10.08,리뷰제목,리뷰내용
1,1,18.10.08,리뷰제목,리뷰내용
1,1,18.10.08,리뷰제목,리뷰내용
1,1,18.10.08,리뷰제목,리뷰내용
...
```

![실행 화면](./images/result.png)
