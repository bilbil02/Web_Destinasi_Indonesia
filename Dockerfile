# Gunakan base image node:alpine
FROM node:alpine

# Buat direktori kerja di dalam container
WORKDIR /app

# Salin semua file proyek ke dalam container
COPY . /app

# Instal live-server sebagai dependency
RUN npm install

# Ekspos port default live-server
EXPOSE 8080

# Jalankan live-server melalui index.js
CMD ["node", "index.js"]