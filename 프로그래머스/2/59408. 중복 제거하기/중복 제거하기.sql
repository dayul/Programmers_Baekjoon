-- 코드를 입력하세요
-- DISTINCT  : 중복 제거 카운트
-- IS NOT NULL : NULL이 아니면 참을 반환

SELECT COUNT(DISTINCT NAME) FROM ANIMAL_INS WHERE NAME IS NOT NULL;