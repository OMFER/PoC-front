import { changelogData } from "../../mock/changelogData";

const ChangelogSection: React.FC = () => {
  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[400px]">
      {/* Header */}
      <div className="bg-[#1a0533] px-8 py-6 border-b border-gray-100 flex items-center justify-between sticky top-0 z-10">
        <h2 className="text-2xl font-bold text-[#F9F9F9]">Changelog Agnostiko BBVA</h2>
      </div>
      {/* Content */}
      <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
        {changelogData.map((entry, idx) => (
          <div key={idx} className="relative">
            <div className="flex items-baseline gap-4 mb-4">
              <h3 className="text-3xl font-bold text-gray-800">{entry.version}</h3>
              {entry.flutterVersion && (
                <span className="text-sm text-gray-500 font-medium">
                  versión de Flutter: {entry.flutterVersion}
                </span>
              )}
            </div>
            <ul className="space-y-3 pl-2">
              {entry.changes.map((change, cIdx) => (
                <li key={cIdx} className="flex items-start gap-3 text-gray-600 text-[15px] leading-relaxed">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                  {change}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1a0533;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #1a0533;
        }
      `}</style>
    </div>
  );
};

export default ChangelogSection;