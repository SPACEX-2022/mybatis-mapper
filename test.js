const mybatisMapper = require('./index.js')


mybatisMapper.createOneMapper(`<mapper namespace="fruit">
    <select id="testParameters">
        SELECT
        name,
        category,
        price
        FROM
        fruits
        WHERE
        category = #{category}
        AND price > \${price}
    </select>
</mapper>`);

// SQL Parameters
var param = {
    category : 'apple',
    price : 100
}

// Get SQL Statement
var format = {language: 'sql', indent: '  '};
var query = mybatisMapper.getStatement('fruit', 'testParameters', param, format);

console.log(query)
