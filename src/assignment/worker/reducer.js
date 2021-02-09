const initialState = [
  {
    nama: 'budi',
    alamat: 'jalan ramai',
    email: 'budi@mail.com',
    telepon: '081212345678',
    biografi: 'seorang programmer',
  }
]

function add(state, action) {
  state.push({
    id: action.id,
    nama: action.nama,
    alamat: action.alamat,
    email: action.email,
    telepon: action.telepon,
    biografi: action.biografi
  });

  return state;
}

function read(state, action) {
  state = action.payload;
  return state;
}

function deleteWorker(state, action) {
  const index = state.findIndex(worker => worker.id === action.payload);
  console.log(index);
  state.splice(index, 1);
  return state;
}

module.exports = {
  initialState,
  add,
  read,
  deleteWorker,
}