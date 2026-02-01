import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const ColorNew = ({ name, hex, rgb }) => {
  const [copiedType, setCopiedType] = useState(null); 

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Top: Color Name & Preview */}
      <div className="p-4 flex flex-col items-center">
        <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">
          {name}
        </span>
        <div 
          className="w-full h-32 rounded-xl shadow-inner transition-transform hover:scale-[1.02]"
          style={{ backgroundColor: name }}
        />
      </div>

      {/* Bottom: Action Buttons */}
      <div className="p-4 bg-slate-50 flex gap-2">
        <button
          onClick={() => copyToClipboard(hex, 'hex')}
          className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold bg-white border border-slate-200 hover:bg-slate-100 transition-colors text-slate-700"
        >
          {copiedType === 'hex' ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
          {hex}
        </button>
        
        <button
          onClick={() => copyToClipboard(rgb, 'rgb')}
          className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold bg-white border border-slate-200 hover:bg-slate-100 transition-colors text-slate-700"
        >
          {copiedType === 'rgb' ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
          RGB
        </button>
      </div>
    </div>
  );
};


export default ColorNew;