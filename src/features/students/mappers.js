export function mapOneStudentToStore = ()=> {
  // TODO need implement
}

export function mapStudentsToStore(params) {
    return params.map(mapOneStudentToStore)
}