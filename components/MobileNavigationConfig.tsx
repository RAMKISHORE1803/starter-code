import React, { useState } from 'react';
import { X, Plus, Smartphone, Navigation, Menu, CheckCircle2 } from 'lucide-react';

const MobileNavigationConfig = () => {
  const [tabs, setTabs] = useState([
    { id: 1, name: 'Home', icon: '🏠' },
    { id: 2, name: 'Profile', icon: '👤' },
  ]);
  const [newTabName, setNewTabName] = useState('');

  const addTab = () => {
    if (newTabName.trim() && tabs.length < 5) {
      setTabs([...tabs, { 
        id: Date.now(), 
        name: newTabName.trim(),
        icon: '📱' 
      }]);
      setNewTabName('');
    }
  };

  const removeTab = (id: number) => {
    setTabs(tabs.filter(tab => tab.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-gray-800/50">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-black/30 rounded-lg">
            <Navigation className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Mobile Navigation Setup</h3>
            <p className="text-gray-400 mt-1">Configure your app's navigation structure</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Tab Preview */}
          <div className="relative">
            <div className="bg-gray-950 rounded-xl p-4 border border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <Smartphone className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-400">Tab Preview</span>
              </div>
              <div className="flex justify-around items-center py-3 px-4 bg-gray-900 rounded-lg">
                {tabs.map(tab => (
                  <div key={tab.id} className="flex flex-col items-center gap-1">
                    <span className="text-xl">{tab.icon}</span>
                    <span className="text-xs text-gray-400">{tab.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Management */}
          <div className="space-y-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={newTabName}
                onChange={(e) => setNewTabName(e.target.value)}
                placeholder="Enter tab name"
                className="flex-1 px-4 py-2 bg-gray-950 rounded-lg border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                disabled={tabs.length >= 5}
              />
              <button
                onClick={addTab}
                disabled={!newTabName.trim() || tabs.length >= 5}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Tab
              </button>
            </div>

            <div className="space-y-2">
              {tabs.map(tab => (
                <div key={tab.id} className="flex items-center justify-between p-3 bg-gray-950 rounded-lg border border-gray-800">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{tab.icon}</span>
                    <span>{tab.name}</span>
                  </div>
                  <button
                    onClick={() => removeTab(tab.id)}
                    className="p-1 hover:bg-gray-800 rounded-full text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {tabs.length >= 5 && (
              <p className="text-yellow-400 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Maximum number of tabs reached (5)
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigationConfig;