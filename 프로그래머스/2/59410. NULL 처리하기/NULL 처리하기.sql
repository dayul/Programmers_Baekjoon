-- IFNULL(컬럼명, 변경할 내용)
-- COALESCE(컬럼명, 변경할 내용)
SELECT ANIMAL_TYPE, COALESCE(NAME, 'No name') AS NAME, SEX_UPON_INTAKE FROM ANIMAL_INS;