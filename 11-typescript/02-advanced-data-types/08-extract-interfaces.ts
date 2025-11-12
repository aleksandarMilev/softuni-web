type Status = "Logged" | "Started" | "InProgress" | "Done";

type User = { username: string; signupDate: Date };

type ChangeStatus = (status: Status) => void;

type Task = {
  status: Status;
  title: string;
  daysRequired: number;
  assignedTo: User | undefined;
  changeStatus: ChangeStatus;
};

export const assignTask = (user: User, task: Task) => {
  if (task.assignedTo === undefined) {
    task.assignedTo = user;
    console.log(`User ${user.username} assigned to task '${task.title}'`);
  }
};
