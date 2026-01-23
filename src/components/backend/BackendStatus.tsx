import React, { useEffect, useState } from 'react';
import { Database, Server, CheckCircle, AlertTriangle } from 'lucide-react';
import { api } from '../../services/api';

type Status = 'loading' | 'ok' | 'error';

type State = {
  server: Status;
  database: Status;
  message?: string;
};

export function BackendStatus() {
  const [state, setState] = useState<State>({ server: 'loading', database: 'loading' });

  useEffect(() => {
    const load = async () => {
      try {
        const [health, db] = await Promise.all([api.health(), api.dbTest()]);
        setState({
          server: health.status === 'ok' ? 'ok' : 'error',
          database: db.status === 'ok' ? 'ok' : 'error',
          message: health.message,
        });
      } catch (err: any) {
        setState({ server: 'error', database: 'error', message: err?.message || 'Unable to reach backend' });
      }
    };

    load();
  }, []);

  const statusChip = (label: string, status: Status, Icon: typeof CheckCircle) => (
    <div className="flex items-center gap-3 bg-white/90 rounded-xl px-4 py-3 shadow-md border border-gray-100">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
        status === 'ok' ? 'bg-green-100 text-green-600' : status === 'loading' ? 'bg-amber-100 text-amber-600' : 'bg-red-100 text-red-600'
      }`}>
        <Icon size={18} />
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-700">{label}</p>
        <p className="text-xs text-gray-500 capitalize">{status}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-[#003366] via-[#0d5c8d] to-[#00CED1] rounded-3xl p-6 md:p-8 shadow-2xl text-white">
      <div className="flex items-center gap-3 mb-4">
        <Server size={28} />
        <h3 className="text-2xl font-bold">Backend Connectivity</h3>
      </div>
      <p className="text-white/80 mb-6 text-sm md:text-base max-w-2xl">
        Live check showing whether the API server and MySQL database are reachable from this frontend. Update the base URL in VITE_API_BASE_URL if you deploy the backend elsewhere.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {statusChip('API Server', state.server, state.server === 'ok' ? CheckCircle : AlertTriangle)}
        {statusChip('MySQL Database', state.database, state.database === 'ok' ? Database : AlertTriangle)}
      </div>

      {state.message && (
        <div className="mt-4 bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-sm">
          <p className="font-semibold mb-1">Server message</p>
          <p className="text-white/80">{state.message}</p>
        </div>
      )}
    </div>
  );
}
