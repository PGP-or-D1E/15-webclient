Untuk menjalankan service :
- database

  ```bash
  npm start database
  ```
  - Database yang digunakan : MySQL
  - PORT : 6000
- worker
  ```bash
  npm start worker
  ```
  - PORT : 7000
- task
  ```bash
  npm start task
  ```
  - PORT : 8989
- performance
  ```bash
  npm start performance
  ```
  - Database yang digunakan : redis
  - PORT : 3232

## Versi 1.1
1. Task service
    - menampilkan service
    - task selesai
    - task batal
2. Performance Service
    - menampilkan jumlah perkerja
    - menampilkan jumlah task yang dibuat
    - menampilkan jumlah task yang dibatalkan
    - menampilkan jumlah task yang selesai
