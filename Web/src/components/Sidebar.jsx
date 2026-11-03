export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard & Firestore', icon: '📊' },
    { id: 'laravel', label: 'Laravel Backend API', icon: '⚡' },
    { id: 'edge', label: 'Edge Computing', icon: '🌐' },
  ];

  return (
    <ul className="menu bg-base-200 w-64 min-h-[calc(100vh-4rem)] p-4 text-base-content">
      <li className="menu-title">Navigation</li>
      {menuItems.map((item) => (
        <li key={item.id}>
          <button
            className={`flex items-center gap-3 ${activeTab === item.id ? 'active font-semibold' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
}