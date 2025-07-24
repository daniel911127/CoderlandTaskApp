import tasksReducer, { addTask } from '../../redux/TasksSlice';

describe('tasks reducer', () => {
  it('should handle initial state', () => {
    expect(tasksReducer(undefined, { type: '' })).toEqual({ tasks: [] });
  });

  it('should handle addTask', () => {
    const previousState = { tasks: [] };
    const taskTitle = 'Test';
    expect(tasksReducer(previousState, addTask(taskTitle))).toEqual({
      tasks: [
        expect.objectContaining({
          description: taskTitle,
        }),
      ],
    });
  });
});