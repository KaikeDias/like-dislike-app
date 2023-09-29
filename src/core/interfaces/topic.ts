interface Topic {
    id: string;
    description: string;
    author: Author;
    created_at: Date;
    tags: string[];
    active: boolean;
    upVote: number;
    downVote: number;
}