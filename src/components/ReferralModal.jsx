import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import axios from 'axios';

export default function ReferralModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/submit`, formData);
      alert('Referral submitted successfully!');
      onClose();
    } catch (err) {
      alert('Submission failed: ' + err.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Refer a Friend</h2>
          <button onClick={onClose}>
            <XMarkIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border rounded-lg"
              onChange={(e) => setFormData({ ...formData, referrerName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Your Email</label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 border rounded-lg"
              onChange={(e) => setFormData({ ...formData, referrerEmail: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Friend's Name</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border rounded-lg"
              onChange={(e) => setFormData({ ...formData, refereeName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Friend's Email</label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 border rounded-lg"
              onChange={(e) => setFormData({ ...formData, refereeEmail: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}