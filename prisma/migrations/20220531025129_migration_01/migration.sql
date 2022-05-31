/*
  Warnings:

  - You are about to drop the `Games` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Gender` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Games";

-- DropTable
DROP TABLE "Gender";

-- CreateTable
CREATE TABLE "gender" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "gender_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "games" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "imdbScore" DOUBLE PRECISION NOT NULL,
    "trailerYoutubeUrl" TEXT NOT NULL,
    "gameplayYoutubeUrl" TEXT NOT NULL,
    "coverImageUrl" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "isAdmin" BOOLEAN,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "genders_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GendersGames" (
    "id" TEXT NOT NULL,
    "gendersId" TEXT NOT NULL,
    "gamesId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GendersGames_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileGames" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "gamesId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProfileGames_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "gender_name_key" ON "gender"("name");

-- CreateIndex
CREATE UNIQUE INDEX "games_title_key" ON "games"("title");

-- CreateIndex
CREATE UNIQUE INDEX "user_nickname_key" ON "user"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_cpf_key" ON "user"("cpf");

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_genders_id_fkey" FOREIGN KEY ("genders_id") REFERENCES "gender"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GendersGames" ADD CONSTRAINT "GendersGames_gendersId_fkey" FOREIGN KEY ("gendersId") REFERENCES "gender"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GendersGames" ADD CONSTRAINT "GendersGames_gamesId_fkey" FOREIGN KEY ("gamesId") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileGames" ADD CONSTRAINT "ProfileGames_gamesId_fkey" FOREIGN KEY ("gamesId") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileGames" ADD CONSTRAINT "ProfileGames_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
