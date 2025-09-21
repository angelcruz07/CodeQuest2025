import prisma from '@/lib/prisma';

type LikeActionInput = { 
    postId: string; 
    increment: boolean;
}; 

export async function createUpdateLike({ postId, increment }: LikeActionInput )  {
    const post = await prisma.post.update({ 
        where: { id: postId }, 
        data: { 
            likes: { 
                [increment ? "increment" : "decrement"]: 1,
            },
        },
    }); 
    return post;
}