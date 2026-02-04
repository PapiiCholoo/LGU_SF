import React from 'react';

export function LegislativeAdmin() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-[var(--color-brand-turquoise)] mb-6">Legislative Branch CMS</h1>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[var(--color-brand-khaki)]">
                <p className="text-gray-700 mb-4">Welcome to the Legislative Management Portal.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded border border-slate-200">
                        <h3 className="font-bold mb-2">Ordinances & Resolutions</h3>
                        <button className="bg-[var(--color-brand-khaki)] text-slate-900 px-4 py-2 rounded hover:opacity-90 font-medium">Upload Document</button>
                    </div>
                    <div className="p-4 bg-slate-50 rounded border border-slate-200">
                        <h3 className="font-bold mb-2">Session Logs</h3>
                        <button className="bg-[var(--color-brand-khaki)] text-slate-900 px-4 py-2 rounded hover:opacity-90 font-medium">View Logs</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
