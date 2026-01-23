import React, { FormEvent, useEffect, useState } from 'react';
import { Users, Plus, Trash2, Loader2 } from 'lucide-react';
import { api, ApiUser } from '../../services/api';

export function UserDirectory() {
  const [users, setUsers] = useState<ApiUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.users.list();
      setUsers(response.data || []);
    } catch (err: any) {
      setError(err?.message || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setError('Name and email are required');
      return;
    }

    try {
      setSubmitting(true);
      setError(null);
      await api.users.create({ name, email, phone });
      setName('');
      setEmail('');
      setPhone('');
      await loadUsers();
    } catch (err: any) {
      setError(err?.message || 'Unable to add user');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await api.users.remove(id);
      await loadUsers();
    } catch (err: any) {
      setError(err?.message || 'Unable to delete user');
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-3xl shadow-xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00CED1] to-[#20B2AA] flex items-center justify-center text-white">
          <Users size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#003366]">Citizen Directory</h3>
          <p className="text-sm text-gray-500">Powered by your MySQL users table</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <input
          className="col-span-1 md:col-span-1 border border-gray-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00CED1]"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="col-span-1 md:col-span-1 border border-gray-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00CED1]"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="col-span-1 md:col-span-1 border border-gray-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00CED1]"
          placeholder="Phone (optional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          type="submit"
          className="col-span-1 md:col-span-1 flex items-center justify-center gap-2 bg-[#003366] text-white rounded-xl px-4 py-3 text-sm font-semibold hover:bg-[#004d7a] transition disabled:opacity-60"
          disabled={submitting}
        >
          {submitting ? <Loader2 className="animate-spin" size={18} /> : <Plus size={18} />}
          Add user
        </button>
      </form>

      {error && (
        <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
          {error}
        </div>
      )}

      <div className="rounded-2xl border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-3 bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500 px-4 py-2">
          <span>Name</span>
          <span>Email</span>
          <span className="text-right">Actions</span>
        </div>

        {loading ? (
          <div className="flex items-center gap-2 px-4 py-6 text-gray-500 text-sm">
            <Loader2 className="animate-spin" size={16} /> Loading users...
          </div>
        ) : users.length === 0 ? (
          <div className="px-4 py-6 text-sm text-gray-500">No users found. Add one above to verify the connection.</div>
        ) : (
          users.map((user) => (
            <div key={user.id} className="grid grid-cols-3 items-center px-4 py-3 border-t border-gray-100 text-sm text-gray-700">
              <span className="font-semibold text-[#003366]">{user.name}</span>
              <span className="truncate" title={user.email}>{user.email}</span>
              <div className="text-right">
                <button
                  onClick={() => handleDelete(user.id)}
                  className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 text-xs font-semibold"
                >
                  <Trash2 size={14} /> Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
