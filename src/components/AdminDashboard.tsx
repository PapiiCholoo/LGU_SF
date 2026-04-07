import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useContent, PageContent, ContentState } from '../contexts/ContentContext';
import { Settings, Save, CheckCircle2, ChevronRight, ChevronDown, Trash2, Plus, Upload } from 'lucide-react';

const formatLabel = (str: string) => {
  if (!str) return '';
  const spaces = str.replace(/([A-Z])/g, ' $1').trim();
  return spaces.charAt(0).toUpperCase() + spaces.slice(1);
};

const DynamicInput = ({ val, onChange, label, depth = 0 }: any) => {
  const [isExpanded, setIsExpanded] = useState(depth < 2); // Expand top-level objects by default
  const cleanLabel = formatLabel(label);

  if (Array.isArray(val)) {
    return (
      <div className={`border-l-[6px] border-[#00CED1] bg-white p-6 rounded-2xl my-4 shadow-md ${depth > 0 ? 'ml-4' : ''}`}>
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h4 className="text-xl font-extrabold text-[#003366] flex items-center gap-2">
            {isExpanded ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
            {cleanLabel} ({val.length} items)
          </h4>
        </div>
        
        {isExpanded && (
          <div className="mt-6 space-y-6">
            {val.map((item, idx) => (
              <div key={idx} className="bg-gray-100 border-2 border-gray-200 p-6 rounded-2xl relative group">
                <button 
                  type="button"
                  onClick={() => {
                    const newArr = [...val];
                    newArr.splice(idx, 1);
                    onChange(newArr);
                  }} 
                  className="absolute top-4 right-4 bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition-colors p-2 rounded-lg shadow-sm border border-red-200 font-bold flex items-center gap-2"
                  title="Remove Item"
                >
                  <Trash2 size={16} /> Delete This Item
                </button>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h5 className="font-extrabold text-base text-gray-700 uppercase tracking-wider">Item {idx + 1}</h5>
                </div>
                <DynamicInput 
                  val={item} 
                  onChange={(newItem: any) => {
                    const newArr = [...val];
                    newArr[idx] = newItem;
                    onChange(newArr);
                  }} 
                  depth={depth + 1}
                />
              </div>
            ))}
            <button 
              type="button"
              onClick={() => {
                const template = val.length > 0 ? JSON.parse(JSON.stringify(val[val.length - 1])) : "";
                if (typeof template === 'object' && template !== null) {
                  Object.keys(template).forEach(k => {
                    if (typeof template[k] === 'string') template[k]='';
                    if (typeof template[k] === 'number') template[k]=0;
                  });
                }
                onChange([...val, template]);
              }} 
              className="flex items-center gap-3 bg-[#00CED1] text-white px-6 py-4 rounded-xl text-lg font-bold hover:bg-[#20B2AA] transition-colors w-full justify-center shadow-lg"
            >
              <Plus size={24} /> Add New {cleanLabel.replace(/s$/, '')}
            </button>
          </div>
        )}
      </div>
    );
  } else if (typeof val === 'object' && val !== null) {
    return (
       <div className={`space-y-6 ${depth > 0 ? 'ml-2' : ''}`}>
         {Object.entries(val).map(([k, v]) => (
            <div key={k} className={typeof v === 'object' ? '' : 'bg-gray-50 p-4 border-2 border-gray-100 rounded-xl'}>
               {typeof v !== 'object' && (
                 <label className="block text-sm font-extrabold text-gray-700 mb-2 uppercase tracking-wide">
                   {formatLabel(k)}
                 </label>
               )}
               <DynamicInput 
                 val={v} 
                 onChange={(newV: any) => {
                   onChange({...val, [k]: newV});
                 }} 
                 label={k} 
                 depth={depth + 1} 
               />
            </div>
         ))}
       </div>
    );
  } else if (typeof val === 'string') {
    const isImage = label?.toLowerCase().includes('image') || val.includes('.jpg') || val.includes('.png');
    
    if (isImage) {
      return (
        <div className="relative space-y-4 bg-white p-4 rounded-xl border-2 border-[#00CED1]/30">
          {val && (val.startsWith('data:image') || val.includes('assets') || val.startsWith('http')) && (
            <div className="mb-4">
              <span className="block text-xs font-bold text-[#003366] mb-2 uppercase tracking-wider">Current Image Preview</span>
              <img src={val} alt="Preview" className="h-40 rounded-xl border-2 border-gray-200 shadow-md object-cover" />
            </div>
          )}
          
          <div>
            <label className="block text-base font-extrabold text-[#003366] mb-2">Upload From Computer</label>
            <label className="flex items-center justify-center w-full min-h-[80px] border-4 border-dashed border-[#00CED1] rounded-2xl hover:bg-[#00CED1]/10 transition-colors cursor-pointer p-4 group">
              <div className="flex flex-col items-center gap-2">
                <Upload className="text-[#00CED1] group-hover:scale-110 transition-transform" size={32} />
                <span className="font-bold text-[#003366] text-center">Click here to select a picture</span>
              </div>
              <input 
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onloadend = () => {
                       if (reader.result) onChange(reader.result.toString());
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </label>
          </div>

          <div className="pt-4 border-t-2 border-gray-200 mt-4">
            <label className="block text-sm font-bold text-gray-500 mb-2">Or Use Image Web Link</label>
            <div className="relative">
              <input 
                type="text" 
                value={val} 
                onChange={e => onChange(e.target.value)} 
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-[#00CED1] outline-none font-mono text-sm bg-gray-50 text-gray-700"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>
        </div>
      );
    }
    
    if (val.length > 50 || label?.toLowerCase().includes('description') || label?.toLowerCase().includes('text')) {
       return <textarea 
         value={val} 
         onChange={e => onChange(e.target.value)} 
         className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-[#00CED1] outline-none resize-y min-h-[120px] text-lg font-medium text-gray-800 bg-white" 
       />
    }
    
    return <input 
      type="text" 
      value={val} 
      onChange={e => onChange(e.target.value)} 
      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-[#00CED1] outline-none text-lg font-medium text-gray-800 bg-white"
    />
  } else if (typeof val === 'number') {
    return <input 
      type="number" 
      value={val} 
      onChange={e => onChange(Number(e.target.value))} 
      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-[#00CED1] outline-none text-lg font-medium text-gray-800 bg-white"
    />
  } else if (typeof val === 'boolean') {
    return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" checked={val} onChange={e => onChange(e.target.checked)} className="sr-only peer" />
        <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#00CED1]"></div>
      </label>
    );
  }
  return null;
}

export function AdminDashboard() {
  const { isLoggedIn } = useAuth();
  const { content, updatePageContent } = useContent();
  
  const [selectedPage, setSelectedPage] = useState<keyof ContentState>('home');
  const [formData, setFormData] = useState<PageContent>(content.home);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setFormData(content[selectedPage]);
    setShowSuccess(false);
  }, [selectedPage, content]);

  if (!isLoggedIn) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center bg-gray-50">
        <div className="text-center bg-white p-8 rounded-3xl shadow-2xl border-4 border-red-100">
          <h2 className="text-3xl font-black text-red-600 mb-4">Access Denied</h2>
          <p className="text-lg text-gray-600 font-medium">You must be logged in as an admin to view this page.</p>
        </div>
      </div>
    );
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updatePageContent(selectedPage, formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    
    // Jump to top to see success message
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pages: { id: keyof ContentState; label: string }[] = [
    { id: 'home', label: 'Home Page Content' },
    { id: 'transform', label: 'Transform Page Content' },
    { id: 'explore', label: 'Explore Page Content' },
    { id: 'serve', label: 'Serve Page Content' },
    { id: 'inform', label: 'Inform Page Content' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen pb-20">
      <div className="bg-[#003366] text-white py-12 px-4 shadow-lg mb-8">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-6">
          <div className="w-20 h-20 bg-[#FFD700] rounded-2xl flex items-center justify-center shadow-2xl">
            <Settings className="text-[#003366]" size={40} />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-black mb-2">Content Manager Portal</h1>
            <p className="text-lg text-white/80 font-medium">Click on any field below to securely update the website's live information.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-3 sticky top-24">
          <h3 className="font-black text-gray-500 mb-4 px-2 uppercase tracking-widest text-sm border-b-2 border-gray-200 pb-2">Select Which Page To Edit</h3>
          {pages.map((page) => (
             <button
             key={page.id}
             onClick={() => setSelectedPage(page.id)}
             className={`w-full text-left px-6 py-5 rounded-2xl transition-all font-black text-lg ${
               selectedPage === page.id
                 ? 'bg-gradient-to-r from-[#00CED1] to-[#20B2AA] text-white shadow-xl transform scale-105 border-none'
                 : 'bg-white text-[#003366] hover:bg-gray-50 hover:shadow-md border-2 border-gray-200'
             }`}
           >
             {page.label}
           </button>
          ))}
        </div>

        <div className="lg:col-span-3">
          <form onSubmit={handleSave} className="bg-white rounded-3xl shadow-2xl border-2 border-gray-200 overflow-hidden relative">
            <div className="p-6 md:p-8 border-b-4 border-gray-100 bg-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sticky top-0 z-10">
              <div>
                <h2 className="text-2xl font-black text-[#003366]">
                  {pages.find(p => p.id === selectedPage)?.label}
                </h2>
                <p className="text-sm font-bold text-gray-500 mt-2">Any changes you make here will instantly display on the main site.</p>
              </div>
              
              <div className="flex items-center gap-4 w-full sm:w-auto h-14">
                {showSuccess && (
                  <span className="flex items-center gap-2 text-green-600 text-lg font-black animate-in fade-in slide-in-from-right-4 mr-4 bg-green-100 px-4 py-2 rounded-full border-2 border-green-200">
                    <CheckCircle2 size={24} /> SAVED
                  </span>
                )}
                
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#FFD700] text-[#003366] font-black py-4 px-8 rounded-2xl hover:shadow-2xl transition-all hover:bg-yellow-400 border-2 border-transparent text-lg"
                >
                  <Save size={24} />
                  PUBLISH CHANGES
                </button>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              <DynamicInput 
                val={formData} 
                onChange={(newVal: any) => setFormData(newVal)} 
                label={selectedPage} 
              />
            </div>
            
            <div className="p-8 bg-gray-50 border-t-4 border-gray-100 flex justify-end">
               <button
                  type="submit"
                  className="flex items-center justify-center gap-3 bg-[#003366] text-white font-black py-4 px-10 rounded-2xl hover:shadow-2xl transition-all hover:bg-[#002244] border-2 border-transparent text-xl shadow-lg"
                >
                  <Save size={28} />
                  SAVE ALL CHANGES
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
