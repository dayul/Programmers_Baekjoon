-- 평균을 구하는 AVG() 함수
-- 반올림하는 ROUND(값, 자릿수) 함수 : 자릿수가 0이면 1의 자리까지 표시
-- 조건을 지정하는 WHERE 절
-- 컬럼명을 지정하는 AS

SELECT ROUND(AVG(DAILY_FEE), 0) AS AVERAGE_FEE FROM CAR_RENTAL_COMPANY_CAR WHERE CAR_TYPE = "SUV";