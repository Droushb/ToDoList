import { Subtask } from "./subtask.mode";

export interface Task {
    text: string;
    isDone: boolean;
    isEditing?: boolean;
    subtasks: Subtask[];
}
  