export interface TodoDto {
    title: string;
    description: string;
    createdAt: string;
    completedAt?: string | null;
}
