import csv


def save_to_csv(reviews):
    print("Start Save...")
    file = open("naver_review.csv", "w", encoding="utf-8-sig")
    writer = csv.writer(file)
    writer.writerow(["평점", "판매 회사", "날짜", "제목", "내용"])
    for review in reviews:
        writer.writerow(list(review.values()))
    return True
