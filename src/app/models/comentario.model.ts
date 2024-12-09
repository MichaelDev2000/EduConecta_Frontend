export interface Comentario {
    comentarioId: string;
    contenido: string;
    creadoEn: string;
    actualizadoEn: string | null;
    usuarioID: string;
    usuarioNombre: string;
    usuarioImagen: string | null;
}
