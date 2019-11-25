const appkey = "1002113844_1553930505347";

/**
 * 获取所有学生数据
 */
export async function getAllStudents() {
  return await fetch(`api/student/findAll?appkey=${appkey}`)
    .then(resp => resp.json())
    .then(resp => resp.data);
}

/**
 * 按页查询学生数据
 */
export async function getPageStudents(page = 1, size = 10) {
  return await fetch(
    `api/student/findByPage?appkey=1002113844_1553930505347&page=${page}&size=${size}`
  )
    .then(resp => resp.json())
    .then(resp => resp.data);
}
