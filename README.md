# Installation
#### yarn install in json-server and frontend
#### So you can type yarn start in fontend and json-server after installed, yarn start at json-server before start at fontend.
  
  
## ข้อ 1 - Basic Javascript
### 1.1 ) เขียน function แสดงค่าทาง console โดย function รับ parameter 2 ตัว ได้แก่
```
const additionName = (firstName, lastName) => {
    if(firstName === "Shippop"){
        return `Best Online Shipping Platform`
    }
    return `Hello Shippop, My name is ${firstName} ${lastName}`
}

```
### 1.2 ) ถ้าหากต้องการ copy “array of object” ใน Nodejs มีวิธีการใดบ้าง ยกตัวอย่างมาอย่างน้อย 1 วิธี

```
const newArray = [...oldArray]
```



## ข้อ 2 - Database Design
```
Prevent redundant records
ปัญหาของข้อมูลซ้ำ ๆ ในตารางซึ่ง การแก้ก็จะแยกตารางที่ซ้ำกันออกมาแล้วสร้าง id ไปลิ้งกันจะเป็นรูปแบบลักษณะ Bridge Entity

Normalization
เกิด Relation ที่ Weak Entity ที่จำเป็นต้องมี Strong Entity อยู้ด้วยนั้นซึ่งมันจะเป็นปัญหาการสร้าง Table แล้วไม่ได้ใช้อาจจะต้องใช้ 2NF เข้ามาแก้
```