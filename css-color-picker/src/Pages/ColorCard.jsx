import { Palette } from 'lucide-react';
import Card from '../Component/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';


function ColorPage() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    const getColorData = async () => {
    try {
      const response = await axios.get("https://www.csscolorsapi.com/api/colors");
      const colorData = await response.data.colors
      console.log(colorData);
      setData(colorData)
    } catch (error) {
      console.log(error);
    }
  }
     getColorData()
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center gap-3 mb-10 border-b border-slate-200 pb-6">
          <Palette className="w-8 h-8 text-indigo-600" />
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Color Palette</h1>
            <p className="text-slate-500">Click to copy hex or rgb codes for your CSS</p>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((color, index) => (
            <Card key={index} {...color} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPage;