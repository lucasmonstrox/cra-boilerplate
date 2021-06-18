export interface ITask {
    title: string
    id?: number
};

export interface PropsTaskForm {
    onTaskAdded: Function
};

export interface PropsTask {
    task: ITask,
    onRemove: Function
};