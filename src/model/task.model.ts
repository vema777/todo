export type TaskModel = {
    id: number;
    title: string;
    description: string;
    dateOfExpory: Date;
    createdAt: Date;
    updatedAt: Date;
    priority: number;
    isDeleted: boolean;
    isDone: boolean;
}