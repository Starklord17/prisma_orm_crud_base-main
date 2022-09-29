const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

// Función asincrona para enviar consultas a la base de datos
async function main() {
    // Crear un registro
    const post = await prisma.post.createMany({
        data: [
            {title: 'Título 2', content: 'Este es mi segundo post'},
            {title: 'Título 3', content: 'Este es mi tercero post'},
            {title: 'Título 4', content: 'Este es mi cuarto post'},
        ]
    })
    console.log(post);

    // Mostrar todos los registros
    const allPosts = await prisma.post.findMany()
    console.log(allPosts);

    // Mostrar un solo registro
/*     const post = await prisma.post.findUnique({
        where: {
            id: 3
        }
    })
    console.log(post); */

    // Actualizar un registro
    const updatePost = await prisma.post.update({
        where: {
            id: 4
        },
        data: {
            title: 'Titulo 4 - editado',
            content: 'Contenido editado'
        }
    })
    console.log(updatePost);

    // Eliminar un registro
    const deletePost = await prisma.post.delete({
        where: {
            id: 2
        }
    })
    console.log(deletePost);

}

main()
    .catch( (e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })