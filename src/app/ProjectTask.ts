import { Backlog } from "./Backlog";

export class ProjectTask{

    ptsk_Id: number;
    projectSequence: string;
    summary: string;
    acceptanceCriteria: string;
    status: string;
    priority: number;
    dueDate: Date;
    backlog: Backlog= new Backlog();
    createdAt: Date;
    updatedAt: Date;
}