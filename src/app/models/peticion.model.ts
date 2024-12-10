interface Usuario {
    usuarioId: string;
    usuNombres: string;
    usuApellidos: string;
    usuCorreo: string;
    usuImgperfil: string;
    usuStatus: number;
    usuBiografia: string;
    createdAt: string;
}

interface Peticion {
    peticionId: string;
    peticionEstado: string;
    usuario1: Usuario;
    usuario2: Usuario;
}