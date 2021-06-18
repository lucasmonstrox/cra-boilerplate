export interface ITask {
    title: string
    id?: number
    done?: boolean
};

export interface PropsTaskForm {
    onTaskAdded: Function
};

export interface PropsTask {
    task: ITask,
    onRemove: Function,
    onToggle: Function
};