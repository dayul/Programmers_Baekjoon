-- LEFT(컬럼, 길이) : 왼쪽부터 길이만큼 가져오기

SELECT 
    LEFT(PRODUCT_CODE, 2) AS CATEGORY, 
    COUNT(PRODUCT_ID) AS PRODUCTS
FROM PRODUCT
GROUP BY LEFT(PRODUCT_CODE, 2);