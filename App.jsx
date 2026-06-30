import { useState } from 'react'
import './App.css'

function App() {
  const [countries, setCountries] = useState([])

  const getData = async () => {
    const res = await fetch('https://countriesnow.space/api/v0.1/countries')
    const json = await res.json()
    setCountries(json.data)
  }

  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-12 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
          Country & City Explorer
        </h1>

    
        <div className="flex justify-center mb-10">
          <button 
            onClick={getData}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:scale-105"
          >
            Load Data
          </button>
        </div>

        
        {countries.length > 0 && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-800/50">
                <tr>
                  <th className="px-8 py-5 text-indigo-400 font-bold uppercase tracking-wider text-sm">SR No</th>
                  <th className="px-8 py-5 text-indigo-400 font-bold uppercase tracking-wider text-sm">Country</th>
                  <th className="px-8 py-5 text-indigo-400 font-bold uppercase tracking-wider text-sm">Top Cities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {countries.slice(0, 15).map((item, index) => (
                  <tr key={index} className="hover:bg-indigo-950/30 transition-colors duration-300">
                    <td className="px-8 py-6 font-mono text-slate-500">{index + 1}</td>
                    <td className="px-8 py-6 font-bold text-lg text-slate-200">{item.country}</td>
                    <td className="px-8 py-6 text-sm text-slate-400 italic">
                      {item.cities.slice(0, 3).join(', ')}...
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default App