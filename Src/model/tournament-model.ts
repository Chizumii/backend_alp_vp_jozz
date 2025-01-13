import { Tournament } from "@prisma/client";

export interface CreateTournament {
    nama_tournament: string;
    description: string;
    image: String;
    tipe: string;
    biaya: string;
    LokasiID: number;
}

export interface TournamentResponse {
    TournamentID: number;
    nama_tournament: string;
    description: string;
    image: string;
    tipe: string;
    biaya: string;
    LokasiID: number;
}

export interface TournamentRequest {
    TournamentID: number;
    nama_tournament: string;
    description: string;
    image: string;
    tipe: string;
    biaya: string;
    LokasiID: number;
}

export interface UpdateTournament {
    nama_tournament: string;
    description: string;
    image: Express.Multer.File;
    tipe: string;
    biaya: string;
    LokasiID: number;
}
export interface DeleteTournament {
    nama_tournament: string;
    description: string;
    image: string;
    tipe: string;
    biaya: string;
    LokasiID: number;
}

export interface getAllTournament {
    nama_tournament: string;
    description: string;
    image: string;
    tipe: string;
    biaya: string;
    LokasiID: number;
}

// Fungsi untuk konversi dari entitas Prisma ke respons
export function toTournamentResponse(prismaTournament: Tournament): TournamentResponse {
    return {
        TournamentID: prismaTournament.TournamentID,
        nama_tournament: prismaTournament.nama_tournament,
        description: prismaTournament.description,
        image: prismaTournament.image,
        tipe: prismaTournament.tipe,
        biaya: prismaTournament.biaya,
        LokasiID: prismaTournament.LokasiID,
    };
}