import request from '../../services/api/request';

export const fetchStudentsRequest = (page = 1, limit = 3, search = {}) => {
  const params = {page, limit, ...search};
  return request.get('student', {params});
};
