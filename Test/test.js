const dataObject = [{fullName : {surname : 'Avetisian', firstName : 'Yurii', middleName: 'zzz'}}, {fullName1 : {surname : 'Johnson', firstName : 'David',
middleName: 'ZZZ'}}] ///-  

const object = {fullName : {surname : true, firstName : true, middleName: false}} ///-  

const localObject = {'fullName.surname' : 'Avetisian', 'fullName.middleName' : 'Yurii'} ///- 
const values = {
name : 'Avetisian',
value1 : 'xxx',
value2 : 'XXX',
value3 : 'yyy',
value4 : 'YYY'
}


dataObject['Name'] = localObject['fullName.surname'],
dataObject['value1'] = values['value1'],
dataObject['value2'] = values['value2'],
dataObject['Name1'] = localObject['fullName.middleName'],
dataObject['value4'] = values['value3'],
dataObject['value5'] = values['value4'],
console.log(dataObject);