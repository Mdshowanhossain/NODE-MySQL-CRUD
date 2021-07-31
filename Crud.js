const mysql = require('mysql');

const DatabaseConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crue'
}

const connection = mysql.createConnection(DatabaseConfig);

connection.connect((error) => {
    if (error) {
        console.log('Connection Failed');
    } else {
        console.log('Connection Successful');
        // insertData(connection);
        // deleteData(connection);
        // dataUpdate(connection);
        selectData(connection);
    }
})

const insertData = () => {

    let SQL_Query = "INSERT INTO `students`(`Name`, `Father Name`, `Mother Name`, `Phone`, `Roll`) VALUES ('HERO','ABDUL HAY','RASHIDA BEGUM','01998110072','03')"

    connection.query(SQL_Query, (error) => {

        if (error) {
            console.log('Data Inserted Failed');

        } else {
            console.log('Data Inserted Success');
        }
    })
}

const deleteData = (connection) => {

    let SQL_Query = "DELETE FROM `students` WHERE `id`= '03'";

    connection.query(SQL_Query, (error) => {

        if (error) {
            console.log('Data Delete Failed');

        } else {
            console.log('Data Delete Success');
        }
    })
}

const dataUpdate = (connection) => {

    let SQL_Query = "UPDATE `students` SET `Name`='RUMI',`Father Name`='ANISUR RAHMAN',`Mother Name`='CHINA BEGUM',`Roll`='44' WHERE `id`='1'";

    connection.query(SQL_Query, (error) => {

        if (error) {
            console.log(error);
            console.log('Data Updated Failed');

        } else {
            console.log('Data Updated Success');
        }
    })
}


const selectData = (connection) => {

    let SQL_Query = "SELECT * FROM `students` WHERE 1"

    connection.query(SQL_Query, (error, result) => {

        if (error) {
            console.log(error);
            console.log(error);

        } else {
            console.log(result);
        }
    })
}