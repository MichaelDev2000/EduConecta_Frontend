export interface Post {
    postId?: string;
    postContenido: string;
    postImgpost?: string | null;
    createdAt?: string;
    usuarioId: {
        usuarioId: string;
    };
    grupoId?: {
        grupoId?: string;
        grupoNombre?: string;
        grupoDescripcion?: string;
        grupoImggrupo?: string;
    };
    temaId: {
        temaId: string;
    };
}
