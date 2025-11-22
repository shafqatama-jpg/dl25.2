
import React, { useState } from 'react';
import { LEFT_COLUMN_DATA, MIDDLE_COLUMN_DATA, RIGHT_COLUMN_DATA, ALL_GROUPS } from './constants';
import { FaultState, TestData, TestStatus, ManoeuvreState, EtaState, EcoState, CandidateDetails } from './types';
import CompetencyRow from './components/CompetencyRow';
import Timer from './components/Timer';
import TestResultModal from './components/TestResultModal';
import { Car, Play, Square, FileCheck } from 'lucide-react';

export default function App() {
  const [status, setStatus] = useState<TestStatus>(TestStatus.IDLE);
  const [testData, setTestData] = useState<TestData>({});
  const [showResult, setShowResult] = useState(false);
  
  // Extra Form States
  const [manoeuvres, setManoeuvres] = useState<ManoeuvreState>({
    reverseRight: false, reverseParkRoad: false, reverseParkCarpark: false, forwardPark: false
  });
  const [eta, setEta] = useState<EtaState>({ physical: false, verbal: false });
  const [eco, setEco] = useState<EcoState>({ control: false, planning: false });
  const [candidate, setCandidate] = useState<CandidateDetails>({
    name: '', category: 'B', appRef: '', date: new Date().toLocaleDateString('en-GB'), 
    driverNo: '', time: new Date().toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'}),
    instructorReg: '', vehicleReg: ''
  });

  // Initialize or reset test data
  const initializeTest = () => {
    const initialData: TestData = {};
    ALL_GROUPS.forEach(group => {
      group.items.forEach(item => {
        initialData[item.id] = { minor: 0, serious: false, dangerous: false };
      });
    });
    setTestData(initialData);
    setManoeuvres({ reverseRight: false, reverseParkRoad: false, reverseParkCarpark: false, forwardPark: false });
    setEta({ physical: false, verbal: false });
    setEco({ control: false, planning: false });
  };

  const handleStart = () => {
    initializeTest();
    setStatus(TestStatus.RUNNING);
    setShowResult(false);
  };

  const handleStop = () => {
    setStatus(TestStatus.FINISHED);
    setShowResult(true);
  };

  const updateFault = (id: string, updates: Partial<FaultState>) => {
    setTestData(prev => ({
      ...prev,
      [id]: { ...prev[id], ...updates }
    }));
  };

  // Calculate quick stats
  const faults = Object.values(testData) as FaultState[];
  const currentMinors = faults.reduce((sum, item) => sum + item.minor, 0);
  const currentSerious = faults.filter(item => item.serious).length;
  const currentDangerous = faults.filter(item => item.dangerous).length;
  const hasAnyFaults = currentMinors > 0 || currentSerious > 0 || currentDangerous > 0;

  const ColumnRenderer = ({ data }: { data: typeof LEFT_COLUMN_DATA }) => (
    <div className="flex flex-col gap-2">
      {data.map((group) => (
        <div key={group.category} className="bg-white border-2 border-gray-800 rounded-sm overflow-hidden shadow-sm">
          {!group.noTitle && (
            <div className="bg-gray-200 px-2 py-1 border-b border-gray-400 font-bold text-slate-900 uppercase text-xs tracking-wider">
              {group.category}
            </div>
          )}
          
          {/* Special rendering for Manoeuvres checkboxes inside the Manoeuvres group */}
          {group.category === 'Manoeuvres' && (
            <div className="grid grid-cols-2 gap-1 p-2 border-b border-gray-300 text-xs bg-gray-50">
              <label className="flex items-center space-x-1">
                <input type="checkbox" checked={manoeuvres.reverseRight} onChange={e => setManoeuvres({...manoeuvres, reverseRight: e.target.checked})} className="w-4 h-4" disabled={status === TestStatus.FINISHED} />
                <span>Reverse / Right</span>
              </label>
              <label className="flex items-center space-x-1">
                <input type="checkbox" checked={manoeuvres.reverseParkRoad} onChange={e => setManoeuvres({...manoeuvres, reverseParkRoad: e.target.checked})} className="w-4 h-4" disabled={status === TestStatus.FINISHED} />
                <span>Rev park (road)</span>
              </label>
              <label className="flex items-center space-x-1">
                <input type="checkbox" checked={manoeuvres.reverseParkCarpark} onChange={e => setManoeuvres({...manoeuvres, reverseParkCarpark: e.target.checked})} className="w-4 h-4" disabled={status === TestStatus.FINISHED} />
                <span>Rev park (car park)</span>
              </label>
              <label className="flex items-center space-x-1">
                <input type="checkbox" checked={manoeuvres.forwardPark} onChange={e => setManoeuvres({...manoeuvres, forwardPark: e.target.checked})} className="w-4 h-4" disabled={status === TestStatus.FINISHED} />
                <span>Forward park</span>
              </label>
            </div>
          )}

          <div className="divide-y divide-gray-300">
            {group.items.map(item => (
              <CompetencyRow
                key={item.id}
                id={item.id}
                name={item.name}
                state={testData[item.id] || { minor: 0, serious: false, dangerous: false }}
                onUpdate={updateFault}
                disabled={status === TestStatus.FINISHED}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 text-slate-900 font-sans">
      
      {/* Top Bar: Timer & Controls */}
      <div className="bg-slate-900 text-white p-2 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="flex items-center space-x-3">
           <div className="font-bold text-lg tracking-tight hidden sm:block">DL25 Digital</div>
           {(status === TestStatus.RUNNING || hasAnyFaults) && (
             <div className="flex space-x-1 sm:space-x-2 text-xs font-bold">
               <div className={`px-2 py-1 rounded flex items-center ${currentMinors >= 16 ? 'bg-red-600 text-white' : 'bg-blue-100 text-blue-900'}`}>
                 <span className="hidden sm:inline mr-1">Minors:</span>
                 <span className="sm:hidden mr-1">M:</span>
                 {currentMinors}
               </div>
               <div className={`px-2 py-1 rounded flex items-center ${currentSerious > 0 ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'}`}>
                 <span className="hidden sm:inline mr-1">Serious:</span>
                 <span className="sm:hidden mr-1">S:</span>
                 {currentSerious}
               </div>
               <div className={`px-2 py-1 rounded flex items-center ${currentDangerous > 0 ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-300'}`}>
                 <span className="hidden sm:inline mr-1">Dangerous:</span>
                 <span className="sm:hidden mr-1">D:</span>
                 {currentDangerous}
               </div>
             </div>
           )}
        </div>
        
        <div className="flex items-center space-x-3">
          <Timer isRunning={status === TestStatus.RUNNING} />
          
          {status === TestStatus.IDLE ? (
            <button onClick={handleStart} className="bg-green-600 hover:bg-green-500 text-white px-4 py-1 rounded font-bold text-sm flex items-center">
              <Play className="w-4 h-4 mr-1" /> Start
            </button>
          ) : status === TestStatus.RUNNING ? (
            <button onClick={handleStop} className="bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded font-bold text-sm flex items-center">
              <Square className="w-4 h-4 mr-1" /> Finish
            </button>
          ) : (
            <button onClick={() => setShowResult(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1 rounded font-bold text-sm flex items-center">
              <FileCheck className="w-4 h-4 mr-1" /> Result
            </button>
          )}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto p-2 sm:p-4 space-y-4">
        
        {/* Form Header (Candidate Info) */}
        <div className="bg-white border-2 border-gray-800 p-3 rounded-sm shadow-sm">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-24 font-bold text-xs uppercase">Candidate</span>
                  <input className="flex-1 border-b border-gray-400 px-1 text-sm focus:outline-none focus:border-blue-500 bg-transparent" 
                    placeholder="Name" value={candidate.name} onChange={e => setCandidate({...candidate, name: e.target.value})} />
                </div>
                <div className="flex items-center">
                  <span className="w-24 font-bold text-xs uppercase">Address</span>
                  <input className="flex-1 border-b border-gray-400 px-1 text-sm focus:outline-none focus:border-blue-500 bg-transparent" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-20 font-bold text-xs uppercase">App Ref</span>
                  <input className="flex-1 border-b border-gray-400 px-1 text-sm focus:outline-none focus:border-blue-500 bg-transparent" 
                    value={candidate.appRef} onChange={e => setCandidate({...candidate, appRef: e.target.value})} />
                </div>
                <div className="flex items-center">
                  <span className="w-20 font-bold text-xs uppercase">Driver No</span>
                  <input className="flex-1 border-b border-gray-400 px-1 text-sm focus:outline-none focus:border-blue-500 bg-transparent" 
                    value={candidate.driverNo} onChange={e => setCandidate({...candidate, driverNo: e.target.value})} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-4">
                   <div className="flex items-center flex-1">
                     <span className="w-10 font-bold text-xs uppercase">Date</span>
                     <input className="w-full border-b border-gray-400 px-1 text-sm focus:outline-none focus:border-blue-500 bg-transparent" 
                       value={candidate.date} onChange={e => setCandidate({...candidate, date: e.target.value})} />
                   </div>
                   <div className="flex items-center w-24">
                     <span className="w-10 font-bold text-xs uppercase">Time</span>
                     <input className="w-full border-b border-gray-400 px-1 text-sm focus:outline-none focus:border-blue-500 bg-transparent" 
                       value={candidate.time} onChange={e => setCandidate({...candidate, time: e.target.value})} />
                   </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center flex-1">
                     <span className="w-20 font-bold text-xs uppercase">Category</span>
                     <input className="w-full border-b border-gray-400 px-1 text-sm focus:outline-none focus:border-blue-500 bg-transparent" 
                       value={candidate.category} onChange={e => setCandidate({...candidate, category: e.target.value})} />
                   </div>
                </div>
              </div>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2 border-t border-gray-200">
              <div className="flex items-center">
                <span className="font-bold text-xs uppercase mr-2">Instructor Reg</span>
                <input className="border border-gray-300 rounded px-2 py-1 text-sm w-24" />
              </div>
              <div className="flex items-center">
                <span className="font-bold text-xs uppercase mr-2">Vehicle Reg</span>
                <input className="border border-gray-300 rounded px-2 py-1 text-sm w-24" />
              </div>
              <div className="flex items-center space-x-4">
                 <label className="flex items-center text-xs font-bold"><input type="checkbox" className="mr-1" /> Manual</label>
                 <label className="flex items-center text-xs font-bold"><input type="checkbox" className="mr-1" /> Automatic</label>
              </div>
              <div className="flex items-center space-x-4">
                 <label className="flex items-center text-xs font-bold"><input type="checkbox" className="mr-1" /> Dual Control</label>
              </div>
           </div>
        </div>

        {/* Main Marking Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-start">
           <ColumnRenderer data={LEFT_COLUMN_DATA} />
           <ColumnRenderer data={MIDDLE_COLUMN_DATA} />
           <ColumnRenderer data={RIGHT_COLUMN_DATA} />
        </div>

        {/* Footer Section: ETA / ECO / Totals */}
        <div className="bg-white border-2 border-gray-800 p-4 rounded-sm shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* ETA */}
          <div className="flex items-center border border-gray-300 rounded p-2 space-x-4">
             <span className="font-bold text-sm text-slate-800">ETA</span>
             <label className="flex items-center space-x-1 text-sm">
                <input type="checkbox" checked={eta.physical} onChange={e => setEta({...eta, physical: e.target.checked})} className="w-5 h-5" />
                <span>Physical</span>
             </label>
             <label className="flex items-center space-x-1 text-sm">
                <input type="checkbox" checked={eta.verbal} onChange={e => setEta({...eta, verbal: e.target.checked})} className="w-5 h-5" />
                <span>Verbal</span>
             </label>
          </div>

          {/* ECO */}
          <div className="flex items-center border border-gray-300 rounded p-2 space-x-4">
             <span className="font-bold text-sm text-slate-800">ECO</span>
             <label className="flex items-center space-x-1 text-sm">
                <input type="checkbox" checked={eco.control} onChange={e => setEco({...eco, control: e.target.checked})} className="w-5 h-5" />
                <span>Control</span>
             </label>
             <label className="flex items-center space-x-1 text-sm">
                <input type="checkbox" checked={eco.planning} onChange={e => setEco({...eco, planning: e.target.checked})} className="w-5 h-5" />
                <span>Planning</span>
             </label>
          </div>

          {/* Totals Display Box (Simulating the "Total Faults" box on paper) */}
          <div className="flex items-center space-x-2">
             <div className="flex flex-col items-center border-2 border-gray-800 p-2 w-20 rounded">
               <span className="text-[10px] uppercase font-bold text-slate-500">Faults</span>
               <span className="text-2xl font-bold">{currentMinors}</span>
             </div>
             <div className="flex flex-col items-center border-2 border-gray-800 p-2 w-20 rounded bg-orange-50 border-orange-200">
               <span className="text-[10px] uppercase font-bold text-orange-800">Serious</span>
               <span className="text-2xl font-bold text-orange-600">{currentSerious}</span>
             </div>
             <div className="flex flex-col items-center border-2 border-gray-800 p-2 w-20 rounded bg-red-50 border-red-200">
               <span className="text-[10px] uppercase font-bold text-red-800">Danger</span>
               <span className="text-2xl font-bold text-red-600">{currentDangerous}</span>
             </div>
          </div>

        </div>
      </div>

      {/* Results Modal */}
      {showResult && (
        <TestResultModal 
          data={testData} 
          onClose={() => setShowResult(false)}
          onRestart={handleStart}
        />
      )}

    </div>
  );
}
