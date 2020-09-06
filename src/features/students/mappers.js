/* eslint-disable prefer-const */
const mapOneStudentToStore = param => {
  // TODO need implement
  // firstName --> firstName
  // lastName --> secondName
  // birthdate --> birthday
  // email --> email
  // ip
  // uuid --> id
  const mappingPattern = {
    firstname: 'firstName',
    lastname: 'secondName',
    birthdate: 'birthday',
    email: 'email',
    gender: 'gender',
    ip: 'ip',
    uuid: 'id',
  };
  let mappedObj = {};
  for (let key in param) {
    if (Object.keys(mappingPattern).includes(key)) {
      mappedObj[mappingPattern[key]] = param[key];
    }
  }
  return mappedObj;
};

export function mapStudentsToStore(params) {
  return params.map(mapOneStudentToStore);
}
