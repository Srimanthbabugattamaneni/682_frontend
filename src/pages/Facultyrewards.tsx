import { facultytasks } from '../data/mockData';

export const Facultyrewards = () => {
    const completedTasks = facultytasks.filter((task) => task.status === 'completed');
    const totalPoints = completedTasks.reduce((sum, task) => sum + task.points, 0);
  
    const getBadgeInfo = () => {
      if (totalPoints >= 5000) return { type: 'Gold', color: 'yellow-500', emoji: '🏆' };
      if (totalPoints >= 3000) return { type: 'Silver', color: 'gray-400', emoji: '🥈' };
      if (totalPoints >= 1000) return { type: 'Bronze', color: 'amber-600', emoji: '🥉' };
      return null;
    };
  const badgeInfo = getBadgeInfo();

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Rewards</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Completed Tasks Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Completed Tasks</h2>
          <div className="space-y-4">
            {completedTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="font-medium">{task.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-blue-600">
                    +{task.points} points
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total Points Earned:</span>
              <span className="text-lg font-bold text-blue-600">{totalPoints}</span>
            </div>
          </div>
        </div>

        {/* Badges Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Available Badges</h2>
          <div className="space-y-4">
            <div className={`p-4 rounded-lg border-2 ${totalPoints >= 5000 ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <h3 className="font-semibold">Gold Badge</h3>
                    <p className="text-sm text-gray-600">5000+ points</p>
                  </div>
                </div>
                {totalPoints >= 5000 && <span className="text-yellow-500">Earned!</span>}
              </div>
            </div>

            <div className={`p-4 rounded-lg border-2 ${totalPoints >= 3000 && totalPoints < 5000 ? 'border-gray-400 bg-gray-50' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🥈</span>
                  <div>
                    <h3 className="font-semibold">Silver Badge</h3>
                    <p className="text-sm text-gray-600">3000+ points</p>
                  </div>
                </div>
                {totalPoints >= 3000 && <span className="text-gray-500">Earned!</span>}
              </div>
            </div>

            <div className={`p-4 rounded-lg border-2 ${totalPoints >= 1000 && totalPoints < 3000 ? 'border-amber-600 bg-amber-50' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🥉</span>
                  <div>
                    <h3 className="font-semibold">Bronze Badge</h3>
                    <p className="text-sm text-gray-600">1000+ points</p>
                  </div>
                </div>
                {totalPoints >= 1000 && <span className="text-amber-600">Earned!</span>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {badgeInfo && (
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6 text-center">
          <h3 className="text-2xl font-semibold mb-2">
            Congratulations! 🎉
          </h3>
          <p className="text-lg">
            You've earned the <span className={`text-${badgeInfo.color} font-semibold`}>
              {badgeInfo.type} Badge
            </span> {badgeInfo.emoji}
          </p>
        </div>
      )}
    </div>
  );
};