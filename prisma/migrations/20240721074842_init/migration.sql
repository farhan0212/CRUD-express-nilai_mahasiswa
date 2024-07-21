-- CreateTable
CREATE TABLE "Mahasiswa" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Mahasiswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MataKuliah" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "dosenId" INTEGER NOT NULL,

    CONSTRAINT "MataKuliah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dosen" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Dosen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nilai" (
    "id" SERIAL NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "mahasiswaId" INTEGER NOT NULL,
    "matakuliahId" INTEGER NOT NULL,

    CONSTRAINT "Nilai_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MataKuliahMahasiswa" (
    "mahasiswaId" INTEGER NOT NULL,
    "matakuliahId" INTEGER NOT NULL,

    CONSTRAINT "MataKuliahMahasiswa_pkey" PRIMARY KEY ("mahasiswaId","matakuliahId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mahasiswa_username_key" ON "Mahasiswa"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Mahasiswa_email_key" ON "Mahasiswa"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Dosen_username_key" ON "Dosen"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Dosen_email_key" ON "Dosen"("email");

-- AddForeignKey
ALTER TABLE "MataKuliah" ADD CONSTRAINT "MataKuliah_dosenId_fkey" FOREIGN KEY ("dosenId") REFERENCES "Dosen"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nilai" ADD CONSTRAINT "Nilai_mahasiswaId_fkey" FOREIGN KEY ("mahasiswaId") REFERENCES "Mahasiswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nilai" ADD CONSTRAINT "Nilai_matakuliahId_fkey" FOREIGN KEY ("matakuliahId") REFERENCES "MataKuliah"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MataKuliahMahasiswa" ADD CONSTRAINT "MataKuliahMahasiswa_mahasiswaId_fkey" FOREIGN KEY ("mahasiswaId") REFERENCES "Mahasiswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MataKuliahMahasiswa" ADD CONSTRAINT "MataKuliahMahasiswa_matakuliahId_fkey" FOREIGN KEY ("matakuliahId") REFERENCES "MataKuliah"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
