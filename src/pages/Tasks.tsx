import { useState } from 'react';
import { tasks as initialTasks } from '../data/mockData';
import { Task } from '../types';

export const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTaskStatus = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' }
        : task
    ));
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Tasks</h1>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.status === 'completed'}
                  onChange={() => toggleTaskStatus(task.id)}
                  className="w-4 h-4 text-blue-600"
                />
                <div>
                  <span className="font-medium">{task.title}</span>
                  <p className="text-sm text-gray-600">Points: {task.points}</p>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                Due: {task.deadline}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};