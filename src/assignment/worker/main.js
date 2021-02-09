const {
  addWorkerAsync,
  deleteWorkerAsync,
  fetchWorkerAsync,
} = require('./worker-client');
const { store$ } = require('./store');

const form = document.getElementById('form-pesan');
const namaInput = document.getElementsByName('nama')[0];
const alamatInput = document.getElementsByName('address')[0];
const emailInput = document.getElementsByName('email')[0];
const teleponInput = document.getElementsByName('phone')[0];
const biografiInput = document.getElementsByName('biografi')[0];
const list = document.getElementById('list-worker')

form.onsubmit = (event) => {
  event.preventDefault();
  const nama = namaInput.value;
  const alamat = alamatInput.value;
  const email = emailInput.value;
  const telepon = teleponInput.value;
  const biografi = biografiInput.value;

  if( !nama?.length || !alamat?.length || !email?.length || !telepon?.length || !biografi?.length) {
    return;
  }

  const worker = {
    nama,
    alamat,
    email,
    telepon,
    biografi
  }

  console.log(worker);
  store$.dispatch(addWorkerAsync(worker));
  namaInput.value = '';
  alamatInput.value = '';
  emailInput.value = '';
  teleponInput.value = '';
  biografiInput.value = '';
}

store$.dispatch(fetchWorkerAsync);
store$.subscribe(() => {
  const state = store$.getState();
  render(state);
});

function render(state) {
  list.innerHTML = '';
  for (let i = 0; i < state.length; i++) {
    const worker = state[i];
    const tr = document.createElement('tr');
    const colId = document.createElement('td');
    const colNama = document.createElement('td');
    const colAlamat = document.createElement('td');
    const colEmail = document.createElement('td');
    const colTelepon = document.createElement('td');
    const colBiografi = document.createElement('td');
    const colAction = document.createElement('td');
    const btnDelete = document.createElement('button')

    colId.innerHTML = worker.id;
    colNama.innerHTML = worker.nama;
    colAlamat.innerHTML = worker.alamat;
    colEmail.innerHTML = worker.email;
    colTelepon.innerHTML = worker.telepon;
    colBiografi.innerHTML = worker.biografi;
    btnDelete.innerText = 'Delete';
    btnDelete.onclick = () => {
      store$.dispatch(deleteWorkerAsync(worker.id));
    }
    colAction.append(btnDelete);

    tr.append(colId);
    tr.append(colNama);
    tr.append(colAlamat);
    tr.append(colEmail);
    tr.append(colTelepon);
    tr.append(colBiografi);
    tr.append(colAction);
    list.append(tr);
  }
}