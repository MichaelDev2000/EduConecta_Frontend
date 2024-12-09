export interface ComentarioPost{
    comentarioId?:string;
    comentContenido: string;
    createdAt?: string;
    usuario:{
        usuarioId: string;
    };
    publicacione:{
        postId: string;
    };
}