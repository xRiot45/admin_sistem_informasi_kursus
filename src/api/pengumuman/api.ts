import API_JSON from '../../configs/API_JSON';

const URL = 'pengumuman';

export async function get() {
  return await API_JSON.get(`/api/${URL}`);
}

export async function getById(id_pengumuman: string) {
  return await API_JSON.get(`/api/${URL}/${id_pengumuman}`);
}

export async function post(data: object) {
  return await API_JSON.post(`/api/${URL}`, data);
}

export async function put(id_pengumuman: string, data: object) {
  return await API_JSON.put(`/api/${URL}/${id_pengumuman}`, data);
}
