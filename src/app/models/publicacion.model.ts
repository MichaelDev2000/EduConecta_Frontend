import { Comentario } from "./comentario.model";

export interface Publicacion {
    postId: string;
    contenido: string;
    imagen: string | null;
    creadoEn: string;
    actualizadoEn: string | null;
    temaNombre: string;
    temaDescripcion: string;
    usuarioID: string;
    usuarioNombre: string;
    usuarioImagen: string | null;
    grupoId: string | null;
    grupoNombre: string | null;
    grupoDescripcion: string | null;
    numeroLikes: number;
    comentarios: Comentario[];
    nuevoComentario: string;
    mostrarComentarios?: boolean;
    haDadoLike: boolean;
}